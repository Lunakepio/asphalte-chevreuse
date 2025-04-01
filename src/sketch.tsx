import { Canvas, useLoader } from "@react-three/fiber";
import { Physics, CuboidCollider, RigidBody } from "@react-three/rapier";
import {
  Environment,
  KeyboardControls,
  OrbitControls,
  Preload,
} from "@react-three/drei";
import { Leva, useControls as useLeva } from "leva";
import { Suspense, useRef, useEffect } from "react";
import { PlayerController } from "./PlayerController";
import { Lighting } from "./components/3D/misc/lighting";
import {
  ACESFilmicToneMapping,
  ReinhardToneMapping,
  TextureLoader,
} from "three";
import { useGameStore } from "./store/store";
import { Perf } from "r3f-perf";
import { spawn } from "./constants";

import { Chevreuse } from "./components/3D/track/Chevreuse";

import { Composer } from "./components/3D/postprocessing/composer";
import { Particles } from "./components/3D/particles/particles";
import { Collision } from "./components/3D/particles/collision";

export const Sketch = () => {
  const { debug } = useLeva(
    "physics",
    {
      debug: false,
    },
    {
      collapsed: true,
    }
  );

  const controls = [
    { name: "forward", keys: ["ArrowUp", "KeyW"] },
    { name: "back", keys: ["ArrowDown", "KeyS"] },
    { name: "left", keys: ["ArrowLeft", "KeyA"] },
    { name: "right", keys: ["ArrowRight", "KeyD"] },
    { name: "brake", keys: ["Space"] },
    { name: "handbrake", keys: ["Shift"] },
    { name: "reset", keys: ["KeyR"] },
    { name: "pause", keys: ["Escape"] },
  ];

  const texture = useLoader(TextureLoader, "/grid.jpg");
  const pause = useGameStore((state) => state.pause);
  const showTime = useGameStore((state) => state.showTime);

  return (
    <>
      <Canvas
        shadows
        camera={{ fov: 90, far: 1000 }}
        gl={{
          antialias: true,
          powerPreference: "high-performance",
          toneMapping: ReinhardToneMapping,
        }}
        flat
      >
        <color attach="background" args={["#005249"]} />
        <fog attach="fog" args={["#002523", 50, 150]} />
        <Suspense fallback={null}>
          <Physics gravity={[0, -9.81, 0]} timeStep={"vary"} >
            <KeyboardControls map={controls}>
              <PlayerController />
            </KeyboardControls>
            {/* <OrbitControls/> */}
            <group position={[-520, 5, 1250]}>
              <Particles />
            </group>
            <RigidBody
              type="fixed"
              colliders={false}
              rotation-y={Math.PI / 2}
              position={[
                -1926.551513671875, -0.6180168390274048, 1649.0458984375,
              ]}
            >
              <CuboidCollider
                args={[10, 10, 1]}
                sensor
                onIntersectionEnter={() => showTime()}
              />
              <mesh receiveShadow>
                <boxGeometry args={[10, 10, 1]} />
                <meshStandardMaterial color="#AA3030" wireframe />
              </mesh>
            </RigidBody>
            {/* ground */}
            {/* <RigidBody
              type="fixed"
              position={[spawn.position[0], spawn.position[1]-8, spawn.position[2]]}
              colliders={false}
              friction={1}
            >
              <CuboidCollider args={[250, 5, 250]} />
              <mesh receiveShadow>
                <boxGeometry args={[500, 10, 500]} />
                <meshStandardMaterial color="#AA3030" map={texture}/>
              </mesh>
            </RigidBody>  */}
            <Chevreuse />
            <Collision/>
          </Physics>
          <Lighting />
          <Composer />
          <Environment preset="night" environmentIntensity={0.5} />
          {/* <Perf/> */}
        </Suspense>
        <Preload all />
        <Leva
          fill // default = false,  true makes the pane fill the parent dom node it's rendered in
          flat // default = false,  true removes border radius and shadow
          oneLineLabels // default = false, alternative layout for labels, with labels and fields on separate rows
          hideTitleBar // default = false, hides the GUI header
          collapsed // default = false, when true the GUI is collpased
          hidden // def
        />
      </Canvas>
    </>
  );
};
