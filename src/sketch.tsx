import { Canvas, useLoader } from "@react-three/fiber";
import { Physics, CuboidCollider, RigidBody } from "@react-three/rapier";
import { Environment, KeyboardControls } from "@react-three/drei";
import { Leva, useControls as useLeva } from "leva";
import { Suspense, useEffect, useLayoutEffect, useRef } from "react";
import { PlayerController } from "./PlayerController";
import { Lighting } from "./components/3D/misc/lighting";
import { TextureLoader } from "three";

import { Chevreuse } from "./components/3D/track/Chevreuse";

import { Composer } from "./components/3D/postprocessing/composer";
import { spawn } from "./constants";
import { useGameStore } from "./store/store";

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
  
  const gameStateRef = useRef(null);
  const setGameState = useGameStore(state => state.setGameState);
  

  useLayoutEffect(() => {
    setTimeout(() => {
      if (gameStateRef.current) {
        setGameState(gameStateRef.current);
        console.log("Game state ref updated:", gameStateRef.current);
      }
    }, 300);
  }, []);
  
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
            {/* <RigidBody
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
            </RigidBody> */}
            <Chevreuse/>
          </Physics>
          <Lighting />
          <Composer/>
          <Environment preset="night" environmentIntensity={1}/>
          {/* <Perf/> */}
        </Suspense>
        <group ref={gameStateRef}></group>

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
