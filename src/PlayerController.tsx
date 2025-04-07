import { OrbitControls, useKeyboardControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useBeforePhysicsStep } from "@react-three/rapier";
import { useControls as useLeva } from "leva";
import { useEffect, useRef } from "react";
import { MathUtils, Quaternion, Vector3 } from "three";
import { Vehicle, VehicleRef } from "./components/3D/car/vehicle";
import { AFTER_RAPIER_UPDATE, maxRPM, minRPM, gears } from "./constants";
import { useGameStatsStore, useGameStore } from "./store/store";
import { audioManager } from "./AudioManager";

const chassisTranslation = new Vector3();
const chassisRotation = new Quaternion();

export const PlayerController = () => {
  const raycastVehicle = useRef<VehicleRef>(null);

  const [, get] = useKeyboardControls();
  const addDistance = useGameStatsStore((state) => state.addDistance);
  const setSpeed = useGameStore((state) => state.setSpeed);
  const setGear = useGameStore((state) => state.setGear);
  const setRpm = useGameStore((state) => state.setRpm);
  const setIsClutchEngaged = useGameStore((state) => state.setIsClutchEngaged);
  const togglePause = useGameStore((state) => state.togglePause);
  const pause = useGameStore((state) => state.pause);
  const pausePressed = useKeyboardControls((state) => state.pause);

  const { cameraMode } = useLeva(
    "camera",
    {
      cameraMode: {
        value: "drive",
        options: ["drive", "orbit"],
      },
    },
    {
      collapsed: true,
    }
  );

  const { maxForce, maxSteer, maxBrake } = useLeva(
    "controls",
    {
      maxForce: 12.5,
      maxSteer: { value: Math.PI / 12, min: 0, max: Math.PI / 6 },
      maxBrake: 0.15,
    },
    {
      collapsed: true,
    }
  );

  useEffect(() => {
    if (audioManager) {
      audioManager.play("engine-loop", {
        loop: true,
        volume: 0.3,
        playbackRate: 0.5,
      });
    }
  }, []);
  const currentSteering = useRef(0);
  const lastTimeRef = useRef<number | null>(null);

  const currentGearRef = useRef(1);
  const rpmRef = useRef(2000);

  const lastGearChangeTime = useRef(performance.now());
  const gearChangeCooldown = 600;
  const isClutchEngaged = useRef(false);
  const distanceDone = useRef(0);
  const addTime = useGameStore((state) => state.addTime);
  const brakeSound = useRef(0);

  const updateGearbox = (speed: number, isBraking: boolean) => {
    const absSpeed = Math.max(0, Math.abs(speed));
    const gear = gears[currentGearRef.current - 1];

    rpmRef.current = (absSpeed / gear.maxSpeed) * (maxRPM - minRPM) + minRPM;

    rpmRef.current = Math.max(minRPM, rpmRef.current);

    const now = performance.now();

    if (
      isClutchEngaged.current &&
      now - lastGearChangeTime.current > gearChangeCooldown
    ) {
      isClutchEngaged.current = false;
    }

    if (
      rpmRef.current > maxRPM * 0.9 &&
      currentGearRef.current < gears.length
    ) {
      if (now - lastGearChangeTime.current > gearChangeCooldown) {
        currentGearRef.current++;
        audioManager.play("exhaust-pop", {
          volume: currentGearRef.current / 6 + 0.1,
        });
        lastGearChangeTime.current = now;
        isClutchEngaged.current = true;
      }
    }

    if (
      (rpmRef.current < 2000 ||
        speed < gears[currentGearRef.current - 1].maxSpeed * 0.6) &&
      currentGearRef.current > 1
    ) {
      if (now - lastGearChangeTime.current > gearChangeCooldown) {
        currentGearRef.current--;
        audioManager.play("exhaust-pop", {
          volume: currentGearRef.current / 6 + 0.1,
        });
        lastGearChangeTime.current = now;
        isClutchEngaged.current = true;
      }
    }

    if (isBraking && absSpeed < 10 && currentGearRef.current > 1) {
      if (now - lastGearChangeTime.current > gearChangeCooldown) {
        currentGearRef.current = Math.max(1, currentGearRef.current - 1);
        lastGearChangeTime.current = now;
        isClutchEngaged.current = true;
      }
    }
  };

  useBeforePhysicsStep((world) => {
    if (
      !raycastVehicle.current ||
      !raycastVehicle.current.rapierRaycastVehicle.current
    ) {
      return;
    }

    if (pause) {
      world.timestep = 0;
    }
    const timestep = world.timestep;
    const currentTime = performance.now() / 1000;

    let deltaTime = timestep;
    if (lastTimeRef.current !== null) {
      deltaTime = currentTime - lastTimeRef.current;
    }
    lastTimeRef.current = currentTime;

    const deltaAdjusted = deltaTime * 60;

    const { forward, back, left, right, brake, handbrake } = get();

    const {
      wheels,
      rapierRaycastVehicle: { current: vehicle },
    } = raycastVehicle.current;

    const speedKmHour = Math.abs(vehicle.state.currentVehicleSpeedKmHour);
    const speedMetersPerSecond = speedKmHour * (1000 / 3600); // Convert km/h to m/s
    updateGearbox(speedKmHour, brake);
    const gameStarted = useGameStore.getState().gameStarted;

    const gear = gears[currentGearRef.current - 1];

    let engineForce = 0;

    if (gameStarted) {
      addTime(deltaTime);
      if (forward) {
        const speedFactor = 1 - Math.pow(speedKmHour / gear.maxSpeed, 2.5);
        engineForce += maxForce * speedFactor * gear.ratio;
      }
      if (back) {
        engineForce -= maxForce;
      }
    }

    vehicle.applyEngineForce(isClutchEngaged.current ? 0 : engineForce, 2);
    vehicle.applyEngineForce(isClutchEngaged.current ? 0 : engineForce, 3);

    currentSteering.current = MathUtils.lerp(
      currentSteering.current,
      left ? maxSteer : right ? -maxSteer : 0,
      0.01 * deltaAdjusted
    );

    const brakeForce = brake
      ? maxBrake * deltaAdjusted
      : !forward
      ? 0.05 * deltaAdjusted
      : 0;

    vehicle.setBrakeValue(brakeForce * 0.6, 0);
    vehicle.setBrakeValue(brakeForce * 0.6, 1);
    vehicle.setBrakeValue(brakeForce * 0.6, 2);
    vehicle.setBrakeValue(brakeForce * 0.6, 3);

    if (handbrake) {
      vehicle.setBrakeValue(brakeForce * 10, 2);
      vehicle.setBrakeValue(brakeForce * 10, 3);
    }

    vehicle.setSteeringValue(currentSteering.current, 0);
    vehicle.setSteeringValue(currentSteering.current, 1);

    vehicle.applyEngineForce(engineForce, 2);
    vehicle.applyEngineForce(engineForce, 3);

    vehicle.update(world.timestep);

    for (let i = 0; i < vehicle.wheels.length; i++) {
      const wheelObject = wheels[i].object.current;
      if (!wheelObject) continue;

      const wheelState = vehicle.wheels[i].state;
      wheelObject.position.copy(wheelState.worldTransform.position);
      wheelObject.quaternion.copy(wheelState.worldTransform.quaternion);
    }

    setSpeed(Math.floor(speedKmHour));
    setGear(currentGearRef.current);
    setRpm(Math.floor(rpmRef.current));
    setIsClutchEngaged(isClutchEngaged.current);

    if (speedMetersPerSecond > 0) {
      addDistance(speedMetersPerSecond * deltaTime);
    }
  });

  useFrame(() => {
    if (cameraMode !== "drive" || pause) return;

    const chassis = raycastVehicle.current?.chassisRigidBody;
    if (!chassis?.current) return;

    chassisRotation.copy(chassis.current.rotation() as Quaternion);
    chassisTranslation.copy(chassis.current.translation() as Vector3);

    const normalizedRPM = Math.min(Math.max(rpmRef.current / 7000, 0), 1); // normalize
    const volume = 0.2 + normalizedRPM * 0.8;
    const playbackRate = 0.2 + normalizedRPM * 1.5;

    audioManager.update("engine-loop", { volume, playbackRate });
  }, AFTER_RAPIER_UPDATE);

  return (
    <>
      {/* raycast vehicle */}
      <Vehicle
        ref={raycastVehicle}
        position={[0, 3, 0]}
        rotation={[0, -Math.PI / 2, 0]}
      />

      {cameraMode === "orbit" && <OrbitControls />}
    </>
  );
};
