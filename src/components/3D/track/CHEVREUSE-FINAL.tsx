/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 --shadows --types CHEVREUSE-FINAL.glb 
*/
import * as THREE from "three";
import React, { useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { RigidBody } from "@react-three/rapier";
import { useLoader } from "@react-three/fiber";
import { TextureLoader, MeshStandardMaterial } from "three";

type GLTFResult = GLTF & {
  nodes: {
    Plane_1: THREE.Mesh;
    Plane_2: THREE.Mesh;
    Plane_3: THREE.Mesh;
    Plane001: THREE.Mesh;
  };
  materials: {
    ["Material.001"]: THREE.MeshStandardMaterial;
    ["Material.002"]: THREE.MeshStandardMaterial;
    ["Material.003"]: THREE.MeshStandardMaterial;
  };
  animations: GLTFAction[];
};

export function ChevreuseFinal(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/CHEVREUSE-FINAL-2.glb") as GLTFResult;
   const matcap = useLoader(TextureLoader, "/matcap.png");
     const StandardMaterial = useMemo(() => new MeshStandardMaterial({ map: matcap, roughness: 0.5, metalness: 0.5 }), [matcap]);
    //  materials["Material.001"] = new THREE.MeshToonMaterial({ color: 0x2f2f2f, side: THREE.DoubleSide });
   
  return (
    <group
      {...props}
      dispose={null}
      scale={140}
      position={[0, 112, 0]}
      rotation={[0, (-Math.PI / 2) * 0.88, 0]}
    >
      <mesh
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={StandardMaterial}
        position={[8.591, -0.459, -5.771]}
        scale={8.953}
      />
      <RigidBody type="fixed" colliders="trimesh" position={[0, 0.005, 0]}>
        <mesh
          receiveShadow
          geometry={nodes.Plane_1.geometry}
          material={materials["Material.001"]}
        />
        <mesh layers={1} geometry={nodes.Plane_1.geometry}>
          <meshBasicMaterial color={"#ffffff"} depthTest={false} depthWrite={false} fog={false} />
        </mesh>
        <mesh
          receiveShadow
          geometry={nodes.Plane_2.geometry}
          material={materials["Material.002"]}
          position={[0, 0.001, 0]}
        />
        <mesh layers={1} geometry={nodes.Plane_2.geometry}>
          <meshBasicMaterial color={"#ffffff"} depthTest={false} depthWrite={false} fog={false} />
        </mesh>
        <mesh
          receiveShadow
          geometry={nodes.Plane_3.geometry}
          material={materials["Material.003"]}
        />
        <mesh layers={1} geometry={nodes.Plane_3.geometry}>
          <meshBasicMaterial color={"#ffffff"} depthTest={false} depthWrite={false} fog={false} />
        </mesh>
      </RigidBody>
    </group>
  );
}

useGLTF.preload("/CHEVREUSE-FINAL-2.glb");
