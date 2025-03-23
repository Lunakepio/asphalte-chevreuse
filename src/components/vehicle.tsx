import { Helper, useKeyboardControls } from "@react-three/drei";
import {
  CuboidCollider,
  RapierRigidBody,
  RigidBody,
  RigidBodyProps,
  useRapier,
} from "@react-three/rapier";
import { useControls as useLeva } from "leva";
import {
  Fragment,
  RefObject,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  Color,
  Group,
  Mesh,
  Object3D,
  SpotLightHelper,
  Vector3,
  Vector3Tuple,
  Euler,
  Quaternion,
} from "three";
import {
  RapierRaycastVehicle,
  WheelOptions,
} from "../lib/rapier-raycast-vehicle";
import { M3 } from "./M3";
import { ThreeElements, useFrame } from "@react-three/fiber";
import { WheelMesh } from "./wheel-mesh";
import { spawn } from "../constants";
import { data } from "../curve";

type WheelProps = ThreeElements["group"] & {
  side: "left" | "right";
  radius: number;
};

const Wheel = ({ side, radius, ...props }: WheelProps) => {
  const groupRef = useRef<Group>(null!);

  const scale = radius / 0.28;

  return (
    <group {...props} ref={groupRef}>
      <group scale={scale}>
        <group scale={side === "left" ? 1 : -1}>
          <WheelMesh />
        </group>
      </group>
    </group>
  );
};

const BRAKE_LIGHTS_ON_COLOR = new Color(1, 0.2, 0.2).multiplyScalar(1.5);
const BRAKE_LIGHTS_OFF_COLOR = new Color(0x333333);

type RaycastVehicleWheel = {
  options: WheelOptions;
  object: RefObject<Object3D>;
};

export type VehicleProps = RigidBodyProps;

export type VehicleRef = {
  chassisRigidBody: RefObject<RapierRigidBody>;
  rapierRaycastVehicle: RefObject<RapierRaycastVehicle>;
  wheels: RaycastVehicleWheel[];
};

export const Vehicle = forwardRef<VehicleRef, VehicleProps>(
  ({ children, ...groupProps }, ref) => {
    const rapier = useRapier();

    const vehicleRef = useRef<RapierRaycastVehicle>(null!);
    const chassisRigidBodyRef = useRef<RapierRigidBody>(null!);
    const cameraPositionRef = useRef<Mesh>(null);
    const cameraTargetRef = useRef<Mesh>(null);
    const chassisMeshRef = useRef<Mesh>(null);


    const topLeftWheelObject = useRef<Group>(null!);
    const topRightWheelObject = useRef<Group>(null!);
    const bottomLeftWheelObject = useRef<Group>(null!);
    const bottomRightWheelObject = useRef<Group>(null!);

    const { headlightsSpotLightHelper } = useLeva("headlights", {
      headlightsSpotLightHelper: false,
    }, {
      collapsed: true,
    });
    const cameraPositionControls = useLeva(
      "Camera Position",
      {
        position: { value: [-17, 14, 0], step: 0.1 },
        fov: { value: 44, min: 1, max: 180, step: 1 },
      },
      {
        collapsed: true,
      },
    );

    const cameraLookAtControls = useLeva(
      "Camera Look At",
      {
        position: { value: [8, 1, 0], step: 0.1 },
      },
      {
        collapsed: true,
      },
    );

    const {
      indexRightAxis,
      indexForwardAxis,
      indexUpAxis,
      directionLocal: directionLocalArray,
      axleLocal: axleLocalArray,
      vehicleWidth,
      vehicleHeight,
      vehicleFront,
      vehicleBack,
      ...levaWheelOptions
    } = useLeva("wheels", {
      radius: 0.38,

      indexRightAxis: 2,
      indexForwardAxis: 0,
      indexUpAxis: 1,

      directionLocal: [0, -1, 0],
      axleLocal: [0, 0, 1],

      suspensionStiffness: 20, // Softer suspension helps weight shift for turning
      suspensionRestLength: 0.4, // More travel helps maintain tire contact
      maxSuspensionForce: 100000, // Lower force to allow more movement
      maxSuspensionTravel: 0.3, // Extra travel for smoother weight transfer

      sideFrictionStiffness: 1.2, // Reduced grip to allow some drift at high speed
      frictionSlip: 1.2, // Less slip means better lateral control, but not too much
      dampingRelaxation: 2.5, // Balances response and smoothness
      dampingCompression: 5.0, // Softer compression allows more movement when turning

      rollInfluence: 0.005, // Reduce roll resistance to allow natural weight shift

      customSlidingRotationalSpeed: -40, // Allow more sliding to help with turning
      useCustomSlidingRotationalSpeed: false,

      forwardAcceleration: 1,
      sideAcceleration: 3.0, // Increase lateral acceleration to improve turning response

      vehicleWidth: 1.33,
      vehicleHeight: 0.05,
      vehicleFront: -1.13,
      vehicleBack: 1.38,
    }, {
      collapsed: true,
    });

    const directionLocal = useMemo(
      () => new Vector3(...directionLocalArray),
      [directionLocalArray],
    );
    const axleLocal = useMemo(
      () => new Vector3(...axleLocalArray),
      [axleLocalArray],
    );

    const commonWheelOptions = {
      ...levaWheelOptions,
      directionLocal,
      axleLocal,
    };

    const wheels: RaycastVehicleWheel[] = [
      {
        object: topLeftWheelObject,
        options: {
          ...commonWheelOptions,
          chassisConnectionPointLocal: new Vector3(
            vehicleBack,
            vehicleHeight,
            vehicleWidth * 0.5,
          ),
        },
      },
      {
        object: topRightWheelObject,
        options: {
          ...commonWheelOptions,
          chassisConnectionPointLocal: new Vector3(
            vehicleBack,
            vehicleHeight,
            vehicleWidth * -0.5,
          ),
        },
      },
      {
        object: bottomLeftWheelObject,
        options: {
          ...commonWheelOptions,
          chassisConnectionPointLocal: new Vector3(
            vehicleFront,
            vehicleHeight,
            vehicleWidth * 0.5,
          ),
        },
      },
      {
        object: bottomRightWheelObject,
        options: {
          ...commonWheelOptions,
          chassisConnectionPointLocal: new Vector3(
            vehicleFront,
            vehicleHeight,
            vehicleWidth * -0.5,
          ),
        },
      },
    ];

    useImperativeHandle(ref, () => ({
      chassisRigidBody: chassisRigidBodyRef,
      rapierRaycastVehicle: vehicleRef,

      wheels,
    }));

    useEffect(() => {
      vehicleRef.current = new RapierRaycastVehicle({
        world: rapier.world,
        chassisRigidBody: chassisRigidBodyRef.current,
        indexRightAxis,
        indexForwardAxis,
        indexUpAxis,
      });

      for (let i = 0; i < wheels.length; i++) {
        const options = wheels[i].options;
        vehicleRef.current.addWheel(options);
      }

      vehicleRef.current = vehicleRef.current;
    }, [
      chassisRigidBodyRef,
      vehicleRef,
      indexRightAxis,
      indexForwardAxis,
      indexUpAxis,
      directionLocal,
      axleLocal,
      levaWheelOptions,
    ]);

    const [leftHeadlightTarget] = useState(() => {
      const object = new Object3D();
      object.position.set(10, -10, -0.7);
      return object;
    });

    const [rightHeadlightTarget] = useState(() => {
      const object = new Object3D();
      object.position.set(10, -10, 0.7);
      return object;
    });

    let afk = false;
    let afkTimer = 0;
    const afkThreshold = 4;
    const [, get] = useKeyboardControls();
    const cameraSpeedFactor = 0.02;
    let currentPoint = data.length - 1;
    useFrame((state, delta) => {
      if (!cameraPositionRef.current || !cameraTargetRef.current || !chassisMeshRef.current) return;
      const deltaAdjusted = delta * 60;
      afkTimer += delta;
      const { forward, back, left, right, brake } = get();
      if (forward || back || left || right || brake) {
        afk = false;
        afkTimer = 0;
      }

      if (afkTimer > afkThreshold) {
        afk = true;
        if(state.camera.position.y >= 6){
          const positionTarget = chassisMeshRef.current
            .getWorldPosition(new Vector3())
            .add(data[currentPoint]);
          state.camera.position.copy(positionTarget);
        }
      }

      if (!afk) {
        state.camera.position.lerp(
          cameraPositionRef.current.getWorldPosition(new Vector3()),
          0.12 * deltaAdjusted,
        );
        state.camera.lookAt(
          cameraTargetRef.current.getWorldPosition(new Vector3()),
        );
      }

      if (afk) {
        state.camera.lookAt(
          chassisMeshRef.current.getWorldPosition(new Vector3()),
        );
        
        if (currentPoint > 0) {
          const previousPoint = chassisMeshRef.current
            .getWorldPosition(new Vector3())
            .add(data[currentPoint + 1] || data[currentPoint]);
          const positionTarget = chassisMeshRef.current
            .getWorldPosition(new Vector3())
            .add(data[currentPoint]);

          const distanceToPrev = previousPoint.distanceTo(positionTarget);


          const discontinuityThreshold = 1.0; // Adjust as needed

          if (distanceToPrev > discontinuityThreshold) {
            state.camera.position.copy(positionTarget);
          } else {
            state.camera.position.lerp(
              positionTarget,
              cameraSpeedFactor * deltaAdjusted,
            );
          }

          if (state.camera.position.distanceTo(positionTarget) < 0.5) {
            currentPoint -= 1;
          }

          // console.log(positionTarget);
        } else {
          currentPoint = data.length - 1;
          state.camera.position.copy(
            chassisMeshRef.current
              .getWorldPosition(new Vector3())
              .add(data[currentPoint]),
          );
        }
      }

      const bodyPosition = chassisRigidBodyRef.current.translation();

      if (bodyPosition.y < -10) {
        chassisRigidBodyRef.current.setTranslation(
          new Vector3(...spawn.position),
          true,
        );
        const spawnRot = new Euler(...spawn.rotation);
        const spawnQuat = new Quaternion().setFromEuler(spawnRot);
        chassisRigidBodyRef.current.setRotation(spawnQuat, true);
        chassisRigidBodyRef.current.setLinvel(new Vector3(0, 0, 0), true);
        chassisRigidBodyRef.current.setAngvel(new Vector3(0, 0, 0), true);
      }
    });

    return (
      <>
        <RigidBody
          {...groupProps}
          colliders={false}
          ref={chassisRigidBodyRef}
          mass={150}
        >
          <group ref={cameraPositionRef} {...cameraPositionControls}>
            {/* <boxGeometry args={[1, 1, 1]} /> */}
          </group>

          <group ref={cameraTargetRef} {...cameraLookAtControls}>
            {/* <boxGeometry args={[1, 1, 1]} /> */}
          </group>
          {/* Collider */}
          {/* todo: change to convex hull */}
          <CuboidCollider args={[2, 0.4, 0.7]} />
          <M3 />
          <mesh ref={chassisMeshRef}></mesh>

          {/* Headlights */}
          {[
            {
              position: [4, 1.2, -0.7] as Vector3Tuple,
              target: leftHeadlightTarget,
            },
            {
              position: [4, 1.2, 0.7] as Vector3Tuple,
              target: rightHeadlightTarget,
            },
          ].map(({ position, target }, idx) => (
            <Fragment key={idx}>
              <primitive object={target} />
              <spotLight
                position={position}
                target={target}
                angle={1.3}
                decay={0.1}
                castShadow={idx === 0}
                penumbra={0.8}
                intensity={100}
                color={0xffc562}
                shadow-mapSize-height={4096}
                shadow-mapSize-width={4096}
                shadow-bias={-0.001}
              >
                {headlightsSpotLightHelper && <Helper type={SpotLightHelper} />}
              </spotLight>
            </Fragment>
          ))}

          {/* Chassis */}
        </RigidBody>

        {/* Wheels */}
        <group ref={topLeftWheelObject}>
          <Wheel
            rotation={[0, Math.PI / 2, 0]}
            side="left"
            radius={commonWheelOptions.radius}
          />
        </group>
        <group ref={topRightWheelObject}>
          <Wheel
            rotation={[0, Math.PI / 2, 0]}
            side="right"
            radius={commonWheelOptions.radius}
          />
        </group>
        <group ref={bottomLeftWheelObject}>
          <Wheel
            rotation={[0, Math.PI / 2, 0]}
            side="left"
            radius={commonWheelOptions.radius}
          />
        </group>
        <group ref={bottomRightWheelObject}>
          <Wheel
            rotation={[0, Math.PI / 2, 0]}
            side="right"
            radius={commonWheelOptions.radius}
          />
        </group>
      </>
    );
  },
);
