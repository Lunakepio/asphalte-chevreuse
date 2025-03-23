import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Environment, KeyboardControls } from "@react-three/drei";
import { useControls as useLeva } from "leva";
import { Suspense } from "react";
import { PlayerController } from "./PlayerController";
import { Lighting } from "./Lighting";

import { Chevreuse } from "./components/Chevreuse";

// import { Composer } from "./components/postprocessing/composer";

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
    { name: "reset", keys: ["KeyR"] },
  ];
  
  return (
    <>
      <Canvas shadows camera={{fov:44}} gl={{ antialias: true, powerPreference: "high-performance" }}>
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
              position-z={75}
              position-y={-5}
              colliders={false}
              friction={1}
            >
              <CuboidCollider args={[120, 5, 120]} />
              <mesh receiveShadow>
                <boxGeometry args={[240, 10, 240]} />
                <meshStandardMaterial color="#AA3030" />
              </mesh>
            </RigidBody> */}
            <Chevreuse/>
          </Physics>
          <Lighting />
          {/* <Composer/> */}
          <Environment preset="night" environmentIntensity={0.5} background/>
          {/* <Perf/> */}
        </Suspense>
      </Canvas>
    </>
  );
}
