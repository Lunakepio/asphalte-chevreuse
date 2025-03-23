import { OrbitControls, useKeyboardControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import {
  useBeforePhysicsStep,
} from "@react-three/rapier";
import { useControls as useLeva } from "leva";
import { useRef } from "react";
import { MathUtils, Quaternion, Vector3 } from "three";
import { Vehicle, VehicleRef } from "./components/vehicle";
import { AFTER_RAPIER_UPDATE } from "./constants";

const chassisTranslation = new Vector3();
const chassisRotation = new Quaternion();

export const PlayerController = () => {
  const raycastVehicle = useRef<VehicleRef>(null);

  const [, get] = useKeyboardControls();

  const { cameraMode } = useLeva("camera", {
    cameraMode: {
      value: "drive",
      options: ["drive", "orbit"],
    },
  }, {
    collapsed: true,
  });

  const { maxForce, maxSteer, maxBrake } = useLeva("controls", {
    maxForce: 12.5,
    maxSteer: { value: Math.PI / 6, min: 0, max: Math.PI / 6 },
    maxBrake: 0.6,
  }, {
    collapsed: true,
  });

  const currentSteering = useRef(0);
  const lastTimeRef = useRef<number | null>(null);
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

    const { forward, back, left, right, brake } = get();

    const {
      wheels,
      rapierRaycastVehicle: { current: vehicle },
    } = raycastVehicle.current;

    // update wheels from controls
    let engineForce = 0;

    if (forward) {
      engineForce += maxForce;
    }
    if (back) {
      engineForce -= maxForce;
    }

    currentSteering.current = MathUtils.lerp(currentSteering.current, left ? maxSteer : right ? -maxSteer : 0, 0.005 * deltaAdjusted);

    // console.log(vehicle, currentSteering.current);

    const brakeForce = brake ? maxBrake : !forward ? 0.015 : 0;

    vehicle.setBrakeValue(brakeForce * 0.6, 0);
    vehicle.setBrakeValue(brakeForce * 0.6, 1);
    vehicle.setBrakeValue(brakeForce * 0.4, 2);
    vehicle.setBrakeValue(brakeForce * 0.4, 3);


    // console.log(vehicle.state.currentVehicleSpeedKmHour);

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

    // update brake lights


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
