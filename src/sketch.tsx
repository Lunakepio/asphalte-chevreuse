import { Canvas, useLoader } from "@react-three/fiber";
import { Physics, CuboidCollider, RigidBody } from "@react-three/rapier";
import { Environment, KeyboardControls } from "@react-three/drei";
import { Leva, useControls as useLeva } from "leva";
import { Suspense } from "react";
import { PlayerController } from "./PlayerController";
import { Lighting } from "./Lighting";
import { TextureLoader } from "three";

import { Chevreuse } from "./components/Chevreuse";

import { Composer } from "./components/postprocessing/composer";
import { spawn } from "./constants";

export const Sketch = () => {
  const { debug } = useLeva("physics", {
    debug: false,
  }, {
    collapsed: true,
  });

  const controls = [
    { name: "forward", keys: ["ArrowUp", "KeyW"] },
    { name: "back", keys: ["ArrowDown", "KeyS"] },
    { name: "left", keys: ["ArrowLeft", "KeyA"] },
    { name: "right", keys: ["ArrowRight", "KeyD"] },
    { name: "brake", keys: ["Space"] },
    { name: "handbrake", keys: ["Shift"] },
    { name: "reset", keys: ["KeyR"] },
  ];

  const texture = useLoader(TextureLoader, "/grid.jpg");
  
  return (
    <>
      <Canvas shadows camera={{fov:90}} gl={{ antialias: true, powerPreference: "high-performance" }}>
        <color attach="background" args={["#005249"]} />
        <fog attach="fog" args={["#002523", 50, 150]} />
        <Suspense fallback={null}>
          <Physics gravity={[0, -9.81, 0]} timeStep="vary" debug={debug}>
            <KeyboardControls map={controls}>
              <PlayerController />
            </KeyboardControls>
            {/* ground */}
            <RigidBody
              type="fixed"
              position={[spawn.position[0], spawn.position[1] - 10, spawn.position[2]]}
              colliders={false}
              friction={1}
            >
              <CuboidCollider args={[120, 5, 120]} />
              <mesh receiveShadow>
                <boxGeometry args={[240, 10, 240]} />
                <meshStandardMaterial color="#AA3030" map={texture}/>
              </mesh>
            </RigidBody>
            {/* <Chevreuse/> */}
          </Physics>
          <Lighting />
          <Composer/>
          <Environment preset="night" environmentIntensity={0.5}/>
          {/* <Perf/> */}
        </Suspense>
        <Leva  fill // default = false,  true makes the pane fill the parent dom node it's rendered in
        flat // default = false,  true removes border radius and shadow
        oneLineLabels // default = false, alternative layout for labels, with labels and fields on separate rows
        hideTitleBar // default = false, hides the GUI header
        collapsed // default = false, when true the GUI is collpased
        hidden // def
        />
      </Canvas>
    </>
  );
}
