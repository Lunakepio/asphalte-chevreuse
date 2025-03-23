import { useRef, useEffect } from "react";
import { InstancedMesh } from "three";
import * as THREE from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { Billboard } from "@react-three/drei";

export const Smoke = ({ count = 1000 }) => {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = new THREE.Object3D();
  const texture = useLoader(THREE.TextureLoader, "/smoke.png");

  useEffect(() => {
    if (!meshRef.current) return;

    for (let i = 0; i < count; i++) {
      dummy.position.set(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      );
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
  }, [count]);

  // Optional animation using useFrame (if needed)
  useFrame(() => {
    if (!meshRef.current) return;
  });

  return (
    <Billboard>    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
  
    <planeGeometry args={[0.6, 0.6]} />
    <meshStandardMaterial
      color="white"
      map={texture}
      side={THREE.DoubleSide}
      transparent
    />
</instancedMesh></Billboard>
  );
};
