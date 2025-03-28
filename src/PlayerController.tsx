import { OrbitControls, useKeyboardControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useBeforePhysicsStep } from "@react-three/rapier";
import { useControls as useLeva } from "leva";
import { useRef } from "react";
import { MathUtils, Quaternion, Vector3 } from "three";
import { Vehicle, VehicleRef } from "./components/3D/car/vehicle";
import { AFTER_RAPIER_UPDATE, maxRPM, minRPM, gears } from "./constants";
import { useGameStore } from "./store/store";

const chassisTranslation = new Vector3();
const chassisRotation = new Quaternion();

export const PlayerController = () => {
  const raycastVehicle = useRef<VehicleRef>(null);

  const [, get] = useKeyboardControls();
  const gameState = useGameStore((state) => state.gameState);


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
    },
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
    },
  );

  const currentSteering = useRef(0);
  const lastTimeRef = useRef<number | null>(null);

  const currentGearRef = useRef(1);
  const rpmRef = useRef(2000);

  const lastGearChangeTime = useRef(performance.now());
  const gearChangeCooldown = 1000;
  const isClutchEngaged = useRef(false);
  
  const updateGearbox = (speed: number, isBraking: boolean) => {
    const absSpeed = Math.max(0, Math.abs(speed));
    const gear = gears[currentGearRef.current - 1];
  
    rpmRef.current = (absSpeed / gear.maxSpeed) * (maxRPM - minRPM) + minRPM;
  
    if (isBraking) {
      rpmRef.current *= 0.85;
    }
  
    rpmRef.current = Math.max(minRPM, rpmRef.current);
  
    const now = performance.now();
  
    if (isClutchEngaged.current && now - lastGearChangeTime.current > gearChangeCooldown) {
      isClutchEngaged.current = false;
    }
  
    if (rpmRef.current > maxRPM * 0.9 && currentGearRef.current < gears.length) {
      if (now - lastGearChangeTime.current > gearChangeCooldown) { 
        currentGearRef.current++;
        lastGearChangeTime.current = now;
        isClutchEngaged.current = true;
      }
    }
  
    if ((rpmRef.current < 2000 || speed < gears[currentGearRef.current - 1].maxSpeed * 0.6) 
        && currentGearRef.current > 1) {
      if (now - lastGearChangeTime.current > gearChangeCooldown) {
        currentGearRef.current--;
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

    const timestep = world.timestep;
    const currentTime = performance.now() / 1000;

    let deltaTime = timestep; // Default to the physics step
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
    updateGearbox(speedKmHour, brake);

    const gear = gears[currentGearRef.current - 1];

    let engineForce = 0;
    
      if (forward) {
        const speedFactor = 1 - Math.pow(speedKmHour / gear.maxSpeed, 2.5);
        engineForce += maxForce * speedFactor * gear.ratio;
      }
      if (back) {
        engineForce -= maxForce;
      }
    
    console.log(isClutchEngaged.current);
    vehicle.applyEngineForce(isClutchEngaged.current ? 0 : engineForce, 2);
    vehicle.applyEngineForce(isClutchEngaged.current ? 0 : engineForce, 3);


    currentSteering.current = MathUtils.lerp(
      currentSteering.current,
      left ? maxSteer : right ? -maxSteer : 0,
      0.01 * deltaAdjusted,
    );

    const brakeForce = brake ? maxBrake : !forward ? 0.05 : 0;

    vehicle.setBrakeValue(brakeForce * 0.6, 0);
    vehicle.setBrakeValue(brakeForce * 0.6, 1);
    vehicle.setBrakeValue(brakeForce * 0.2, 2);
    vehicle.setBrakeValue(brakeForce * 0.2, 3);

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

    if (gameState) {
      gameState.speed = Math.floor(speedKmHour);
      gameState.gear = currentGearRef.current;
      gameState.rpm = rpmRef.current;
    }
  });

  useFrame(() => {
    if (cameraMode !== "drive") return;

    const chassis = raycastVehicle.current?.chassisRigidBody;
    if (!chassis?.current) return;

    chassisRotation.copy(chassis.current.rotation() as Quaternion);
    chassisTranslation.copy(chassis.current.translation() as Vector3);
  }, AFTER_RAPIER_UPDATE);

  return (
    <>
      {/* raycast vehicle */}
      <Vehicle
        ref={raycastVehicle}
        position={[-7, 2, -130]}
        rotation={[0, -Math.PI / 2, 0]}
      />

      {cameraMode === "orbit" && <OrbitControls />}
    </>
  );
};
