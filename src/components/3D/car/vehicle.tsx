import { Cylinder, Helper, useKeyboardControls } from "@react-three/drei";
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
  MathUtils,
  PointLight,
} from "three";
import {
  RapierRaycastVehicle,
  WheelOptions,
} from "../../../lib/rapier-raycast-vehicle";
import { M3 } from "./M3-optimised";
import { ThreeElements, useFrame, useThree } from "@react-three/fiber";
import { WheelMesh } from "./wheel-mesh";
import { spawn } from "../../../constants";
import { data } from "../../../curves/curve";
import { Smoke } from "../particles/smoke";
import { Skid } from "../particles/skid";
import { useGameStore } from "../../../store/store";
import { addInstancesToCollision } from "../particles/collision";
import FakeFlame from "./fakeFlame";

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

    const vehicleRef = useRef<RapierRaycastVehicle>(null!);
    const chassisRigidBodyRef = useRef<RapierRigidBody>(null!);
    const cameraPositionRef = useRef<Mesh>(null);
    const cameraTargetRef = useRef<Mesh>(null);
    const chassisMeshRef = useRef<Mesh>(null);
    const exhaustRef = useRef<Mesh>(null);
    const setAfk = useGameStore((state) => state.setAfk);
    const pause = useGameStore((state) => state.pause);
    const setPlayerPosition = useGameStore((state) => state.setPlayerPosition);
    const collisionInstance = useGameStore((state) => state.collisionInstance);
    const setGroundNormal = useGameStore((state) => state.setGroundNormal);
    const flameRef = useRef<Group>(null!);
    const topLeftWheelObject = useRef<Group>(null!);
    const topRightWheelObject = useRef<Group>(null!);
    const bottomLeftWheelObject = useRef<Group>(null!);
    const bottomRightWheelObject = useRef<Group>(null!);
    const flameLightRef = useRef<PointLight>(null!);
    const { headlightsSpotLightHelper } = useLeva(
      "headlights",
      {
        headlightsSpotLightHelper: false,
      },
      {
        collapsed: true,
      }
    );
    const cameraPositionControls = useLeva(
      "Camera Position",
      {
        position: { value: [-5, 18, 0], step: 0.1 },
        fov: { value: 44, min: 1, max: 180, step: 1 },
      },
      {
        collapsed: true,
      }
    );

    const cameraLookAtControls = useLeva(
      "Camera Look At",
      {
        position: { value: [8, 1, 0], step: 0.1 },
      },
      {
        collapsed: true,
      }
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
    } = useLeva(
      "wheels",
      {
        radius: 0.38,

        indexRightAxis: 2,
        indexForwardAxis: 0,
        indexUpAxis: 1,

        directionLocal: [0, -1, 0],
        axleLocal: [0, 0, 1],

        // Suspension settings: stiffer springs, reduced travel for less body roll
        suspensionStiffness: 15, // increased stiffness for better grip and responsiveness
        suspensionRestLength: 0.4, // shorter rest length for a firmer feel
        maxSuspensionForce: 80000, // higher force to maintain control under load
        maxSuspensionTravel: 0.6, // reduced travel to limit excessive body movement

        // Tire friction settings: more lateral grip and less slip
        sideFrictionStiffness: 2.3, // increased lateral grip for fast cornering
        frictionSlip: 3, // lower slip for improved traction during aggressive driving

        // Damping adjustments: a bit higher to quickly settle the suspension
        dampingRelaxation: 3.5, // increased for faster recovery after bumps
        dampingCompression: 3.5, // matching compression damping for balanced behavior

        rollInfluence: 0.02, // lower roll influence to minimize body roll

        customSlidingRotationalSpeed: -15, // reduced sliding tendency for a grip car feel
        useCustomSlidingRotationalSpeed: true,

        // Acceleration settings: sharper throttle response for performance
        forwardAcceleration: 2, // increased engine force for rapid acceleration
        sideAcceleration: 1.4, // slightly lower to help keep the car stable in turns
        vehicleWidth: 1.33,
        vehicleHeight: 0.05,
        vehicleFront: -1.13,
        vehicleBack: 1.38,
      },
      {
        collapsed: false,
      }
    );

    const directionLocal = useMemo(
      () => new Vector3(...directionLocalArray),
      [directionLocalArray]
    );
    const axleLocal = useMemo(
      () => new Vector3(...axleLocalArray),
      [axleLocalArray]
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
            vehicleWidth * 0.5
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
            vehicleWidth * -0.5
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
            vehicleWidth * 0.5
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
            vehicleWidth * -0.5
          ),
        },
      },
    ];

    useImperativeHandle(ref, () => ({
      chassisRigidBody: chassisRigidBodyRef,
      rapierRaycastVehicle: vehicleRef,

      wheels,
    }));
    const { camera } = useThree();

    useEffect(() => {
      vehicleRef.current = new RapierRaycastVehicle({
        world: world,
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
      if (cameraPositionRef.current && cameraTargetRef.current) {
        // init the camera

        camera.position.copy(
          cameraPositionRef.current.getWorldPosition(new Vector3())
        );
      }
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
    const afkThreshold = 7;
    const [, get] = useKeyboardControls();
    const frameRate = 60;
    const animationDuration = 1;
    const cameraSpeedFactor = 1 / (frameRate * animationDuration);
    let currentPoint = data.length - 1;

    let turningTime = 0;
    const turningThreshold = 0.3;
    const animationProgress = useRef(0);
    const damping = 4
    let flameProgress = 0;
    const { world, rapier } = useRapier()
    useFrame((state, delta) => {
      if (
        !cameraPositionRef.current ||
        !cameraTargetRef.current ||
        !chassisMeshRef.current ||
        pause
      )
        return;
      const deltaAdjusted = delta * 60;
      afkTimer += delta;
      const gameStarted = useGameStore.getState().gameStarted;
      const clock = state.clock.getElapsedTime();

      const { forward, back, left, right, brake } = get();
      if (forward || back || left || right || brake) {
        afk = false;
        afkTimer = 0;
      }

      if (
        gameStarted &&
        afkTimer > afkThreshold &&
        Math.abs(vehicleRef.current.state.currentVehicleSpeedKmHour) < 1
      ) {
        afk = true;
        if (state.camera.position.y >= 6) {
          const positionTarget = chassisMeshRef.current
            .getWorldPosition(new Vector3())
            .add(data[currentPoint]);
          state.camera.position.copy(positionTarget);
        }
      }

      if (!afk) {
        const targetPosition =  cameraPositionRef.current.getWorldPosition(new Vector3());
        state.camera.position.x = MathUtils.damp(
          state.camera.position.x,
          targetPosition.x,
          damping,
          delta
        );
        state.camera.position.y = MathUtils.damp(
          state.camera.position.y,
          targetPosition.y,
          damping,
          delta
        );
        state.camera.position.z = MathUtils.damp(
          state.camera.position.z,
          targetPosition.z,
          damping,
          delta
        );
        state.camera.lookAt(
          cameraTargetRef.current.getWorldPosition(new Vector3())
        );
      }

      // cameraTargetRef.current.position.z = MathUtils.lerp(
      //   cameraTargetRef.current.position.z,
      //   left ? -2 : right ? 2 : 0,
      //   0.01 * deltaAdjusted
      // );

      // cameraPositionRef.current.position.z = MathUtils.lerp(
      //   cameraPositionRef.current.position.z,
      //   left ? 5 : right ? -5 : 0,
      //   0.01 * deltaAdjusted
      // );

      if (afk) {
        state.camera.lookAt(
          chassisMeshRef.current.getWorldPosition(new Vector3())
        );

        if (currentPoint > 0) {
          const positionTarget = chassisMeshRef.current
            .getWorldPosition(new Vector3())
            .add(data[currentPoint]);

          const distanceToPrev =
            state.camera.position.distanceTo(positionTarget);

          const discontinuityThreshold = 1.0; // Adjust as needed

          if (distanceToPrev > discontinuityThreshold) {
            state.camera.position.copy(positionTarget);
          } else {
            state.camera.position.lerp(
              positionTarget,
              cameraSpeedFactor * deltaAdjusted
            );
          }

          if (state.camera.position.distanceTo(positionTarget) < 0.5) {
            currentPoint -= 1;
          }
        } else {
          currentPoint = data.length - 1;
          state.camera.position.copy(
            chassisMeshRef.current
              .getWorldPosition(new Vector3())
              .add(data[currentPoint])
          );
        }
      }

      const bodyPosition = chassisRigidBodyRef.current.translation();
      const offset = 0; // Adjust this value as needed
      
      // Start the ray slightly below the car's floor
      const rayOrigin = {
          x: bodyPosition.x,
          y: bodyPosition.y - offset,
          z: bodyPosition.z
      };
      
      const ray = new rapier.Ray(rayOrigin, { x: 0, y: -1, z: 0 });
      
      const raycastResult = world.castRayAndGetNormal(ray, 1, true);
      if (raycastResult) {
          const normal = raycastResult.normal;
          setGroundNormal(normal);
      } else {
          console.log("No intersection with the ground found.");
      }
      
      // console.log(bodyPosition)
      // const yaw = chassisRigidBodyRef.current.rotation().y;

      // chassisRigidBodyRef.current.applyImpulse(
      //   new Vector3(-yaw * 0.02, 0, 0),
      //   true
      // );

      if (left || right) {
        turningTime += delta;
      } else {
        turningTime = 0;
      }
      const isClutchEngaged = useGameStore.getState().isClutchEngaged;
      if(isClutchEngaged){
        flameProgress += delta;
      } else {
        flameProgress = 0;
      }
      const flameScale = isClutchEngaged && flameProgress < 0.15 ? 1 : 0;
    
      // flameRef.current.scale.set(flameScale, flameScale, flameScale);
      flameRef.current.scale.lerp(new Vector3(flameScale, flameScale, flameScale), 1 * deltaAdjusted);
      const flameLightIntensity = isClutchEngaged && flameProgress < 0.15 ? 6 : 0;
      flameLightRef.current.intensity = MathUtils.lerp(flameLightRef.current.intensity, flameLightIntensity, 1 * deltaAdjusted);
 
        // (Math.abs(vehicleRef.current.state.currentVehicleSpeedKmHour) > 90 &&
        //   turningTime > turningThreshold) ||
        // brake;

      bottomLeftWheelObject.current.isSpinning = vehicleRef.current.state.sliding || brake;
      // if (bodyPosition.y < -10) {
      //   chassisRigidBodyRef.current.setTranslation(
      //     new Vector3(...spawn.position),
      //     true
      //   );
      //   const spawnRot = new Euler(...spawn.rotation);
      //   const spawnQuat = new Quaternion().setFromEuler(spawnRot);
      //   chassisRigidBodyRef.current.setRotation(spawnQuat, true);
      //   chassisRigidBodyRef.current.setLinvel(new Vector3(0, 0, 0), true);
      //   chassisRigidBodyRef.current.setAngvel(new Vector3(0, 0, 0), true);
      // }

      setAfk(afk);
      setPlayerPosition(chassisRigidBodyRef.current.translation());
    });

    return (
      <>
        <RigidBody
          {...groupProps}
          colliders={false}
          ref={chassisRigidBodyRef}
          mass={150}
          name="car"
          onCollisionEnter={({ manifold }) => {
            const position = new Vector3(
              manifold.solverContactPoint(0).x,
              manifold.solverContactPoint(0).y,
              manifold.solverContactPoint(0).z
            );

              addInstancesToCollision(collisionInstance, position);
            
          }}
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
          <group ref={flameRef} scale={0}>
            <Cylinder
              args={[0.1, 0, 1, 256, 32, true]}
              position={[-2.4, -0.15, -0.55]}
              rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
              scale={0.9}
            >
              <FakeFlame />
            </Cylinder>
            <Cylinder
              args={[0.1, 0, 1, 256, 32, true]}
              position={[-2.4, -0.15, -0.45]}
              rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
              scale={0.9}
            >
              <FakeFlame />
            </Cylinder>
          </group>
          <mesh ref={chassisMeshRef}></mesh>
          <group ref={exhaustRef} position={[-2.2, -0.15, -0.45]}>
          <pointLight position={[.2, 0,0]} intensity={0} color={"#ffa500"} ref={flameLightRef} />
          </group>

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
        <Smoke exhaustRef={exhaustRef} vehicleRef={vehicleRef} />

        <Skid
          bottomLeftWheelObject={bottomLeftWheelObject}
          bottomRightWheelObject={bottomRightWheelObject}
          chasisMeshObject={chassisMeshRef}
        />
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
  }
);
