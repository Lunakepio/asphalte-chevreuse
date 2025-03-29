import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useControls } from "leva";
import { useGameStore } from "../../../store/store";

export function Chevreuse(props) {
  const { nodes, materials } = useGLTF("/models/tracks/chevreuse.glb");
  const setShowSuccess = useGameStore((state) => state.setShowSuccess);

  const groundControls = useControls(
    "ground",
    {
      color: "#0c1621",
      roughness: 1,
      metalness: 0,
    },
    {
      collapsed: true,
    },
  );

  materials["Material.009"].roughness = 1;
  materials["Material.010"].roughness = 1;
  // materials['Material.009'].metalness=1;
  // materials['Material.010'].metalness=1;
  return (
    <group {...props} scale={16} position={[-3.2, 5, -145]}>
      <group
        position={[3.939, -0.502, 0.629]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.183}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 3.246, 0]} scale={[0.237, 3.249, 0.237]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_5.geometry}
              material={materials.Tree}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_0.geometry}
              material={materials.Tree}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_0_1.geometry}
              material={materials.Leaves}
            />
          </group>
        </group>
      </group>
      <RigidBody
        colliders="hull"
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
        mass={0.0001}
        friction={0.01}
        type="dynamic"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["pylon(Clone)"].geometry}
          material={materials.pylon}
          position={[-0.447, -0.45, 5.549]}
          scale={0.2}
        />
      </RigidBody>

      <RigidBody
        colliders="hull"
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
        mass={0.0001}
        friction={0.01}
        type="dynamic"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["pylon(Clone)001"].geometry}
          material={materials.pylon}
          position={[-0.447, -0.45, 6.572]}
          scale={0.2}
        />
      </RigidBody>

      <RigidBody
        colliders="hull"
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
        mass={0.0001}
        friction={0.01}
        type="dynamic"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["pylon(Clone)003"].geometry}
          material={materials.pylon}
          position={[-0.447, -0.45, 7.594]}
          scale={0.2}
        />
      </RigidBody>

      <RigidBody
        onCollisionEnter={(e) => {
          if (e.other.rigidBodyObject.name === "car") {
            setShowSuccess(true);
          }
        }}
        colliders="hull"
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
        mass={0.0001}
        friction={0.01}
        type="dynamic"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["pylon(Clone)002"].geometry}
          material={materials.pylon}
          position={[0.077, -0.45, 5.549]}
          scale={0.2}
        />
      </RigidBody>

      <RigidBody
        colliders="hull"
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
        mass={0.0001}
        friction={0.01}
        type="dynamic"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["pylon(Clone)004"].geometry}
          material={materials.pylon}
          position={[0.077, -0.45, 6.572]}
          scale={0.2}
        />
      </RigidBody>

      <RigidBody
        colliders="hull"
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
        mass={0.0001}
        friction={0.01}
        type="dynamic"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["pylon(Clone)005"].geometry}
          material={materials.pylon}
          position={[0.077, -0.45, 7.594]}
          scale={0.2}
        />
      </RigidBody>

      <group
        position={[0.645, -0.499, 3.772]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={1.687}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_overheadLights.geometry}
          material={materials.grey}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_overheadLights_1.geometry}
          material={materials.road}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_overheadLights_2.geometry}
          material={materials.red}
        />
      </group>
      <group position={[-1.607, -0.514, 13.144]} rotation={[0, 1.571, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_tentRoofDouble.geometry}
          material={materials.grass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_tentRoofDouble_1.geometry}
          material={materials["grey.001"]}
        />
      </group>
      <group position={[-1.607, -0.514, 12.02]} rotation={[0, 1.571, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_tentRoofDouble001.geometry}
          material={materials.grass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_tentRoofDouble001_1.geometry}
          material={materials["grey.001"]}
        />
      </group>
      <group
        position={[0.598, -0.505, 6.591]}
        rotation={[Math.PI, -0.284, Math.PI]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_camera_exclusive.geometry}
          material={materials["road.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_camera_exclusive_1.geometry}
          material={materials["grey.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_camera_exclusive_2.geometry}
          material={materials._defaultMat}
        />
      </group>
      <group
        position={[1.566, -0.505, 9.608]}
        rotation={[Math.PI, -0.204, Math.PI]}
        scale={0.686}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_billboard.geometry}
          material={materials["bark.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_billboard_1.geometry}
          material={materials.bark}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_billboard_2.geometry}
          material={materials.tankco}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_billboard_3.geometry}
          material={materials["tankco.001"]}
        />
      </group>
      <group
        position={[1.264, -0.478, 12.209]}
        rotation={[Math.PI, -0.369, Math.PI]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_noExport.geometry}
          material={materials["grey.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_noExport_1.geometry}
          material={materials["road.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_noExport_2.geometry}
          material={materials["bark.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_noExport_3.geometry}
          material={materials["tankco.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_noExport_4.geometry}
          material={materials["_defaultMat.001"]}
        />
      </group>
      <RigidBody colliders={"trimesh"} type="fixed">
        <group
          position={[-45.409, -0.458, 88.586]}
          scale={[0.325, 0.007, 0.325]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube003_1.geometry}
            material={materials["Material.009"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube003_2.geometry}
            material={materials["Material.010"]}
          />
        </group>
      </RigidBody>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        position={[-33.313, -0.5, 88.551]}
        scale={89.155}
      >
        <meshToonMaterial {...groundControls} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={nodes.Cube003.material}
        position={[-43.707, -0.432, 89.09]}
        scale={0.341}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={nodes.Cube004.material}
        position={[-43.707, -0.432, 88.086]}
        scale={0.341}
      />
      <group
        position={[-55.684, -0.121, 21.737]}
        rotation={[0, -1.571, 0]}
        scale={[0.038, 0.518, 0.038]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[22.105, -0.121, 144.736]}
        rotation={[0, -1.571, 0]}
        scale={[0.017, 0.227, 0.017]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-89.606, 0.352, 122.113]}
        rotation={[0, -1.571, 0]}
        scale={[0.046, 0.625, 0.046]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[50.188, -0.121, 105.32]}
        rotation={[0, -1.571, 0]}
        scale={[0.024, 0.324, 0.024]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-94.911, -0.121, 61.153]}
        rotation={[0, -1.571, 0]}
        scale={[0.043, 0.586, 0.043]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-61.745, -1.989, 55.247]}
        rotation={[0, -1.571, 0]}
        scale={[0.047, 0.647, 0.047]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-111.406, -0.121, 138.754]}
        rotation={[0, -1.571, 0]}
        scale={[0.026, 0.351, 0.026]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-117.2, -0.121, 167.025]}
        rotation={[0, -1.571, 0]}
        scale={[0.026, 0.362, 0.026]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-95.178, 1.033, 110.969]}
        rotation={[0, -1.571, 0]}
        scale={[0.027, 0.375, 0.027]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[5.61, -0.121, 127.609]}
        rotation={[0, -1.571, 0]}
        scale={[0.04, 0.555, 0.04]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-72.622, 1.499, 116.875]}
        rotation={[0, -1.571, 0]}
        scale={[0.047, 0.647, 0.047]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-78.461, -0.121, 5.097]}
        rotation={[0, -1.571, 0]}
        scale={[0.018, 0.242, 0.018]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-38.967, -0.426, 88.604]}
        rotation={[0, -1.571, 0]}
        scale={[0.034, 0.468, 0.034]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-83.766, -1.935, 97.372]}
        rotation={[0, -1.571, 0]}
        scale={[0.038, 0.52, 0.038]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-84.034, -0.121, 2.311]}
        rotation={[0, -1.571, 0]}
        scale={[0.039, 0.537, 0.039]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-41.753, -4.442, 44.026]}
        rotation={[0, -1.571, 0]}
        scale={[0.014, 0.193, 0.014]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[47.18, -0.121, 75.083]}
        rotation={[0, -1.571, 0]}
        scale={[0.037, 0.507, 0.037]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-17.167, -4.696, 2.311]}
        rotation={[0, -1.571, 0]}
        scale={[0.044, 0.599, 0.044]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-108.62, -2.848, 94.176]}
        rotation={[0, -1.571, 0]}
        scale={[0.021, 0.293, 0.021]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[47.18, -0.121, 164.238]}
        rotation={[0, -1.571, 0]}
        scale={[0.028, 0.39, 0.028]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[24.624, -0.121, 113.755]}
        rotation={[0, -1.571, 0]}
        scale={[0.033, 0.449, 0.033]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[47.402, -0.121, 110.893]}
        rotation={[0, -1.571, 0]}
        scale={[0.037, 0.502, 0.037]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-64.264, 0.006, 111.303]}
        rotation={[0, -1.571, 0]}
        scale={[0.029, 0.391, 0.029]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-56.173, -0.121, 7.883]}
        rotation={[0, -1.571, 0]}
        scale={[0.049, 0.675, 0.049]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[47.402, -0.121, 24.523]}
        rotation={[0, -1.571, 0]}
        scale={[0.027, 0.364, 0.027]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[36.036, -0.121, 30.506]}
        rotation={[0, -1.571, 0]}
        scale={[0.024, 0.327, 0.024]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[16.266, 1.105, 35.744]}
        rotation={[0, -1.571, 0]}
        scale={[0.027, 0.366, 0.027]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[27.899, -0.121, 41.24]}
        rotation={[0, -1.571, 0]}
        scale={[0.015, 0.207, 0.015]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[13.747, 1.559, 2.645]}
        rotation={[0, -1.571, 0]}
        scale={[0.02, 0.271, 0.02]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[27.41, -0.121, 19.027]}
        rotation={[0, -1.571, 0]}
        scale={[0.034, 0.473, 0.034]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-69.614, 1.559, 119.251]}
        rotation={[0, -1.571, 0]}
        scale={[0.032, 0.441, 0.032]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-75.408, -0.121, 102.944]}
        rotation={[0, -1.571, 0]}
        scale={[0.048, 0.654, 0.048]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[19.052, -0.121, 175.049]}
        rotation={[0, -1.571, 0]}
        scale={[0.018, 0.243, 0.018]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[25.113, -0.121, 169.401]}
        rotation={[0, -1.571, 0]}
        scale={[0.024, 0.336, 0.024]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-103.269, -0.121, 128.019]}
        rotation={[0, -1.571, 0]}
        scale={[0.025, 0.345, 0.025]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-111.895, -1.998, 97.038]}
        rotation={[0, -1.571, 0]}
        scale={[0.042, 0.571, 0.042]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-105.834, -0.122, 102.534]}
        rotation={[0, -1.571, 0]}
        scale={[0.029, 0.403, 0.029]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-108.841, -0.121, 150.308]}
        rotation={[0, -1.571, 0]}
        scale={[0.025, 0.342, 0.025]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-92.392, -0.121, 27.386]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.028, 0.383, 0.028]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-103.048, -0.121, 41.24]}
        rotation={[0, -1.571, 0]}
        scale={[0.03, 0.405, 0.03]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-108.841, -0.121, 38.864]}
        rotation={[0, -1.571, 0]}
        scale={[0.04, 0.548, 0.04]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-120.253, -0.121, 2.311]}
        rotation={[0, -1.571, 0]}
        scale={[0.035, 0.483, 0.035]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-91.903, -2.519, 71.887]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.022, 0.305, 0.022]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-117.2, -0.121, 52.794]}
        rotation={[0, -1.571, 0]}
        scale={[0.042, 0.576, 0.042]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-67.317, -5.218, 74.75]}
        rotation={[0, -1.571, 0]}
        scale={[0.051, 0.693, 0.051]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-64.042, -4.118, 85.818]}
        rotation={[0, -1.571, 0]}
        scale={[0.027, 0.371, 0.027]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-69.836, -0.121, 50.008]}
        rotation={[0, -1.571, 0]}
        scale={[0.047, 0.639, 0.047]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-19.953, -0.661, 55.247]}
        rotation={[0, -1.571, 0]}
        scale={[0.017, 0.227, 0.017]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[8.396, -0.121, 63.529]}
        rotation={[0, -1.571, 0]}
        scale={[0.018, 0.249, 0.018]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-33.617, -3.35, 63.939]}
        rotation={[0, -1.571, 0]}
        scale={[0.031, 0.422, 0.031]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-81.247, -0.121, 108.183]}
        rotation={[0, -1.571, 0]}
        scale={[0.036, 0.488, 0.036]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-50.112, -1.493, 96.962]}
        rotation={[0, -1.571, 0]}
        scale={[0.019, 0.26, 0.019]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[36.036, -0.121, 2.645]}
        rotation={[0, -1.571, 0]}
        scale={[0.042, 0.579, 0.042]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[38.555, -0.121, 2.311]}
        rotation={[0, -1.571, 0]}
        scale={[0.019, 0.259, 0.019]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[41.83, -0.121, 13.379]}
        rotation={[0, -1.571, 0]}
        scale={[0.041, 0.568, 0.041]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[44.394, -0.121, 69.511]}
        rotation={[0, -1.571, 0]}
        scale={[0.051, 0.699, 0.051]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[7.895, 1.709, 35.796]}
        rotation={[0, -1.571, 0]}
        scale={[0.046, 0.626, 0.046]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-55.684, -4.108, 80.245]}
        rotation={[0, -1.571, 0]}
        scale={[0.043, 0.583, 0.043]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-89.339, -0.121, 169.811]}
        rotation={[0, -1.571, 0]}
        scale={[0.049, 0.668, 0.049]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-114.681, -0.889, 99.824]}
        rotation={[0, -1.571, 0]}
        scale={[0.014, 0.196, 0.014]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-13.892, -0.121, 166.615]}
        rotation={[0, -1.571, 0]}
        scale={[0.036, 0.492, 0.036]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-25.258, -0.121, 169.811]}
        rotation={[0, -1.571, 0]}
        scale={[0.035, 0.482, 0.035]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-70.103, 0.198, 113.755]}
        rotation={[0, -1.571, 0]}
        scale={[0.028, 0.391, 0.028]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[52.974, -0.121, 24.523]}
        rotation={[0, -1.571, 0]}
        scale={[0.037, 0.505, 0.037]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-58.692, -2.11, 89.014]}
        rotation={[0, -1.571, 0]}
        scale={[0.049, 0.665, 0.049]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[55.272, -0.121, 158.333]}
        rotation={[0, -1.571, 0]}
        scale={[0.043, 0.586, 0.043]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-103.048, -0.121, 135.967]}
        rotation={[0, -1.571, 0]}
        scale={[0.028, 0.378, 0.028]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[52.753, -0.121, 44.436]}
        rotation={[0, -1.571, 0]}
        scale={[0.047, 0.645, 0.047]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-81.247, -0.121, 2.311]}
        rotation={[0, -1.571, 0]}
        scale={[0.048, 0.658, 0.048]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-77.973, -3.245, 91.39]}
        rotation={[0, -1.571, 0]}
        scale={[0.014, 0.197, 0.014]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-33.617, -3.839, 2.645]}
        rotation={[0, -1.571, 0]}
        scale={[0.047, 0.644, 0.047]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-82.641, -0.121, 2.311]}
        rotation={[0, -1.571, 0]}
        scale={[0.046, 0.633, 0.046]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-37.574, -5.218, 46.812]}
        rotation={[0, -1.571, 0]}
        scale={[0.038, 0.523, 0.038]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-15.507, 1.421, 68.118]}
        rotation={[0, -1.571, 0]}
        scale={[0.036, 0.495, 0.036]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-14.381, -1.158, 25.993]}
        rotation={[0, -1.571, 0]}
        scale={[0.049, 0.671, 0.049]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-36.181, -2.579, 67.708]}
        rotation={[0, -1.571, 0]}
        scale={[0.041, 0.566, 0.041]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-100.483, -0.121, 160.059]}
        rotation={[0, -1.571, 0]}
        scale={[0.028, 0.389, 0.028]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[51.092, -0.121, 110.969]}
        rotation={[0, -1.571, 0]}
        scale={[0.034, 0.46, 0.034]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[30.685, -0.121, 3.628]}
        rotation={[0, -1.571, 0]}
        scale={[0.02, 0.269, 0.02]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[29.071, -0.121, 36.078]}
        rotation={[0, -1.571, 0]}
        scale={[0.02, 0.274, 0.02]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[28.804, -0.121, 34.351]}
        rotation={[0, -1.571, 0]}
        scale={[0.037, 0.504, 0.037]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-48.719, -0.159, 23.13]}
        rotation={[0, -1.571, 0]}
        scale={[0.021, 0.288, 0.021]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-37.796, -5.143, 36.078]}
        rotation={[0, -1.571, 0]}
        scale={[0.045, 0.617, 0.045]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-49.207, 0.151, 113.755]}
        rotation={[0, -1.571, 0]}
        scale={[0.042, 0.569, 0.042]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-66.828, -0.121, 126.216]}
        rotation={[0, -1.571, 0]}
        scale={[0.031, 0.422, 0.031]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-57.298, -0.121, 102.944]}
        rotation={[0, -1.571, 0]}
        scale={[0.049, 0.67, 0.049]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[17.659, -0.121, 126.292]}
        rotation={[0, -1.571, 0]}
        scale={[0.015, 0.202, 0.015]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[32.078, -0.121, 102.534]}
        rotation={[0, -1.571, 0]}
        scale={[0.047, 0.648, 0.047]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-4.363, -0.121, 114.089]}
        rotation={[0, -1.571, 0]}
        scale={[0.022, 0.295, 0.022]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-4.63, -0.121, 124.899]}
        rotation={[0, -1.571, 0]}
        scale={[0.016, 0.222, 0.016]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-25.037, 0.077, 115.072]}
        rotation={[0, -1.571, 0]}
        scale={[0.047, 0.642, 0.047]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-12.721, -0.121, 148.915]}
        rotation={[0, -1.571, 0]}
        scale={[0.031, 0.422, 0.031]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-93.785, 1.559, 113.755]}
        rotation={[0, -1.571, 0]}
        scale={[0.045, 0.621, 0.045]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-101.655, -0.121, 124.823]}
        rotation={[0, -1.571, 0]}
        scale={[0.018, 0.251, 0.018]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-79.587, -0.121, 169.811]}
        rotation={[0, -1.571, 0]}
        scale={[0.015, 0.208, 0.015]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-71.496, -0.121, 155.546]}
        rotation={[0, -1.571, 0]}
        scale={[0.038, 0.515, 0.038]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-90.51, -0.121, 24.523]}
        rotation={[0, -1.571, 0]}
        scale={[0.035, 0.486, 0.035]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-113.021, -1.694, 69.511]}
        rotation={[0, -1.571, 0]}
        scale={[0.045, 0.618, 0.045]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-26.918, -5.218, 2.311]}
        rotation={[0, -1.571, 0]}
        scale={[0.02, 0.27, 0.02]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-15.285, -0.121, 57.957]}
        rotation={[0, -1.571, 0]}
        scale={[0.05, 0.681, 0.05]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[51.36, -0.121, 80.655]}
        rotation={[0, -1.571, 0]}
        scale={[0.034, 0.466, 0.034]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[17.659, -0.121, 58.033]}
        rotation={[0, -1.571, 0]}
        scale={[0.029, 0.403, 0.029]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[30.685, -0.121, 59.35]}
        rotation={[0, -1.571, 0]}
        scale={[0.018, 0.249, 0.018]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[40.215, -0.121, 45.829]}
        rotation={[0, -1.571, 0]}
        scale={[0.035, 0.483, 0.035]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-4.63, -0.121, 14.848]}
        rotation={[0, -1.571, 0]}
        scale={[0.033, 0.448, 0.033]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-48.719, -5.183, 55.17]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.045, 0.617, 0.045]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-93.518, -0.121, 4.038]}
        rotation={[0, -1.571, 0]}
        scale={[0.028, 0.386, 0.028]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-33.884, -0.121, 148.581]}
        rotation={[0, -1.571, 0]}
        scale={[0.022, 0.296, 0.022]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-89.117, -0.121, 137.361]}
        rotation={[0, -1.571, 0]}
        scale={[0.047, 0.649, 0.047]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-93.518, -1.087, 100.158]}
        rotation={[0, -1.571, 0]}
        scale={[0.042, 0.581, 0.042]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[46.913, -0.121, 14.848]}
        rotation={[0, -1.571, 0]}
        scale={[0.017, 0.231, 0.017]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[54.367, -0.121, 20.344]}
        rotation={[0, -1.571, 0]}
        scale={[0.047, 0.642, 0.047]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-54.512, -1.69, 90.407]}
        rotation={[0, -1.571, 0]}
        scale={[0.027, 0.372, 0.027]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[35.769, -0.121, 106.79]}
        rotation={[0, -1.571, 0]}
        scale={[0.05, 0.691, 0.05]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-6.927, -0.121, 135.967]}
        rotation={[0, -1.571, 0]}
        scale={[0.039, 0.534, 0.039]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-97.697, -0.121, 151.701]}
        rotation={[0, -1.571, 0]}
        scale={[0.035, 0.481, 0.035]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-92.392, -0.121, 140.223]}
        rotation={[0, -1.571, 0]}
        scale={[0.025, 0.345, 0.025]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-87.724, -0.121, 10.593]}
        rotation={[0, -1.571, 0]}
        scale={[0.047, 0.641, 0.047]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-96.304, -0.121, 19.361]}
        rotation={[0, -1.571, 0]}
        scale={[0.016, 0.213, 0.016]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-99.357, -0.121, 0.918]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.045, 0.622, 0.045]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-51.505, -1.813, 46.812]}
        rotation={[0, -1.571, 0]}
        scale={[0.03, 0.417, 0.03]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-48.94, -3.765, 50.008]}
        rotation={[0, -1.571, 0]}
        scale={[0.015, 0.203, 0.015]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[3.732, -0.082, 20.433]}
        rotation={[0, -1.571, 0]}
        scale={[0.017, 0.23, 0.017]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-6.927, -0.121, 20.344]}
        rotation={[0, -1.571, 0]}
        scale={[0.049, 0.671, 0.049]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-9.935, -1.297, 4.038]}
        rotation={[0, -1.571, 0]}
        scale={[0.041, 0.559, 0.041]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[41.341, -0.121, 53.854]}
        rotation={[0, -1.571, 0]}
        scale={[0.049, 0.676, 0.049]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[41.83, -0.121, 53.777]}
        rotation={[0, -1.571, 0]}
        scale={[0.018, 0.243, 0.018]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[41.608, -0.121, 54.187]}
        rotation={[0, -1.571, 0]}
        scale={[0.039, 0.529, 0.039]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[12.087, 1.314, 51.068]}
        rotation={[0, -1.571, 0]}
        scale={[0.045, 0.622, 0.045]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[12.576, -0.121, 80.245]}
        rotation={[0, -1.571, 0]}
        scale={[0.025, 0.347, 0.025]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-25.258, -0.32, 65.332]}
        rotation={[0, -1.571, 0]}
        scale={[0.047, 0.648, 0.047]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-29.705, -0.121, 81.715]}
        rotation={[0, -1.571, 0]}
        scale={[0.043, 0.585, 0.043]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[4.217, -0.121, 87.211]}
        rotation={[0, -1.571, 0]}
        scale={[0.038, 0.525, 0.038]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-9.935, 1.54, 68.118]}
        rotation={[0, -1.571, 0]}
        scale={[0.035, 0.477, 0.035]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-4.63, -0.454, 74.75]}
        rotation={[0, -1.571, 0]}
        scale={[0.035, 0.482, 0.035]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-4.141, -0.251, 73.28]}
        rotation={[0, -1.571, 0]}
        scale={[0.026, 0.357, 0.026]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-16.9, -3.031, 20.754]}
        rotation={[0, -1.571, 0]}
        scale={[0.016, 0.214, 0.016]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-31.098, -5.218, 17.634]}
        rotation={[0, -1.571, 0]}
        scale={[0.036, 0.489, 0.036]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-27.823, -5.218, 9.2]}
        rotation={[0, -1.571, 0]}
        scale={[0.049, 0.671, 0.049]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-16.9, -1.363, 37.471]}
        rotation={[0, -1.571, 0]}
        scale={[0.024, 0.325, 0.024]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-19.953, -2.84, 37.137]}
        rotation={[0, -1.571, 0]}
        scale={[0.035, 0.486, 0.035]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-32.002, -5.218, 42.633]}
        rotation={[0, -1.571, 0]}
        scale={[0.048, 0.663, 0.048]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[3.996, 1.559, 43.043]}
        rotation={[0, -1.571, 0]}
        scale={[0.046, 0.635, 0.046]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[7.908, 0.564, 39.923]}
        rotation={[0, -1.571, 0]}
        scale={[0.025, 0.349, 0.025]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-6.928, -0.181, 35.643]}
        rotation={[0, -1.571, 0]}
        scale={[0.049, 0.675, 0.049]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-4.363, -0.179, 30.482]}
        rotation={[0, -1.571, 0]}
        scale={[0.03, 0.416, 0.03]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-58.959, -2.359, 87.287]}
        rotation={[0, -1.571, 0]}
        scale={[0.043, 0.585, 0.043]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-115.585, -0.121, 63.529]}
        rotation={[0, -1.571, 0]}
        scale={[0.021, 0.286, 0.021]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-90.732, -4.658, 76.476]}
        rotation={[0, -1.571, 0]}
        scale={[0.037, 0.514, 0.037]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-110.502, -0.121, 34.351]}
        rotation={[0, -1.571, 0]}
        scale={[0.04, 0.545, 0.04]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-98.869, -0.121, 35.668]}
        rotation={[0, -1.571, 0]}
        scale={[0.03, 0.417, 0.03]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-55.905, -0.121, 154.487]}
        rotation={[0, -1.571, 0]}
        scale={[0.022, 0.305, 0.022]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-54.78, -0.121, 155.546]}
        rotation={[0, -1.571, 0]}
        scale={[0.035, 0.475, 0.035]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-51.505, -0.121, 163.828]}
        rotation={[0, -1.571, 0]}
        scale={[0.044, 0.601, 0.044]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-117.2, -0.121, 154.487]}
        rotation={[0, -1.571, 0]}
        scale={[0.04, 0.549, 0.04]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-114.681, -0.121, 154.153]}
        rotation={[0, -1.571, 0]}
        scale={[0.028, 0.38, 0.028]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-94.689, -0.121, 126.216]}
        rotation={[0, -1.571, 0]}
        scale={[0.017, 0.236, 0.017]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[24.892, -0.121, 146.129]}
        rotation={[0, -1.571, 0]}
        scale={[0.019, 0.265, 0.019]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[12.087, -0.121, 145.795]}
        rotation={[0, -1.571, 0]}
        scale={[0.019, 0.257, 0.019]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[20.934, -0.121, 152.684]}
        rotation={[0, -1.571, 0]}
        scale={[0.044, 0.61, 0.044]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[12.354, -0.121, 133.591]}
        rotation={[0, -1.571, 0]}
        scale={[0.047, 0.649, 0.047]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[24.624, -0.121, 168.084]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.027, 0.374, 0.027]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-27.823, -0.121, 142.933]}
        rotation={[0, -1.571, 0]}
        scale={[0.023, 0.322, 0.023]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-30.831, -0.121, 143.343]}
        rotation={[0, -1.571, 0]}
        scale={[0.03, 0.415, 0.03]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-32.491, -0.121, 140.223]}
        rotation={[0, -1.571, 0]}
        scale={[0.023, 0.314, 0.023]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-5.534, -0.121, 165.222]}
        rotation={[0, -1.571, 0]}
        scale={[0.029, 0.401, 0.029]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-0.183, -0.121, 165.632]}
        rotation={[0, -1.571, 0]}
        scale={[0.028, 0.383, 0.028]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-32.491, -0.121, 92.859]}
        rotation={[0, -1.571, 0]}
        scale={[0.048, 0.652, 0.048]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-15.285, -0.121, 127.609]}
        rotation={[0, -1.571, 0]}
        scale={[0.017, 0.229, 0.017]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-23.865, -0.121, 132.198]}
        rotation={[0, -1.571, 0]}
        scale={[0.031, 0.425, 0.031]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-26.918, 1.559, 120.72]}
        rotation={[0, -1.571, 0]}
        scale={[0.016, 0.221, 0.016]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[1.431, -0.121, 130.395]}
        rotation={[0, -1.571, 0]}
        scale={[0.047, 0.639, 0.047]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-7.149, -0.121, 126.626]}
        rotation={[0, -1.571, 0]}
        scale={[0.036, 0.489, 0.036]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[17.659, -0.121, 95.645]}
        rotation={[0, -1.571, 0]}
        scale={[0.019, 0.265, 0.019]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[12.576, -0.121, 113.679]}
        rotation={[0, -1.571, 0]}
        scale={[0.035, 0.482, 0.035]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[20.712, -0.121, 121.054]}
        rotation={[0, -1.571, 0]}
        scale={[0.04, 0.549, 0.04]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[19.052, -0.121, 120.72]}
        rotation={[0, -1.571, 0]}
        scale={[0.049, 0.666, 0.049]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-76.58, -0.121, 102.534]}
        rotation={[0, -1.571, 0]}
        scale={[0.037, 0.507, 0.037]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-74.015, -0.121, 108.516]}
        rotation={[0, -1.571, 0]}
        scale={[0.03, 0.41, 0.03]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-77.068, -0.121, 105.397]}
        rotation={[0, -1.571, 0]}
        scale={[0.027, 0.367, 0.027]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-76.58, 1.559, 120.644]}
        rotation={[0, -1.571, 0]}
        scale={[0.04, 0.55, 0.04]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-50.333, 1.559, 121.054]}
        rotation={[0, -1.571, 0]}
        scale={[0.025, 0.337, 0.025]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-60.352, -0.121, 19.027]}
        rotation={[0, -1.571, 0]}
        scale={[0.021, 0.282, 0.021]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-76.58, -0.121, 35.668]}
        rotation={[0, -1.571, 0]}
        scale={[0.028, 0.387, 0.028]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-40.582, -4.376, 37.471]}
        rotation={[0, -1.571, 0]}
        scale={[0.043, 0.594, 0.043]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-54.78, -0.121, 28.779]}
        rotation={[0, -1.571, 0]}
        scale={[0.034, 0.463, 0.034]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[19.541, 0.55, 20.344]}
        rotation={[0, -1.571, 0]}
        scale={[0.034, 0.469, 0.034]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[38.822, -0.121, 37.471]}
        rotation={[0, -1.571, 0]}
        scale={[0.028, 0.39, 0.028]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[35.769, -0.121, 31.565]}
        rotation={[0, -1.571, 0]}
        scale={[0.048, 0.664, 0.048]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[34.864, -0.121, 27.309]}
        rotation={[0, -1.571, 0]}
        scale={[0.035, 0.482, 0.035]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-39.189, -4.069, 26.326]}
        rotation={[0, -1.571, 0]}
        scale={[0.032, 0.444, 0.032]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-57.566, -0.121, 31.565]}
        rotation={[0, -1.571, 0]}
        scale={[0.019, 0.26, 0.019]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-62.649, 1.546, 120.644]}
        rotation={[0, -1.571, 0]}
        scale={[0.027, 0.375, 0.027]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[5.389, -0.121, 115.482]}
        rotation={[0, -1.571, 0]}
        scale={[0.046, 0.635, 0.046]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-21.346, -0.121, 161.119]}
        rotation={[0, -1.571, 0]}
        scale={[0.016, 0.217, 0.016]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-110.013, 1.559, 119.251]}
        rotation={[0, -1.571, 0]}
        scale={[0.038, 0.527, 0.038]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-65.657, -0.121, 164.238]}
        rotation={[0, -1.571, 0]}
        scale={[0.04, 0.546, 0.04]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-63.138, -0.121, 137.437]}
        rotation={[0, -1.571, 0]}
        scale={[0.03, 0.413, 0.03]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-103.048, -0.121, 28.703]}
        rotation={[0, -1.571, 0]}
        scale={[0.029, 0.397, 0.029]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-108.841, -0.121, 9.61]}
        rotation={[0, -1.571, 0]}
        scale={[0.023, 0.322, 0.023]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-79.854, -4.971, 74.75]}
        rotation={[0, -1.571, 0]}
        scale={[0.019, 0.259, 0.019]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-103.048, -3.259, 73.28]}
        rotation={[0, -1.571, 0]}
        scale={[0.025, 0.339, 0.025]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-62.871, -5.218, 76.476]}
        rotation={[0, -1.571, 0]}
        scale={[0.02, 0.28, 0.02]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-61.745, -5.218, 76.143]}
        rotation={[0, -1.571, 0]}
        scale={[0.021, 0.285, 0.021]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[1.431, 0.047, 28.703]}
        rotation={[0, -1.571, 0]}
        scale={[0.022, 0.3, 0.022]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-14.114, -0.739, 31.899]}
        rotation={[0, -1.571, 0]}
        scale={[0.016, 0.215, 0.016]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[49.699, -0.121, 70.57]}
        rotation={[0, -1.571, 0]}
        scale={[0.021, 0.292, 0.021]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[29.292, -0.121, 53.777]}
        rotation={[0, -1.571, 0]}
        scale={[0.043, 0.585, 0.043]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-40.582, -5.192, 48.615]}
        rotation={[0, -1.571, 0]}
        scale={[0.016, 0.22, 0.016]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-88.213, -0.121, 2.311]}
        rotation={[0, -1.571, 0]}
        scale={[0.018, 0.24, 0.018]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-84.938, -0.121, 7.807]}
        rotation={[0, -1.571, 0]}
        scale={[0.032, 0.445, 0.032]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-82.373, -0.121, 9.61]}
        rotation={[0, -1.571, 0]}
        scale={[0.046, 0.627, 0.046]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-88.213, -4.902, 90.073]}
        rotation={[0, -1.571, 0]}
        scale={[0.038, 0.519, 0.038]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-80.759, -1.185, 98.355]}
        rotation={[0, -1.571, 0]}
        scale={[0.038, 0.517, 0.038]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[1.21, -0.121, 134.984]}
        rotation={[0, -1.571, 0]}
        scale={[0.016, 0.22, 0.016]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[45.52, -0.121, 92.859]}
        rotation={[0, -1.571, 0]}
        scale={[0.046, 0.625, 0.046]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-34.788, -0.121, 98.355]}
        rotation={[0, -1.571, 0]}
        scale={[0.046, 0.635, 0.046]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[48.573, -0.121, 140.557]}
        rotation={[0, -1.571, 0]}
        scale={[0.046, 0.628, 0.046]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-84.034, -0.121, 0.918]}
        rotation={[0, -1.571, 0]}
        scale={[0.023, 0.315, 0.023]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[5.61, -0.121, 6.414]}
        rotation={[0, -1.571, 0]}
        scale={[0.028, 0.382, 0.028]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[54.146, -0.121, 51.401]}
        rotation={[0, -1.571, 0]}
        scale={[0.019, 0.258, 0.019]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-18.56, 1.164, 71.963]}
        rotation={[0, -1.571, 0]}
        scale={[0.047, 0.644, 0.047]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-107.227, -0.121, 156.863]}
        rotation={[0, -1.571, 0]}
        scale={[0.035, 0.483, 0.035]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-83.766, -0.121, 157.273]}
        rotation={[0, -1.571, 0]}
        scale={[0.041, 0.568, 0.041]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-85.427, 1.033, 112.362]}
        rotation={[0, -1.571, 0]}
        scale={[0.02, 0.269, 0.02]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[32.078, -0.121, 161.042]}
        rotation={[0, -1.571, 0]}
        scale={[0.02, 0.279, 0.02]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-62.871, 1.558, 116.875]}
        rotation={[0, -1.571, 0]}
        scale={[0.029, 0.402, 0.029]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[27.41, -0.121, 17.634]}
        rotation={[0, -1.571, 0]}
        scale={[0.049, 0.667, 0.049]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-51.505, -0.121, 23.13]}
        rotation={[0, -1.571, 0]}
        scale={[0.029, 0.392, 0.029]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-40.582, 0.28, 128.019]}
        rotation={[0, -1.571, 0]}
        scale={[0.05, 0.682, 0.05]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-74.282, -4.048, 88.68]}
        rotation={[0, -1.571, 0]}
        scale={[0.034, 0.469, 0.034]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-29.216, -0.121, 112.286]}
        rotation={[0, -1.571, 0]}
        scale={[0.017, 0.233, 0.017]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-18.293, -0.121, 150.308]}
        rotation={[0, -1.571, 0]}
        scale={[0.033, 0.448, 0.033]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[14.873, -0.121, 161.119]}
        rotation={[0, -1.571, 0]}
        scale={[0.047, 0.644, 0.047]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-111.627, -0.121, 173.99]}
        rotation={[0, -1.571, 0]}
        scale={[0.021, 0.286, 0.021]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-68.71, -0.121, 140.223]}
        rotation={[0, -1.571, 0]}
        scale={[0.018, 0.252, 0.018]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-96.082, -5.103, 78.852]}
        rotation={[0, -1.571, 0]}
        scale={[0.042, 0.575, 0.042]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-79.587, -5.218, 84.835]}
        rotation={[0, -1.571, 0]}
        scale={[0.044, 0.607, 0.044]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-84.034, -5.218, 78.929]}
        rotation={[0, -1.571, 0]}
        scale={[0.047, 0.638, 0.047]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-101.655, -5.218, 83.032]}
        rotation={[0, -1.571, 0]}
        scale={[0.015, 0.204, 0.015]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-57.298, -2.841, 84.835]}
        rotation={[0, -1.571, 0]}
        scale={[0.031, 0.421, 0.031]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-74.282, -0.121, 51.068]}
        rotation={[0, -1.571, 0]}
        scale={[0.029, 0.402, 0.029]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[4.192, 1.856, 34.376]}
        rotation={[0, -1.571, 0]}
        scale={[0.024, 0.323, 0.024]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-29.437, -5.218, 17.968]}
        rotation={[0, -1.571, 0]}
        scale={[0.016, 0.214, 0.016]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-12.988, 1.392, 83.108]}
        rotation={[0, -1.571, 0]}
        scale={[0.041, 0.565, 0.041]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[15.362, -0.121, 67.708]}
        rotation={[0, -1.571, 0]}
        scale={[0.024, 0.327, 0.024]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[26.285, -0.121, 55.58]}
        rotation={[0, -1.571, 0]}
        scale={[0.049, 0.671, 0.049]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-7.416, -0.121, 16.241]}
        rotation={[0, -1.571, 0]}
        scale={[0.029, 0.398, 0.029]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-96.082, -0.852, 101.141]}
        rotation={[0, -1.571, 0]}
        scale={[0.026, 0.363, 0.026]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[38.822, -0.121, 134.984]}
        rotation={[0, -1.571, 0]}
        scale={[0.048, 0.663, 0.048]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[48.306, -0.121, 145.795]}
        rotation={[0, -1.571, 0]}
        scale={[0.05, 0.683, 0.05]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-40.36, -3.225, 17.558]}
        rotation={[0, -1.571, 0]}
        scale={[0.017, 0.229, 0.017]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[43.001, -0.121, 6.824]}
        rotation={[0, -1.571, 0]}
        scale={[0.025, 0.344, 0.025]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-33.884, -0.121, 101.217]}
        rotation={[0, -1.571, 0]}
        scale={[0.038, 0.518, 0.038]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[44.616, -0.121, 67.708]}
        rotation={[0, -1.571, 0]}
        scale={[0.02, 0.268, 0.02]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-79.587, -5.218, 79.262]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.043, 0.594, 0.043]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-113.288, -0.121, 21.814]}
        rotation={[0, -1.571, 0]}
        scale={[0.041, 0.567, 0.041]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-90.51, -0.121, 32.882]}
        rotation={[0, -1.571, 0]}
        scale={[0.042, 0.579, 0.042]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-90.732, -0.121, 22.147]}
        rotation={[0, -1.571, 0]}
        scale={[0.019, 0.265, 0.019]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-113.288, 1.312, 122.113]}
        rotation={[0, -1.571, 0]}
        scale={[0.014, 0.194, 0.014]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[54.367, -0.121, 123.43]}
        rotation={[0, -1.571, 0]}
        scale={[0.046, 0.629, 0.046]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-67.05, -0.121, 1.252]}
        rotation={[0, -1.571, 0]}
        scale={[0.024, 0.324, 0.024]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[20.445, -0.121, 10.669]}
        rotation={[0, -1.571, 0]}
        scale={[0.023, 0.313, 0.023]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-12.499, 1.232, 88.604]}
        rotation={[0, -1.571, 0]}
        scale={[0.041, 0.562, 0.041]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[54.146, -0.121, 157.273]}
        rotation={[0, -1.571, 0]}
        scale={[0.035, 0.476, 0.035]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[31.59, -0.121, 133.258]}
        rotation={[0, -1.571, 0]}
        scale={[0.027, 0.37, 0.027]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-101.655, 0.859, 110.893]}
        rotation={[0, -1.571, 0]}
        scale={[0.032, 0.439, 0.032]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[55.539, -0.121, 134.984]}
        rotation={[0, -1.571, 0]}
        scale={[0.02, 0.271, 0.02]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[53.878, -0.121, 1.614]}
        rotation={[0, -1.571, 0]}
        scale={[0.046, 0.634, 0.046]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-102.351, -0.65, 67.708]}
        rotation={[0, -1.571, 0]}
        scale={[0.033, 0.453, 0.033]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-56.602, -0.121, 157.273]}
        rotation={[0, -1.571, 0]}
        scale={[0.021, 0.289, 0.021]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-56.173, -0.121, 157.636]}
        rotation={[0, -1.571, 0]}
        scale={[0.039, 0.532, 0.039]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-102.351, -0.121, 157.56]}
        rotation={[0, -1.571, 0]}
        scale={[0.042, 0.572, 0.042]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[31.857, -0.121, 91.103]}
        rotation={[0, -1.571, 0]}
        scale={[0.04, 0.544, 0.04]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-58.262, -0.121, 11.366]}
        rotation={[0, -1.571, 0]}
        scale={[0.03, 0.416, 0.03]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-45.236, -0.134, 112.982]}
        rotation={[0, -1.571, 0]}
        scale={[0.032, 0.44, 0.032]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[43.698, -0.121, 123.84]}
        rotation={[0, -1.571, 0]}
        scale={[0.02, 0.277, 0.02]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[30.893, -0.121, 122.81]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.028, 0.386, 0.028]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[31.382, -0.121, 100.445]}
        rotation={[0, -1.571, 0]}
        scale={[0.035, 0.477, 0.035]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[31.16, -0.121, 146.129]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.031, 0.422, 0.031]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-90.999, -0.112, 122.81]}
        rotation={[0, -1.571, 0]}
        scale={[0.017, 0.236, 0.017]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-113.496, -4.241, 90.693]}
        rotation={[0, -1.571, 0]}
        scale={[0.048, 0.658, 0.048]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-69.139, -0.121, 155.88]}
        rotation={[0, -1.571, 0]}
        scale={[0.039, 0.537, 0.039]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-113.984, -0.463, 66.391]}
        rotation={[0, -1.571, 0]}
        scale={[0.029, 0.395, 0.029]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-12.499, -0.27, 33.578]}
        rotation={[0, -1.571, 0]}
        scale={[0.047, 0.648, 0.047]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[53.449, -0.121, 77.869]}
        rotation={[0, -1.571, 0]}
        scale={[0.031, 0.43, 0.031]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-35.973, -5.216, 57.336]}
        rotation={[0, -1.571, 0]}
        scale={[0.015, 0.2, 0.015]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-34.788, -5.186, 57.26]}
        rotation={[0, -1.571, 0]}
        scale={[0.029, 0.399, 0.029]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-45.458, -0.121, 134.984]}
        rotation={[0, -1.571, 0]}
        scale={[0.024, 0.323, 0.024]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-47.118, -0.121, 145.795]}
        rotation={[0, -1.571, 0]}
        scale={[0.014, 0.196, 0.014]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[43.223, -0.121, 146.415]}
        rotation={[0, -1.571, 0]}
        scale={[0.021, 0.292, 0.021]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-35.01, -0.121, 102.248]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.015, 0.201, 0.015]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-34.58, -4.541, 12.062]}
        rotation={[0, -1.571, 0]}
        scale={[0.017, 0.239, 0.017]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-35.485, -4.183, 11.986]}
        rotation={[0, -1.571, 0]}
        scale={[0.039, 0.529, 0.039]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[54.146, -0.121, 11.699]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.028, 0.389, 0.028]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[55.272, -0.121, 18.331]}
        rotation={[0, -1.571, 0]}
        scale={[0.041, 0.567, 0.041]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-41.057, -0.75, 106.713]}
        rotation={[0, -1.571, 0]}
        scale={[0.016, 0.214, 0.016]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-47.118, -0.271, 106.79]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.027, 0.371, 0.027]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[9.093, -0.121, 107.41]}
        rotation={[0, -1.571, 0]}
        scale={[0.048, 0.661, 0.048]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[3.299, -0.121, 146.129]}
        rotation={[0, -1.571, 0]}
        scale={[0.023, 0.32, 0.023]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[47.61, -0.121, 150.671]}
        rotation={[0, -1.571, 0]}
        scale={[0.025, 0.347, 0.025]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[38.347, -0.121, 135.271]}
        rotation={[0, -1.571, 0]}
        scale={[0.037, 0.51, 0.037]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-85.16, -0.33, 102.248]}
        rotation={[0, -1.571, 0]}
        scale={[0.049, 0.676, 0.049]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-97.268, -0.121, 106.79]}
        rotation={[0, -1.571, 0]}
        scale={[0.049, 0.671, 0.049]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-89.814, -0.121, 151.988]}
        rotation={[0, -1.571, 0]}
        scale={[0.022, 0.298, 0.022]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-44.761, -0.121, 141.253]}
        rotation={[0, -1.571, 0]}
        scale={[0.036, 0.496, 0.036]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-97.268, -0.121, 16.241]}
        rotation={[0, -1.571, 0]}
        scale={[0.05, 0.681, 0.05]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-51.505, -0.982, 44.723]}
        rotation={[0, -1.571, 0]}
        scale={[0.017, 0.237, 0.017]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[3.996, 1.446, 61.849]}
        rotation={[0, -1.571, 0]}
        scale={[0.015, 0.2, 0.015]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-1.848, -0.115, 50.372]}
        rotation={[0, -1.571, 0]}
        scale={[0.043, 0.595, 0.043]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[38.347, -0.121, 45.419]}
        rotation={[0, -1.571, 0]}
        scale={[0.046, 0.627, 0.046]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[14.444, -0.103, 46.526]}
        rotation={[0, -1.571, 0]}
        scale={[0.029, 0.393, 0.029]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[15.57, -0.121, 74.053]}
        rotation={[0, -1.571, 0]}
        scale={[0.046, 0.635, 0.046]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[48.795, -0.121, 78.156]}
        rotation={[0, -1.571, 0]}
        scale={[0.032, 0.442, 0.032]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-29.437, -5.047, 50.705]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.029, 0.402, 0.029]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-19.257, 1.559, 85.197]}
        rotation={[0, -1.571, 0]}
        scale={[0.032, 0.433, 0.032]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-24.34, 0.687, 85.121]}
        rotation={[0, -1.571, 0]}
        scale={[0.029, 0.402, 0.029]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-24.562, 0.194, 84.138]}
        rotation={[0, -1.571, 0]}
        scale={[0.031, 0.427, 0.031]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[10.694, -0.121, 85.197]}
        rotation={[0, -1.571, 0]}
        scale={[0.036, 0.494, 0.036]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-27.823, -5.218, 1.538]}
        rotation={[0, -1.571, 0]}
        scale={[0.047, 0.642, 0.047]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-28.044, -5.218, 35.381]}
        rotation={[0, -1.571, 0]}
        scale={[0.03, 0.411, 0.03]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-29.705, -5.218, 39.227]}
        rotation={[0, -1.571, 0]}
        scale={[0.037, 0.512, 0.037]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-29.216, -5.218, 29.399]}
        rotation={[0, -1.571, 0]}
        scale={[0.04, 0.553, 0.04]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[8.871, 0.105, 39.56]}
        rotation={[0, -1.571, 0]}
        scale={[0.026, 0.352, 0.026]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-6.721, -0.22, 35.007]}
        rotation={[0, -1.571, 0]}
        scale={[0.022, 0.298, 0.022]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-5.54, -0.512, 34.812]}
        rotation={[0, -1.571, 0]}
        scale={[0.029, 0.404, 0.029]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-62.871, -4.15, 61.849]}
        rotation={[0, -1.571, 0]}
        scale={[0.021, 0.294, 0.021]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-58.262, -5.09, 62.212]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.027, 0.377, 0.027]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-57.077, -3.16, 83.728]}
        rotation={[0, -1.571, 0]}
        scale={[0.041, 0.564, 0.041]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-73.319, -5.153, 74.387]}
        rotation={[0, -1.571, 0]}
        scale={[0.02, 0.269, 0.02]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-40.849, -0.534, 78.232]}
        rotation={[0, -1.571, 0]}
        scale={[0.028, 0.384, 0.028]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-119.068, -0.121, 55.17]}
        rotation={[0, -1.571, 0]}
        scale={[0.044, 0.61, 0.044]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-119.289, -0.121, 45.133]}
        rotation={[0, -1.571, 0]}
        scale={[0.051, 0.7, 0.051]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-106.322, -5.218, 79.625]}
        rotation={[0, -1.571, 0]}
        scale={[0.018, 0.245, 0.018]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-119.068, -3.259, 72.584]}
        rotation={[0, -1.571, 0]}
        scale={[0.032, 0.443, 0.032]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-112.324, -3.8, 73.69]}
        rotation={[0, -1.571, 0]}
        scale={[0.031, 0.429, 0.031]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-113.984, -0.121, 16.938]}
        rotation={[0, -1.571, 0]}
        scale={[0.049, 0.667, 0.049]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-107.227, -0.121, 40.543]}
        rotation={[0, -1.571, 0]}
        scale={[0.029, 0.404, 0.029]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-112.324, -0.121, 40.257]}
        rotation={[0, -1.571, 0]}
        scale={[0.037, 0.512, 0.037]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-111.895, -0.121, 40.62]}
        rotation={[0, -1.571, 0]}
        scale={[0.049, 0.672, 0.049]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-113.496, -0.121, 28.006]}
        rotation={[0, -1.571, 0]}
        scale={[0.041, 0.556, 0.041]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-79.587, -0.121, 40.953]}
        rotation={[0, -1.571, 0]}
        scale={[0.021, 0.293, 0.021]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-74.282, -0.121, 174.353]}
        rotation={[0, -1.571, 0]}
        scale={[0.045, 0.614, 0.045]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-107.923, -0.121, 145.719]}
        rotation={[0, -1.571, 0]}
        scale={[0.03, 0.414, 0.03]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-118.593, -0.121, 152.398]}
        rotation={[0, -1.571, 0]}
        scale={[0.047, 0.646, 0.047]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-113.984, -0.121, 150.671]}
        rotation={[0, -1.571, 0]}
        scale={[0.044, 0.604, 0.044]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-119.068, -0.121, 140.843]}
        rotation={[0, -1.571, 0]}
        scale={[0.015, 0.202, 0.015]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-108.145, -0.752, 101.551]}
        rotation={[0, -1.571, 0]}
        scale={[0.031, 0.421, 0.031]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-119.556, -0.604, 101.914]}
        rotation={[0, -1.571, 0]}
        scale={[0.036, 0.489, 0.036]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-118.371, -0.669, 101.838]}
        rotation={[0, -1.571, 0]}
        scale={[0.032, 0.44, 0.032]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-108.145, 0.652, 122.447]}
        rotation={[0, -1.571, 0]}
        scale={[0.022, 0.306, 0.022]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-112.591, -0.121, 129.079]}
        rotation={[0, -1.571, 0]}
        scale={[0.048, 0.654, 0.048]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-96.779, 1.559, 112.982]}
        rotation={[0, -1.571, 0]}
        scale={[0.042, 0.575, 0.042]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[32.553, -0.121, 151.701]}
        rotation={[0, -1.571, 0]}
        scale={[0.032, 0.433, 0.032]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[25.321, -0.121, 166.691]}
        rotation={[0, -1.571, 0]}
        scale={[0.049, 0.672, 0.049]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[25.81, -0.121, 174.276]}
        rotation={[0, -1.571, 0]}
        scale={[0.035, 0.477, 0.035]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[15.837, -0.121, 168.418]}
        rotation={[0, -1.571, 0]}
        scale={[0.035, 0.482, 0.035]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[14.177, -0.121, 163.208]}
        rotation={[0, -1.571, 0]}
        scale={[0.049, 0.67, 0.049]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[42.526, -0.121, 173.58]}
        rotation={[0, -1.571, 0]}
        scale={[0.028, 0.381, 0.028]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-29.437, -0.121, 151.005]}
        rotation={[0, -1.571, 0]}
        scale={[0.05, 0.68, 0.05]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[3.032, -0.121, 172.263]}
        rotation={[0, -1.571, 0]}
        scale={[0.029, 0.402, 0.029]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-2.052, -0.121, 172.187]}
        rotation={[0, -1.571, 0]}
        scale={[0.026, 0.357, 0.026]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-23.865, -0.057, 128.716]}
        rotation={[0, -1.571, 0]}
        scale={[0.048, 0.661, 0.048]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[14.177, -0.121, 101.914]}
        rotation={[0, -1.571, 0]}
        scale={[0.028, 0.379, 0.028]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[15.362, -0.121, 122.733]}
        rotation={[0, -1.571, 0]}
        scale={[0.018, 0.243, 0.018]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-39.189, -0.121, 130.109]}
        rotation={[0, -1.571, 0]}
        scale={[0.039, 0.537, 0.039]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-63.138, -0.121, 39.227]}
        rotation={[0, -1.571, 0]}
        scale={[0.022, 0.307, 0.022]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-52.201, -0.121, 34.971]}
        rotation={[0, -1.571, 0]}
        scale={[0.015, 0.206, 0.015]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[15.837, 1.463, 7.52]}
        rotation={[0, -1.571, 0]}
        scale={[0.043, 0.596, 0.043]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[14.177, -0.121, 39.227]}
        rotation={[0, -1.571, 0]}
        scale={[0.05, 0.681, 0.05]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[15.362, 1.559, 22.434]}
        rotation={[0, -1.571, 0]}
        scale={[0.043, 0.59, 0.043]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[37.429, -0.121, 22.844]}
        rotation={[0, -1.571, 0]}
        scale={[0.037, 0.513, 0.037]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[43.431, -0.121, 28.779]}
        rotation={[0, -1.571, 0]}
        scale={[0.047, 0.638, 0.047]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[27.203, -0.121, 29.399]}
        rotation={[0, -1.571, 0]}
        scale={[0.017, 0.237, 0.017]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[31.16, -0.121, 6.824]}
        rotation={[0, -1.571, 0]}
        scale={[0.029, 0.392, 0.029]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-35.973, -5.081, 29.475]}
        rotation={[0, -1.571, 0]}
        scale={[0.046, 0.628, 0.046]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-35.485, 0.201, 117.858]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.044, 0.606, 0.044]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[49.27, -0.121, 113.392]}
        rotation={[0, -1.571, 0]}
        scale={[0.048, 0.659, 0.048]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[53.878, -0.121, 117.238]}
        rotation={[0, -1.571, 0]}
        scale={[0.038, 0.528, 0.038]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[25.81, -0.121, 112.982]}
        rotation={[0, -1.571, 0]}
        scale={[0.049, 0.675, 0.049]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[26.285, -0.121, 96.676]}
        rotation={[0, -1.571, 0]}
        scale={[0.033, 0.452, 0.033]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[31.59, -0.121, 96.342]}
        rotation={[0, -1.571, 0]}
        scale={[0.029, 0.396, 0.029]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[4.217, -0.121, 111.589]}
        rotation={[0, -1.571, 0]}
        scale={[0.02, 0.268, 0.02]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[31.16, -0.121, 162.845]}
        rotation={[0, -1.571, 0]}
        scale={[0.038, 0.526, 0.038]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-106.322, 1.295, 113.058]}
        rotation={[0, -1.571, 0]}
        scale={[0.05, 0.689, 0.05]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-105.834, 1.559, 118.554]}
        rotation={[0, -1.571, 0]}
        scale={[0.047, 0.638, 0.047]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-62.871, -0.121, 162.149]}
        rotation={[0, -1.571, 0]}
        scale={[0.036, 0.488, 0.036]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[3.032, -0.121, 22.51]}
        rotation={[0, -1.571, 0]}
        scale={[0.037, 0.511, 0.037]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-13.196, 0.962, 73.977]}
        rotation={[0, -1.571, 0]}
        scale={[0.045, 0.616, 0.045]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[53.449, -0.121, 73.69]}
        rotation={[0, -1.571, 0]}
        scale={[0.037, 0.503, 0.037]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-85.427, -0.121, 7.187]}
        rotation={[0, -1.571, 0]}
        scale={[0.043, 0.588, 0.043]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-34.788, -0.121, 139.45]}
        rotation={[0, -1.571, 0]}
        scale={[0.046, 0.628, 0.046]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-78.891, -0.121, 140.557]}
        rotation={[0, -1.571, 0]}
        scale={[0.025, 0.342, 0.025]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[3.032, -0.121, 95.645]}
        rotation={[0, -1.571, 0]}
        scale={[0.038, 0.516, 0.038]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[9.093, -0.121, 95.569]}
        rotation={[0, -1.571, 0]}
        scale={[0.027, 0.366, 0.027]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-39.189, -0.39, 91.103]}
        rotation={[0, -1.571, 0]}
        scale={[0.03, 0.418, 0.03]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[55.272, -0.121, 7.187]}
        rotation={[0, -1.571, 0]}
        scale={[0.031, 0.426, 0.031]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[54.367, -0.121, 5.717]}
        rotation={[0, -1.571, 0]}
        scale={[0.018, 0.253, 0.018]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[45.091, -0.121, 9.61]}
        rotation={[0, -1.571, 0]}
        scale={[0.02, 0.271, 0.02]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[47.61, -0.121, 9.973]}
        rotation={[0, -1.571, 0]}
        scale={[0.015, 0.201, 0.015]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-43.843, -0.146, 3.628]}
        rotation={[0, -1.571, 0]}
        scale={[0.023, 0.318, 0.023]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-44.064, -1.493, 96.676]}
        rotation={[0, -1.571, 0]}
        scale={[0.038, 0.52, 0.038]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-42.242, -1.001, 90.77]}
        rotation={[0, -1.571, 0]}
        scale={[0.048, 0.661, 0.048]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-43.843, -1.92, 92.783]}
        rotation={[0, -1.571, 0]}
        scale={[0.025, 0.347, 0.025]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-44.064, -1.64, 92.496]}
        rotation={[0, -1.571, 0]}
        scale={[0.018, 0.242, 0.018]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[45.52, -0.121, 93.556]}
        rotation={[0, -1.571, 0]}
        scale={[0.043, 0.596, 0.043]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[7.7, -0.121, 140.843]}
        rotation={[0, -1.571, 0]}
        scale={[0.047, 0.649, 0.047]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[1.906, -0.121, 144.039]}
        rotation={[0, -1.571, 0]}
        scale={[0.049, 0.676, 0.049]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[3.032, -0.121, 143.706]}
        rotation={[0, -1.571, 0]}
        scale={[0.042, 0.572, 0.042]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[45.312, -0.121, 134.574]}
        rotation={[0, -1.571, 0]}
        scale={[0.034, 0.46, 0.034]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-82.373, -2.382, 95.282]}
        rotation={[0, -1.571, 0]}
        scale={[0.031, 0.432, 0.031]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-78.461, -1.191, 99.128]}
        rotation={[0, -1.571, 0]}
        scale={[0.045, 0.62, 0.045]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-88.421, -2.373, 96.962]}
        rotation={[0, -1.571, 0]}
        scale={[0.045, 0.622, 0.045]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-84.463, -3.418, 93.193]}
        rotation={[0, -1.571, 0]}
        scale={[0.017, 0.229, 0.017]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-81.944, -0.121, 140.223]}
        rotation={[0, -1.571, 0]}
        scale={[0.017, 0.23, 0.017]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-34.788, -0.121, 142.236]}
        rotation={[0, -1.571, 0]}
        scale={[0.027, 0.368, 0.027]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-41.278, -0.121, 138.467]}
        rotation={[0, -1.571, 0]}
        scale={[0.049, 0.669, 0.049]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-88.909, -0.121, 7.883]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.045, 0.612, 0.045]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-86.331, -0.121, 51.688]}
        rotation={[0, -1.571, 0]}
        scale={[0.021, 0.284, 0.021]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-42.671, -5.218, 54.187]}
        rotation={[0, -1.571, 0]}
        scale={[0.024, 0.333, 0.024]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[5.818, -0.085, 9.973]}
        rotation={[0, -1.571, 0]}
        scale={[0.017, 0.23, 0.017]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[0.687, 1.743, 46.23]}
        rotation={[0, -1.571, 0]}
        scale={[0.016, 0.222, 0.016]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[47.877, -0.121, 47.919]}
        rotation={[0, -1.571, 0]}
        scale={[0.049, 0.669, 0.049]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[32.983, -0.121, 54.55]}
        rotation={[0, -1.571, 0]}
        scale={[0.041, 0.563, 0.041]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[23.023, -0.121, 46.116]}
        rotation={[0, -1.571, 0]}
        scale={[0.029, 0.393, 0.029]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[28.374, -0.121, 72.297]}
        rotation={[0, -1.571, 0]}
        scale={[0.024, 0.335, 0.024]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[30.197, -0.121, 76.839]}
        rotation={[0, -1.571, 0]}
        scale={[0.046, 0.633, 0.046]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[23.023, -0.121, 70.494]}
        rotation={[0, -1.571, 0]}
        scale={[0.036, 0.49, 0.036]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-21.079, -5.205, 8.913]}
        rotation={[0, -1.571, 0]}
        scale={[0.043, 0.594, 0.043]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-17.167, -4.322, 9.973]}
        rotation={[0, -1.571, 0]}
        scale={[0.044, 0.608, 0.044]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-12.499, -0.285, 32.185]}
        rotation={[0, -1.571, 0]}
        scale={[0.035, 0.485, 0.035]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[3.264, 1.722, 30.65]}
        rotation={[0, -1.571, 0]}
        scale={[0.046, 0.627, 0.046]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-59.863, -1.399, 51.688]}
        rotation={[0, -1.571, 0]}
        scale={[0.025, 0.336, 0.025]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-62.871, -1.047, 53.491]}
        rotation={[0, -1.571, 0]}
        scale={[0.019, 0.266, 0.019]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-41.546, -0.941, 75.446]}
        rotation={[0, -1.571, 0]}
        scale={[0.042, 0.571, 0.042]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-41.057, -0.83, 75.37]}
        rotation={[0, -1.571, 0]}
        scale={[0.046, 0.627, 0.046]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-108.841, -0.121, 52.098]}
        rotation={[0, -1.571, 0]}
        scale={[0.038, 0.52, 0.038]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-108.412, -0.121, 46.888]}
        rotation={[0, -1.571, 0]}
        scale={[0.027, 0.377, 0.027]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-77.973, -5.218, 76.763]}
        rotation={[0, -1.571, 0]}
        scale={[0.05, 0.685, 0.05]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-66.353, -0.121, 164.935]}
        rotation={[0, -1.571, 0]}
        scale={[0.029, 0.399, 0.029]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-38.759, -0.121, 164.601]}
        rotation={[0, -1.571, 0]}
        scale={[0.04, 0.548, 0.04]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-42.45, -0.121, 165.222]}
        rotation={[0, -1.571, 0]}
        scale={[0.03, 0.417, 0.03]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-44.064, -0.121, 164.935]}
        rotation={[0, -1.571, 0]}
        scale={[0.05, 0.692, 0.05]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-44.332, -0.121, 159.726]}
        rotation={[0, -1.571, 0]}
        scale={[0.032, 0.433, 0.032]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-104.441, -0.121, 165.918]}
        rotation={[0, -1.571, 0]}
        scale={[0.031, 0.424, 0.031]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-110.234, -0.121, 162.149]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.044, 0.604, 0.044]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-83.337, -0.121, 161.815]}
        rotation={[0, -1.571, 0]}
        scale={[0.02, 0.27, 0.02]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-104.441, -2.721, 96.265]}
        rotation={[0, -1.571, 0]}
        scale={[0.018, 0.253, 0.018]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-110.931, 1.559, 115.482]}
        rotation={[0, -1.571, 0]}
        scale={[0.018, 0.242, 0.018]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-22.043, -0.121, 159.726]}
        rotation={[0, -1.571, 0]}
        scale={[0.026, 0.362, 0.026]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-20.858, -0.121, 158.953]}
        rotation={[0, -1.571, 0]}
        scale={[0.039, 0.53, 0.039]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-16.9, -0.121, 160.756]}
        rotation={[0, -1.571, 0]}
        scale={[0.028, 0.385, 0.028]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[7.211, -0.121, 162.512]}
        rotation={[0, -1.571, 0]}
        scale={[0.018, 0.248, 0.018]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[2.824, -0.121, 163.132]}
        rotation={[0, -1.571, 0]}
        scale={[0.029, 0.398, 0.029]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-16.203, 0.917, 97.372]}
        rotation={[0, -1.571, 0]}
        scale={[0.041, 0.561, 0.041]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-22.043, 1.293, 90.073]}
        rotation={[0, -1.571, 0]}
        scale={[0.045, 0.619, 0.045]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[28.596, -0.121, 94.872]}
        rotation={[0, -1.571, 0]}
        scale={[0.021, 0.29, 0.021]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[22.802, -0.121, 117.571]}
        rotation={[0, -1.571, 0]}
        scale={[0.041, 0.563, 0.041]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[22.535, -0.121, 119.327]}
        rotation={[0, -1.571, 0]}
        scale={[0.019, 0.259, 0.019]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-66.132, -3.044, 89.3]}
        rotation={[0, -1.571, 0]}
        scale={[0.018, 0.253, 0.018]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-39.885, -0.427, 115.482]}
        rotation={[0, -1.571, 0]}
        scale={[0.045, 0.61, 0.045]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-58.262, -0.121, 8.58]}
        rotation={[0, -1.571, 0]}
        scale={[0.028, 0.39, 0.028]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-61.953, -0.121, 3.628]}
        rotation={[0, -1.571, 0]}
        scale={[0.031, 0.424, 0.031]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-38.492, -4.194, 27.719]}
        rotation={[0, -1.571, 0]}
        scale={[0.038, 0.518, 0.038]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[26.017, -0.121, 3.007]}
        rotation={[0, -1.571, 0]}
        scale={[0.041, 0.555, 0.041]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[29.989, -0.121, 29.399]}
        rotation={[0, -1.571, 0]}
        scale={[0.031, 0.424, 0.031]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[50.663, -0.121, 32.595]}
        rotation={[0, -1.571, 0]}
        scale={[0.045, 0.612, 0.045]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[42.038, -0.121, 42.709]}
        rotation={[0, -1.571, 0]}
        scale={[0.048, 0.655, 0.048]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[34.168, -0.121, 39.847]}
        rotation={[0, -1.571, 0]}
        scale={[0.024, 0.327, 0.024]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[37.429, -0.121, 42.347]}
        rotation={[0, -1.571, 0]}
        scale={[0.016, 0.221, 0.016]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[50.396, -0.121, 42.013]}
        rotation={[0, -1.571, 0]}
        scale={[0.04, 0.542, 0.04]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[46.705, -0.121, 39.847]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.043, 0.591, 0.043]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[13.051, -0.103, 43.043]}
        rotation={[0, -1.571, 0]}
        scale={[0.046, 0.624, 0.046]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[30.893, -0.121, 42.013]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.029, 0.402, 0.029]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[23.023, -0.121, 33.578]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.045, 0.618, 0.045]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[20.016, -0.121, 9.61]}
        rotation={[0, -1.571, 0]}
        scale={[0.047, 0.649, 0.047]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[11.39, 1.559, 7.187]}
        rotation={[0, -1.571, 0]}
        scale={[0.028, 0.39, 0.028]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[12.577, 1.576, 15.474]}
        rotation={[0, -1.571, 0]}
        scale={[0.036, 0.493, 0.036]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[23.498, -0.121, 20.058]}
        rotation={[0, -1.571, 0]}
        scale={[0.045, 0.614, 0.045]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-49.904, -0.122, 27.386]}
        rotation={[0, -1.571, 0]}
        scale={[0.018, 0.242, 0.018]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-48.719, -0.511, 32.185]}
        rotation={[0, -1.571, 0]}
        scale={[0.031, 0.419, 0.031]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-49.637, -0.216, 30.506]}
        rotation={[0, -1.571, 0]}
        scale={[0.032, 0.435, 0.032]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-46.421, -1.365, 32.261]}
        rotation={[0, -1.571, 0]}
        scale={[0.027, 0.365, 0.027]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-54.987, -0.121, 31.489]}
        rotation={[0, -1.571, 0]}
        scale={[0.036, 0.495, 0.036]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-51.03, -0.121, 27.023]}
        rotation={[0, -1.571, 0]}
        scale={[0.022, 0.298, 0.022]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-54.78, -0.121, 40.62]}
        rotation={[0, -1.571, 0]}
        scale={[0.047, 0.642, 0.047]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-54.987, -0.122, 41.936]}
        rotation={[0, -1.571, 0]}
        scale={[0.045, 0.624, 0.045]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-38.492, -5.024, 40.257]}
        rotation={[0, -1.571, 0]}
        scale={[0.046, 0.625, 0.046]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-42.939, -3.296, 35.048]}
        rotation={[0, -1.571, 0]}
        scale={[0.042, 0.576, 0.042]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-43.843, -2.816, 34.275]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.045, 0.62, 0.045]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-42.671, -3.429, 38.167]}
        rotation={[0, -1.571, 0]}
        scale={[0.033, 0.459, 0.033]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-43.635, -2.94, 37.834]}
        rotation={[0, -1.571, 0]}
        scale={[0.021, 0.292, 0.021]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-71.008, -0.121, 30.792]}
        rotation={[0, -1.571, 0]}
        scale={[0.033, 0.454, 0.033]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-77.498, -0.121, 34.685]}
        rotation={[0, -1.571, 0]}
        scale={[0.05, 0.69, 0.05]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-65.924, -0.121, 36.441]}
        rotation={[0, -1.571, 0]}
        scale={[0.03, 0.407, 0.03]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-63.346, -0.121, 36.364]}
        rotation={[0, -1.571, 0]}
        scale={[0.021, 0.29, 0.021]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-62.174, -0.121, 21.451]}
        rotation={[0, -1.571, 0]}
        scale={[0.047, 0.65, 0.047]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-55.476, 0.007, 124.203]}
        rotation={[0, -1.571, 0]}
        scale={[0.02, 0.276, 0.02]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-54.987, 0.929, 122.733]}
        rotation={[0, -1.571, 0]}
        scale={[0.026, 0.355, 0.026]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-52.423, -0.121, 127.323]}
        rotation={[0, -1.571, 0]}
        scale={[0.029, 0.402, 0.029]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-40.152, -0.121, 132.561]}
        rotation={[0, -1.571, 0]}
        scale={[0.05, 0.691, 0.05]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-75.883, 1.559, 118.554]}
        rotation={[0, -1.571, 0]}
        scale={[0.02, 0.269, 0.02]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-69.139, -0.121, 131.502]}
        rotation={[0, -1.571, 0]}
        scale={[0.045, 0.612, 0.045]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-76.372, -0.121, 132.561]}
        rotation={[0, -1.571, 0]}
        scale={[0.027, 0.369, 0.027]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-66.132, -0.121, 131.788]}
        rotation={[0, -1.571, 0]}
        scale={[0.049, 0.667, 0.049]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-62.871, -0.121, 125.93]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.044, 0.601, 0.044]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-73.586, -0.121, 104.004]}
        rotation={[0, -1.571, 0]}
        scale={[0.05, 0.68, 0.05]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-58.47, -0.121, 110.196]}
        rotation={[0, -1.571, 0]}
        scale={[0.05, 0.68, 0.05]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-66.353, -0.121, 109.213]}
        rotation={[0, -1.571, 0]}
        scale={[0.033, 0.448, 0.033]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-63.834, -0.121, 109.576]}
        rotation={[0, -1.571, 0]}
        scale={[0.035, 0.477, 0.035]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-63.346, -0.121, 104.624]}
        rotation={[0, -1.571, 0]}
        scale={[0.024, 0.334, 0.024]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[43.001, -0.121, 121.75]}
        rotation={[0, -1.571, 0]}
        scale={[0.041, 0.559, 0.041]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[33.679, -0.121, 115.148]}
        rotation={[0, -1.571, 0]}
        scale={[0.051, 0.7, 0.051]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[34.864, -0.121, 126.913]}
        rotation={[0, -1.571, 0]}
        scale={[0.019, 0.257, 0.019]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[14.444, -0.121, 115.482]}
        rotation={[0, -1.571, 0]}
        scale={[0.014, 0.195, 0.014]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[16.963, -0.121, 129.775]}
        rotation={[0, -1.571, 0]}
        scale={[0.015, 0.201, 0.015]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[12.576, -0.121, 125.52]}
        rotation={[0, -1.571, 0]}
        scale={[0.043, 0.596, 0.043]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[29.767, -0.121, 132.895]}
        rotation={[0, -1.571, 0]}
        scale={[0.027, 0.37, 0.027]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[28.804, -0.121, 131.168]}
        rotation={[0, -1.571, 0]}
        scale={[0.036, 0.5, 0.036]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[12.576, -0.121, 90.693]}
        rotation={[0, -1.571, 0]}
        scale={[0.018, 0.248, 0.018]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[22.802, -0.121, 106.427]}
        rotation={[0, -1.571, 0]}
        scale={[0.015, 0.209, 0.015]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[23.928, -0.121, 104.004]}
        rotation={[0, -1.571, 0]}
        scale={[0.015, 0.202, 0.015]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-10.41, -0.121, 121.34]}
        rotation={[0, -1.571, 0]}
        scale={[0.023, 0.31, 0.023]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-5.756, -0.121, 121.75]}
        rotation={[0, -1.571, 0]}
        scale={[0.024, 0.327, 0.024]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-6.719, -0.121, 115.148]}
        rotation={[0, -1.571, 0]}
        scale={[0.029, 0.4, 0.029]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-6.927, -0.121, 125.52]}
        rotation={[0, -1.571, 0]}
        scale={[0.017, 0.231, 0.017]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-32.224, 1.559, 125.93]}
        rotation={[0, -1.571, 0]}
        scale={[0.048, 0.653, 0.048]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-28.312, 1.527, 126.989]}
        rotation={[0, -1.571, 0]}
        scale={[0.016, 0.22, 0.016]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-21.554, 1.559, 123.43]}
        rotation={[0, -1.571, 0]}
        scale={[0.019, 0.263, 0.019]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-18.99, 0.48, 125.233]}
        rotation={[0, -1.571, 0]}
        scale={[0.034, 0.464, 0.034]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-32.491, -0.121, 93.556]}
        rotation={[0, -1.571, 0]}
        scale={[0.025, 0.339, 0.025]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-26.43, -0.121, 110.196]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.045, 0.611, 0.045]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-23.169, -0.265, 109.909]}
        rotation={[0, -1.571, 0]}
        scale={[0.023, 0.318, 0.023]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-30.401, -0.121, 109.576]}
        rotation={[0, -1.571, 0]}
        scale={[0.029, 0.397, 0.029]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-18.768, 1.559, 110.196]}
        rotation={[0, -1.571, 0]}
        scale={[0.015, 0.212, 0.015]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-18.99, 1.559, 105.034]}
        rotation={[0, -1.571, 0]}
        scale={[0.027, 0.376, 0.027]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-8.809, -0.121, 177.139]}
        rotation={[0, -1.571, 0]}
        scale={[0.048, 0.652, 0.048]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-6.231, -0.121, 176.366]}
        rotation={[0, -1.571, 0]}
        scale={[0.034, 0.472, 0.034]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-9.238, -0.121, 171.9]}
        rotation={[0, -1.571, 0]}
        scale={[0.049, 0.674, 0.049]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[5.818, -0.121, 172.96]}
        rotation={[0, -1.571, 0]}
        scale={[0.018, 0.241, 0.018]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[9.789, -0.121, 175.669]}
        rotation={[0, -1.571, 0]}
        scale={[0.051, 0.698, 0.051]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[2.603, -0.121, 174.686]}
        rotation={[0, -1.571, 0]}
        scale={[0.043, 0.594, 0.043]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-26.222, -0.121, 162.512]}
        rotation={[0, -1.571, 0]}
        scale={[0.043, 0.592, 0.043]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-27.126, -0.121, 162.435]}
        rotation={[0, -1.571, 0]}
        scale={[0.022, 0.306, 0.022]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-30.831, -0.121, 163.542]}
        rotation={[0, -1.571, 0]}
        scale={[0.045, 0.616, 0.045]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-26.222, -0.121, 177.139]}
        rotation={[0, -1.571, 0]}
        scale={[0.043, 0.585, 0.043]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-30.609, -0.121, 171.49]}
        rotation={[0, -1.571, 0]}
        scale={[0.035, 0.484, 0.035]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-30.134, -0.121, 137.074]}
        rotation={[0, -1.571, 0]}
        scale={[0.037, 0.51, 0.037]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-32.491, -0.121, 154.85]}
        rotation={[0, -1.571, 0]}
        scale={[0.023, 0.32, 0.023]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-30.609, -0.121, 149.201]}
        rotation={[0, -1.571, 0]}
        scale={[0.047, 0.649, 0.047]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-15.507, -0.121, 155.184]}
        rotation={[0, -1.571, 0]}
        scale={[0.018, 0.252, 0.018]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-22.043, -0.121, 145.795]}
        rotation={[0, -1.571, 0]}
        scale={[0.032, 0.439, 0.032]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-20.858, -0.121, 149.201]}
        rotation={[0, -1.571, 0]}
        scale={[0.049, 0.666, 0.049]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[43.001, -0.121, 164.935]}
        rotation={[0, -1.571, 0]}
        scale={[0.017, 0.231, 0.017]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[33.679, -0.121, 159.726]}
        rotation={[0, -1.571, 0]}
        scale={[0.019, 0.265, 0.019]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[50.884, -0.121, 174.276]}
        rotation={[0, -1.571, 0]}
        scale={[0.017, 0.235, 0.017]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[47.18, -0.121, 169.114]}
        rotation={[0, -1.571, 0]}
        scale={[0.024, 0.328, 0.024]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[17.659, -0.121, 172.96]}
        rotation={[0, -1.571, 0]}
        scale={[0.05, 0.689, 0.05]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[13.272, -0.121, 168.704]}
        rotation={[0, -1.571, 0]}
        scale={[0.015, 0.21, 0.015]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[13.747, -0.121, 169.114]}
        rotation={[0, -1.571, 0]}
        scale={[0.046, 0.627, 0.046]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[15.57, -0.121, 143.009]}
        rotation={[0, -1.571, 0]}
        scale={[0.028, 0.386, 0.028]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[11.879, -0.121, 152.684]}
        rotation={[0, -1.571, 0]}
        scale={[0.033, 0.448, 0.033]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[15.837, -0.121, 155.184]}
        rotation={[0, -1.571, 0]}
        scale={[0.027, 0.366, 0.027]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[22.535, -0.121, 146.492]}
        rotation={[0, -1.571, 0]}
        scale={[0.038, 0.527, 0.038]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-96.779, 1.357, 119.251]}
        rotation={[0, -1.571, 0]}
        scale={[0.035, 0.487, 0.035]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-94.214, -0.121, 130.109]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.03, 0.407, 0.03]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-91.695, -0.121, 132.561]}
        rotation={[0, -1.571, 0]}
        scale={[0.033, 0.453, 0.033]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-98.869, -0.121, 128.306]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.027, 0.374, 0.027]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-99.787, -0.121, 132.198]}
        rotation={[0, -1.571, 0]}
        scale={[0.026, 0.351, 0.026]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-99.357, -0.121, 122.81]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.027, 0.371, 0.027]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-118.371, 1.559, 115.768]}
        rotation={[0, -1.571, 0]}
        scale={[0.03, 0.417, 0.03]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-105.359, -0.121, 128.716]}
        rotation={[0, -1.571, 0]}
        scale={[0.034, 0.461, 0.034]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-104.233, -0.121, 131.865]}
        rotation={[0, -1.571, 0]}
        scale={[0.04, 0.542, 0.04]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-106.53, -0.121, 131.788]}
        rotation={[0, -1.571, 0]}
        scale={[0.04, 0.543, 0.04]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-113.021, -1.512, 98.069]}
        rotation={[0, -1.571, 0]}
        scale={[0.02, 0.276, 0.02]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-118.163, -1.185, 98.431]}
        rotation={[0, -1.571, 0]}
        scale={[0.021, 0.282, 0.021]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-121.157, -4.721, 89.3]}
        rotation={[0, -1.571, 0]}
        scale={[0.014, 0.191, 0.014]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-122.075, -2.995, 93.193]}
        rotation={[0, -1.571, 0]}
        scale={[0.02, 0.276, 0.02]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-122.342, -0.121, 109.576]}
        rotation={[0, -1.571, 0]}
        scale={[0.043, 0.591, 0.043]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-119.068, -0.121, 110.196]}
        rotation={[0, -1.571, 0]}
        scale={[0.032, 0.434, 0.032]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-100.054, -0.121, 160.422]}
        rotation={[0, -1.571, 0]}
        scale={[0.038, 0.526, 0.038]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-93.993, -0.121, 172.883]}
        rotation={[0, -1.571, 0]}
        scale={[0.022, 0.306, 0.022]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-121.379, -0.121, 141.253]}
        rotation={[0, -1.571, 0]}
        scale={[0.041, 0.565, 0.041]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-122.342, -0.121, 133.954]}
        rotation={[0, -1.571, 0]}
        scale={[0.025, 0.343, 0.025]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-112.103, -0.121, 154.774]}
        rotation={[0, -1.571, 0]}
        scale={[0.042, 0.575, 0.042]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-120.682, -0.121, 154.487]}
        rotation={[0, -1.571, 0]}
        scale={[0.046, 0.629, 0.046]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-119.556, -0.121, 147.885]}
        rotation={[0, -1.571, 0]}
        scale={[0.03, 0.408, 0.03]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-107.923, -0.121, 153.381]}
        rotation={[0, -1.571, 0]}
        scale={[0.015, 0.202, 0.015]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-76.105, -0.121, 169.114]}
        rotation={[0, -1.571, 0]}
        scale={[0.034, 0.462, 0.034]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-63.138, -0.121, 175.746]}
        rotation={[0, -1.571, 0]}
        scale={[0.043, 0.592, 0.043]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-70.311, -0.121, 154.077]}
        rotation={[0, -1.571, 0]}
        scale={[0.029, 0.403, 0.029]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-69.139, -0.121, 153.094]}
        rotation={[0, -1.571, 0]}
        scale={[0.047, 0.64, 0.047]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-92.392, -0.121, 32.261]}
        rotation={[0, -1.571, 0]}
        scale={[0.046, 0.627, 0.046]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-98.869, -0.121, 39.15]}
        rotation={[0, -1.571, 0]}
        scale={[0.033, 0.455, 0.033]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-113.021, -0.121, 42.347]}
        rotation={[0, -1.571, 0]}
        scale={[0.036, 0.49, 0.036]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-117.467, -0.121, 43.406]}
        rotation={[0, -1.571, 0]}
        scale={[0.021, 0.287, 0.021]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-109.316, -0.121, 40.543]}
        rotation={[0, -1.571, 0]}
        scale={[0.026, 0.363, 0.026]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-115.11, -0.121, 17.968]}
        rotation={[0, -1.571, 0]}
        scale={[0.042, 0.579, 0.042]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-120.253, -0.121, 15.545]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.044, 0.603, 0.044]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-102.351, -0.121, 20.344]}
        rotation={[0, -1.571, 0]}
        scale={[0.044, 0.601, 0.044]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-110.234, -0.121, 18.665]}
        rotation={[0, -1.571, 0]}
        scale={[0.045, 0.619, 0.045]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-108.412, -0.121, 15.545]}
        rotation={[0, -1.571, 0]}
        scale={[0.039, 0.534, 0.039]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-93.993, -3.935, 75.37]}
        rotation={[0, -1.571, 0]}
        scale={[0.046, 0.633, 0.046]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-96.304, -4.796, 77.173]}
        rotation={[0, -1.571, 0]}
        scale={[0.017, 0.231, 0.017]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-81.247, -5.015, 87.984]}
        rotation={[0, -1.571, 0]}
        scale={[0.03, 0.409, 0.03]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-82.848, -5.215, 86.514]}
        rotation={[0, -1.571, 0]}
        scale={[0.04, 0.555, 0.04]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-83.766, -4.998, 88.317]}
        rotation={[0, -1.571, 0]}
        scale={[0.028, 0.387, 0.028]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-118.163, -4.967, 76.839]}
        rotation={[0, -1.571, 0]}
        scale={[0.017, 0.233, 0.017]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-119.068, -1.832, 69.798]}
        rotation={[0, -1.571, 0]}
        scale={[0.017, 0.227, 0.017]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-110.931, -5.218, 79.262]}
        rotation={[0, -1.571, 0]}
        scale={[0.05, 0.69, 0.05]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-118.86, -0.121, 53.157]}
        rotation={[0, -1.571, 0]}
        scale={[0.036, 0.493, 0.036]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-121.157, -0.121, 46.116]}
        rotation={[0, -1.571, 0]}
        scale={[0.026, 0.353, 0.026]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-115.11, -0.233, 65.332]}
        rotation={[0, -1.571, 0]}
        scale={[0.031, 0.42, 0.031]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-102.143, -0.183, 65.695]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.045, 0.622, 0.045]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-110.71, -0.279, 65.618]}
        rotation={[0, -1.571, 0]}
        scale={[0.048, 0.662, 0.048]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-54.512, -5.205, 72.994]}
        rotation={[0, -1.571, 0]}
        scale={[0.048, 0.66, 0.048]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-53.386, -2.562, 85.197]}
        rotation={[0, -1.571, 0]}
        scale={[0.048, 0.654, 0.048]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-36.878, -0.332, 87.211]}
        rotation={[0, -1.571, 0]}
        scale={[0.051, 0.698, 0.051]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-39.885, -0.427, 82.745]}
        rotation={[0, -1.571, 0]}
        scale={[0.025, 0.339, 0.025]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-74.282, -5.218, 75.446]}
        rotation={[0, -1.571, 0]}
        scale={[0.021, 0.29, 0.021]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-68.221, -0.132, 53.081]}
        rotation={[0, -1.571, 0]}
        scale={[0.028, 0.391, 0.028]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-75.408, -1.679, 66.028]}
        rotation={[0, -1.571, 0]}
        scale={[0.036, 0.5, 0.036]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-3.244, -0.505, 32.051]}
        rotation={[0, -1.571, 0]}
        scale={[0.017, 0.228, 0.017]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-2.054, -0.211, 30.707]}
        rotation={[0, -1.571, 0]}
        scale={[0.05, 0.689, 0.05]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-10.631, -0.121, 34.685]}
        rotation={[0, -1.571, 0]}
        scale={[0.044, 0.603, 0.044]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[1.044, 1.156, 41.909]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.027, 0.373, 0.027]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[2.152, 1.46, 37.731]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.031, 0.42, 0.031]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-25.258, -4.34, 43.74]}
        rotation={[0, -1.571, 0]}
        scale={[0.036, 0.488, 0.036]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-16.471, -0.488, 42.709]}
        rotation={[0, -1.571, 0]}
        scale={[0.035, 0.48, 0.035]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-15.285, -0.253, 41.936]}
        rotation={[0, -1.571, 0]}
        scale={[0.028, 0.39, 0.028]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-12.024, -0.121, 43.043]}
        rotation={[0, -1.571, 0]}
        scale={[0.023, 0.312, 0.023]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-21.346, -4.046, 33.655]}
        rotation={[0, -1.571, 0]}
        scale={[0.042, 0.581, 0.042]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-27.126, -5.218, 5.717]}
        rotation={[0, -1.571, 0]}
        scale={[0.031, 0.423, 0.031]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-8.542, -0.498, 74.387]}
        rotation={[0, -1.571, 0]}
        scale={[0.043, 0.583, 0.043]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-7.416, -0.299, 76.839]}
        rotation={[0, -1.571, 0]}
        scale={[0.017, 0.239, 0.017]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-8.32, 1.549, 68.404]}
        rotation={[0, -1.571, 0]}
        scale={[0.024, 0.335, 0.024]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-10.631, 0.251, 86.228]}
        rotation={[0, -1.571, 0]}
        scale={[0.043, 0.588, 0.043]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[9.301, -0.121, 87.984]}
        rotation={[0, -1.571, 0]}
        scale={[0.03, 0.416, 0.03]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[0.735, -0.121, 78.852]}
        rotation={[0, -1.571, 0]}
        scale={[0.046, 0.636, 0.046]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-27.348, -0.121, 73.69]}
        rotation={[0, -1.571, 0]}
        scale={[0.049, 0.667, 0.049]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-26.222, -0.219, 84.501]}
        rotation={[0, -1.571, 0]}
        scale={[0.019, 0.255, 0.019]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-25.733, 0.093, 85.121]}
        rotation={[0, -1.571, 0]}
        scale={[0.041, 0.561, 0.041]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-24.562, 1.011, 87.621]}
        rotation={[0, -1.571, 0]}
        scale={[0.024, 0.323, 0.024]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-33.187, -0.121, 87.984]}
        rotation={[0, -1.571, 0]}
        scale={[0.02, 0.274, 0.02]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-28.519, -0.114, 87.907]}
        rotation={[0, -1.571, 0]}
        scale={[0.044, 0.599, 0.044]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-14.81, 1.559, 88.317]}
        rotation={[0, -1.571, 0]}
        scale={[0.046, 0.637, 0.046]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-25.525, -3.162, 54.55]}
        rotation={[0, -1.571, 0]}
        scale={[0.018, 0.245, 0.018]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-25.037, -0.248, 65.618]}
        rotation={[0, -1.571, 0]}
        scale={[0.037, 0.512, 0.037]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-27.348, -0.771, 65.332]}
        rotation={[0, -1.571, 0]}
        scale={[0.048, 0.654, 0.048]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-33.187, -4.238, 60.819]}
        rotation={[0, -1.571, 0]}
        scale={[0.029, 0.394, 0.029]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-28.519, -2.891, 59.35]}
        rotation={[0, -1.571, 0]}
        scale={[0.034, 0.462, 0.034]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[36.732, -0.121, 75.083]}
        rotation={[0, -1.571, 0]}
        scale={[0.018, 0.242, 0.018]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[51.789, -0.121, 84.501]}
        rotation={[0, -1.571, 0]}
        scale={[0.016, 0.226, 0.016]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[17.451, -0.121, 86.514]}
        rotation={[0, -1.571, 0]}
        scale={[0.034, 0.462, 0.034]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[11.658, -0.121, 84.138]}
        rotation={[0, -1.571, 0]}
        scale={[0.015, 0.205, 0.015]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[11.39, -0.121, 79.625]}
        rotation={[0, -1.571, 0]}
        scale={[0.043, 0.584, 0.043]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[23.023, -0.121, 80.942]}
        rotation={[0, -1.571, 0]}
        scale={[0.047, 0.646, 0.047]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[20.712, -0.121, 54.884]}
        rotation={[0, -1.571, 0]}
        scale={[0.029, 0.397, 0.029]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[22.535, -0.121, 60.819]}
        rotation={[0, -1.571, 0]}
        scale={[0.042, 0.569, 0.042]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-2.143, 0.242, 53.291]}
        rotation={[0, -1.571, 0]}
        scale={[0.044, 0.606, 0.044]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-10.631, 0.981, 60.456]}
        rotation={[0, -1.571, 0]}
        scale={[0.042, 0.581, 0.042]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-0.296, 2.758, 57.314]}
        rotation={[0, -1.571, 0]}
        scale={[0.023, 0.311, 0.023]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-9.017, -0.777, 7.11]}
        rotation={[0, -1.571, 0]}
        scale={[0.044, 0.606, 0.044]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-2.969, -0.121, 18.665]}
        rotation={[0, -1.571, 0]}
        scale={[0.022, 0.302, 0.022]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-3.933, -0.121, 21.117]}
        rotation={[0, -1.571, 0]}
        scale={[0.014, 0.191, 0.014]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-54.291, -1.971, 48.902]}
        rotation={[0, -1.571, 0]}
        scale={[0.039, 0.538, 0.039]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-48.244, -5.218, 62.546]}
        rotation={[0, -1.571, 0]}
        scale={[0.043, 0.583, 0.043]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-49.207, -5.218, 61.516]}
        rotation={[0, -1.571, 0]}
        scale={[0.027, 0.366, 0.027]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-54.987, -5.218, 63.529]}
        rotation={[0, -1.571, 0]}
        scale={[0.022, 0.302, 0.022]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-94.911, -0.121, 54.884]}
        rotation={[0, -1.571, 0]}
        scale={[0.041, 0.562, 0.041]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-97.268, -0.121, 48.282]}
        rotation={[0, -1.571, 0]}
        scale={[0.045, 0.62, 0.045]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-93.993, -0.121, 6.414]}
        rotation={[0, -1.571, 0]}
        scale={[0.027, 0.367, 0.027]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-90.732, -0.121, 8.913]}
        rotation={[0, -1.571, 0]}
        scale={[0.032, 0.436, 0.032]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-97.268, -0.121, 21.117]}
        rotation={[0, -1.571, 0]}
        scale={[0.032, 0.445, 0.032]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-80.759, -0.121, 21.041]}
        rotation={[0, -1.571, 0]}
        scale={[0.015, 0.209, 0.015]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-52.423, -0.121, 142.646]}
        rotation={[0, -1.571, 0]}
        scale={[0.035, 0.484, 0.035]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-49.207, -0.121, 153.457]}
        rotation={[0, -1.571, 0]}
        scale={[0.023, 0.321, 0.023]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-42.45, -0.121, 146.415]}
        rotation={[0, -1.571, 0]}
        scale={[0.035, 0.479, 0.035]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-98.393, -0.121, 143.343]}
        rotation={[0, -1.571, 0]}
        scale={[0.031, 0.427, 0.031]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-99.357, -0.121, 153.457]}
        rotation={[0, -1.571, 0]}
        scale={[0.046, 0.635, 0.046]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-98.172, -3.554, 93.479]}
        rotation={[0, -1.571, 0]}
        scale={[0.033, 0.447, 0.033]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[37.429, -0.121, 155.184]}
        rotation={[0, -1.571, 0]}
        scale={[0.038, 0.527, 0.038]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-6.023, -0.121, 138.133]}
        rotation={[0, -1.571, 0]}
        scale={[0.039, 0.538, 0.039]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-2.052, -0.121, 97.659]}
        rotation={[0, -1.571, 0]}
        scale={[0.042, 0.57, 0.042]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-5.756, -0.121, 105.034]}
        rotation={[0, -1.571, 0]}
        scale={[0.04, 0.546, 0.04]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[6.515, -0.121, 108.879]}
        rotation={[0, -1.571, 0]}
        scale={[0.016, 0.217, 0.016]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[2.128, -0.121, 101.141]}
        rotation={[0, -1.571, 0]}
        scale={[0.031, 0.424, 0.031]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[33.946, -0.121, 99.462]}
        rotation={[0, -1.571, 0]}
        scale={[0.029, 0.397, 0.029]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-49.904, -1.493, 96.342]}
        rotation={[0, -1.571, 0]}
        scale={[0.034, 0.47, 0.034]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-53.594, -1.493, 98.355]}
        rotation={[0, -1.571, 0]}
        scale={[0.023, 0.321, 0.023]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-51.03, -1.493, 93.193]}
        rotation={[0, -1.571, 0]}
        scale={[0.047, 0.641, 0.047]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-49.904, -0.121, 108.879]}
        rotation={[0, -1.571, 0]}
        scale={[0.024, 0.325, 0.024]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-37.574, -0.746, 106.017]}
        rotation={[0, -1.571, 0]}
        scale={[0.019, 0.257, 0.019]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-48.94, -0.121, 10.306]}
        rotation={[0, -1.571, 0]}
        scale={[0.027, 0.373, 0.027]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-54.083, -0.121, 1.614]}
        rotation={[0, -1.571, 0]}
        scale={[0.023, 0.32, 0.023]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-52.201, -0.121, 2.235]}
        rotation={[0, -1.571, 0]}
        scale={[0.039, 0.531, 0.039]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-48.244, -0.207, 18.665]}
        rotation={[0, -1.571, 0]}
        scale={[0.025, 0.336, 0.025]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-51.993, -0.121, 14.152]}
        rotation={[0, -1.571, 0]}
        scale={[0.042, 0.569, 0.042]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[39.043, -0.121, 15.469]}
        rotation={[0, -1.571, 0]}
        scale={[0.019, 0.266, 0.019]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[36.732, -0.121, 15.182]}
        rotation={[0, -1.571, 0]}
        scale={[0.014, 0.193, 0.014]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[53.182, -0.121, 20.421]}
        rotation={[0, -1.571, 0]}
        scale={[0.016, 0.217, 0.016]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[53.671, -0.121, 21.041]}
        rotation={[0, -1.571, 0]}
        scale={[0.021, 0.289, 0.021]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[45.787, -0.121, 14.485]}
        rotation={[0, -1.571, 0]}
        scale={[0.031, 0.43, 0.031]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-36.67, -0.746, 104.7]}
        rotation={[0, -1.571, 0]}
        scale={[0.017, 0.231, 0.017]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-48.719, -1.459, 104.624]}
        rotation={[0, -1.571, 0]}
        scale={[0.031, 0.422, 0.031]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[42.305, -0.121, 93.193]}
        rotation={[0, -1.571, 0]}
        scale={[0.018, 0.248, 0.018]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[5.818, -0.121, 99.824]}
        rotation={[0, -1.571, 0]}
        scale={[0.022, 0.304, 0.022]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-2.052, -0.121, 92.086]}
        rotation={[0, -1.571, 0]}
        scale={[0.041, 0.565, 0.041]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-2.969, -0.121, 149.611]}
        rotation={[0, -1.571, 0]}
        scale={[0.045, 0.618, 0.045]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[42.038, -0.121, 136.74]}
        rotation={[0, -1.571, 0]}
        scale={[0.015, 0.203, 0.015]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-93.993, -4.721, 90.693]}
        rotation={[0, -1.571, 0]}
        scale={[0.027, 0.365, 0.027]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-94.214, -3.691, 93.193]}
        rotation={[0, -1.571, 0]}
        scale={[0.042, 0.58, 0.042]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-92.392, -0.121, 135.347]}
        rotation={[0, -1.571, 0]}
        scale={[0.018, 0.248, 0.018]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-79.366, -0.121, 14.075]}
        rotation={[0, -1.571, 0]}
        scale={[0.019, 0.264, 0.019]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-92.821, -0.121, 4.038]}
        rotation={[0, -1.571, 0]}
        scale={[0.031, 0.423, 0.031]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-91.695, -0.121, 58.729]}
        rotation={[0, -1.571, 0]}
        scale={[0.015, 0.201, 0.015]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-48.719, -1.775, 44.723]}
        rotation={[0, -1.571, 0]}
        scale={[0.018, 0.242, 0.018]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[6.091, 0.059, 11.026]}
        rotation={[0, -1.571, 0]}
        scale={[0.048, 0.656, 0.048]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-5.326, -0.122, 0.221]}
        rotation={[0, -1.571, 0]}
        scale={[0.035, 0.485, 0.035]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-4.838, -0.121, 47.509]}
        rotation={[0, -1.571, 0]}
        scale={[0.03, 0.408, 0.03]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[40.912, -0.121, 57.67]}
        rotation={[0, -1.571, 0]}
        scale={[0.036, 0.497, 0.036]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[16.963, -0.121, 56.64]}
        rotation={[0, -1.571, 0]}
        scale={[0.047, 0.649, 0.047]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[42.526, -0.121, 70.494]}
        rotation={[0, -1.571, 0]}
        scale={[0.045, 0.618, 0.045]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[42.305, -0.121, 71.601]}
        rotation={[0, -1.571, 0]}
        scale={[0.042, 0.58, 0.042]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-24.829, -1.323, 60.122]}
        rotation={[0, -1.571, 0]}
        scale={[0.05, 0.681, 0.05]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-25.037, 0.007, 79.549]}
        rotation={[0, -1.571, 0]}
        scale={[0.04, 0.551, 0.04]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-0.451, -0.121, 71.267]}
        rotation={[0, -1.571, 0]}
        scale={[0.035, 0.486, 0.035]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-15.982, -3.394, 11.986]}
        rotation={[0, -1.571, 0]}
        scale={[0.05, 0.691, 0.05]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-24.562, -5.218, 2.645]}
        rotation={[0, -1.571, 0]}
        scale={[0.019, 0.262, 0.019]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-27.615, -5.218, 23.903]}
        rotation={[0, -1.571, 0]}
        scale={[0.031, 0.426, 0.031]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-22.947, -4.763, 26.613]}
        rotation={[0, -1.571, 0]}
        scale={[0.014, 0.191, 0.014]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-57.995, -4.353, 58.367]}
        rotation={[0, -1.571, 0]}
        scale={[0.017, 0.235, 0.017]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-72.193, -5.218, 77.536]}
        rotation={[0, -1.571, 0]}
        scale={[0.048, 0.662, 0.048]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-38.271, -0.427, 78.852]}
        rotation={[0, -1.571, 0]}
        scale={[0.017, 0.226, 0.017]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-49.637, -1.604, 82.048]}
        rotation={[0, -1.571, 0]}
        scale={[0.02, 0.273, 0.02]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-116.77, -0.121, 55.247]}
        rotation={[0, -1.571, 0]}
        scale={[0.032, 0.441, 0.032]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-114.889, -5.218, 82.335]}
        rotation={[0, -1.571, 0]}
        scale={[0.018, 0.249, 0.018]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-79.587, -5.218, 81.352]}
        rotation={[0, -1.571, 0]}
        scale={[0.029, 0.391, 0.029]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-93.088, -5.218, 82.411]}
        rotation={[0, -1.571, 0]}
        scale={[0.018, 0.249, 0.018]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-102.351, -0.121, 14.772]}
        rotation={[0, -1.571, 0]}
        scale={[0.03, 0.41, 0.03]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-112.324, -0.121, 37.471]}
        rotation={[0, -1.571, 0]}
        scale={[0.049, 0.675, 0.049]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-115.377, -0.121, 23.903]}
        rotation={[0, -1.571, 0]}
        scale={[0.047, 0.646, 0.047]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-93.993, -0.121, 34.971]}
        rotation={[0, -1.571, 0]}
        scale={[0.032, 0.441, 0.032]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-92.821, -0.121, 26.326]}
        rotation={[0, -1.571, 0]}
        scale={[0.016, 0.22, 0.016]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-70.8, -0.121, 135.347]}
        rotation={[0, -1.571, 0]}
        scale={[0.037, 0.506, 0.037]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-69.614, -0.121, 135.271]}
        rotation={[0, -1.571, 0]}
        scale={[0.024, 0.322, 0.024]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-38.492, -0.121, 168.418]}
        rotation={[0, -1.571, 0]}
        scale={[0.018, 0.243, 0.018]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-37.366, -0.121, 171.567]}
        rotation={[0, -1.571, 0]}
        scale={[0.026, 0.363, 0.026]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-44.54, -0.121, 171.49]}
        rotation={[0, -1.571, 0]}
        scale={[0.038, 0.515, 0.038]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-115.807, -0.121, 148.218]}
        rotation={[0, -1.571, 0]}
        scale={[0.036, 0.488, 0.036]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-105.626, -0.121, 167.387]}
        rotation={[0, -1.571, 0]}
        scale={[0.037, 0.504, 0.037]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-103.744, -0.121, 171.49]}
        rotation={[0, -1.571, 0]}
        scale={[0.047, 0.642, 0.047]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-116.503, -0.121, 169.811]}
        rotation={[0, -1.571, 0]}
        scale={[0.025, 0.35, 0.025]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-93.088, -0.121, 156.94]}
        rotation={[0, -1.571, 0]}
        scale={[0.028, 0.389, 0.028]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-114.889, -0.722, 101.141]}
        rotation={[0, -1.571, 0]}
        scale={[0.045, 0.614, 0.045]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-116.503, -2.995, 93.193]}
        rotation={[0, -1.571, 0]}
        scale={[0.034, 0.472, 0.034]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-115.377, 1.443, 115.148]}
        rotation={[0, -1.571, 0]}
        scale={[0.051, 0.694, 0.051]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[18.148, -0.121, 138.057]}
        rotation={[0, -1.571, 0]}
        scale={[0.022, 0.3, 0.022]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-27.188, 0.698, 100.31]}
        rotation={[0, -1.571, 0]}
        scale={[0.022, 0.303, 0.022]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-27.615, -0.121, 104.004]}
        rotation={[0, -1.571, 0]}
        scale={[0.039, 0.528, 0.039]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-45.236, 0.179, 126.913]}
        rotation={[0, -1.571, 0]}
        scale={[0.021, 0.289, 0.021]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-57.995, -0.121, 15.182]}
        rotation={[0, -1.571, 0]}
        scale={[0.02, 0.271, 0.02]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-60.352, -0.121, 36.441]}
        rotation={[0, -1.571, 0]}
        scale={[0.049, 0.667, 0.049]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-36.878, -5.214, 37.061]}
        rotation={[0, -1.571, 0]}
        scale={[0.023, 0.32, 0.023]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-49.637, -0.356, 35.381]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.022, 0.296, 0.022]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[16.963, 0.894, 13.455]}
        rotation={[0, -1.571, 0]}
        scale={[0.037, 0.505, 0.037]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[28.596, -0.121, 32.882]}
        rotation={[0, -1.571, 0]}
        scale={[0.047, 0.648, 0.047]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[17.23, 0.48, 36.078]}
        rotation={[0, -1.571, 0]}
        scale={[0.041, 0.556, 0.041]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[39.948, -0.121, 36.441]}
        rotation={[0, -1.571, 0]}
        scale={[0.021, 0.282, 0.021]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[28.596, -0.121, 3.628]}
        rotation={[0, -1.571, 0]}
        scale={[0.025, 0.34, 0.025]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-60.781, -0.121, 25.63]}
        rotation={[0, -1.571, 0]}
        scale={[0.042, 0.575, 0.042]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-59.655, -0.121, 1.614]}
        rotation={[0, -1.571, 0]}
        scale={[0.042, 0.57, 0.042]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-59.167, -2.295, 90.693]}
        rotation={[0, -1.571, 0]}
        scale={[0.034, 0.464, 0.034]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[31.16, -0.121, 93.889]}
        rotation={[0, -1.571, 0]}
        scale={[0.037, 0.509, 0.037]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-16.471, 1.497, 90.77]}
        rotation={[0, -1.571, 0]}
        scale={[0.037, 0.506, 0.037]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-15.982, 1.227, 91.39]}
        rotation={[0, -1.571, 0]}
        scale={[0.025, 0.336, 0.025]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-16.203, -0.121, 134.288]}
        rotation={[0, -1.571, 0]}
        scale={[0.037, 0.509, 0.037]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[29.5, -0.121, 156.94]}
        rotation={[0, -1.571, 0]}
        scale={[0.022, 0.295, 0.022]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[33.471, -0.121, 160.346]}
        rotation={[0, -1.571, 0]}
        scale={[0.041, 0.569, 0.041]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[31.16, -0.121, 159.363]}
        rotation={[0, -1.571, 0]}
        scale={[0.039, 0.529, 0.039]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-102.84, 1.559, 114.451]}
        rotation={[0, -1.571, 0]}
        scale={[0.017, 0.232, 0.017]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-100.262, -3.554, 93.479]}
        rotation={[0, -1.571, 0]}
        scale={[0.019, 0.26, 0.019]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-80.98, -0.121, 157.97]}
        rotation={[0, -1.571, 0]}
        scale={[0.049, 0.673, 0.049]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-104.929, -0.121, 3.007]}
        rotation={[0, -1.571, 0]}
        scale={[0.049, 0.674, 0.049]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-35.485, -1.233, 70.494]}
        rotation={[0, -1.571, 0]}
        scale={[0.031, 0.428, 0.031]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-56.602, -5.218, 71.601]}
        rotation={[0, -1.571, 0]}
        scale={[0.049, 0.678, 0.049]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-61.048, -0.121, 44.102]}
        rotation={[0, -1.571, 0]}
        scale={[0.026, 0.363, 0.026]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-13.196, -2.916, 4.324]}
        rotation={[0, -1.571, 0]}
        scale={[0.021, 0.289, 0.021]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-16.203, 2.116, 68.118]}
        rotation={[0, -1.571, 0]}
        scale={[0.028, 0.385, 0.028]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[51.092, -0.121, 68.481]}
        rotation={[0, -1.571, 0]}
        scale={[0.035, 0.484, 0.035]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[33.471, -0.121, 48.902]}
        rotation={[0, -1.571, 0]}
        scale={[0.024, 0.329, 0.024]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[10.961, 1.559, 4.734]}
        rotation={[0, -1.571, 0]}
        scale={[0.018, 0.248, 0.018]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-81.944, -0.121, 45.495]}
        rotation={[0, -1.571, 0]}
        scale={[0.028, 0.383, 0.028]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-34.092, -0.121, 137.361]}
        rotation={[0, -1.571, 0]}
        scale={[0.047, 0.643, 0.047]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-80.284, -0.121, 138.467]}
        rotation={[0, -1.571, 0]}
        scale={[0.026, 0.359, 0.026]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-81.944, -4.441, 90.073]}
        rotation={[0, -1.571, 0]}
        scale={[0.027, 0.364, 0.027]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[50.884, -0.121, 137.361]}
        rotation={[0, -1.571, 0]}
        scale={[0.046, 0.626, 0.046]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[8.175, -0.121, 135.681]}
        rotation={[0, -1.571, 0]}
        scale={[0.02, 0.271, 0.02]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[5.818, -0.121, 134.651]}
        rotation={[0, -1.571, 0]}
        scale={[0.039, 0.533, 0.039]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-37.796, -1.782, 1.948]}
        rotation={[0, -1.571, 0]}
        scale={[0.043, 0.596, 0.043]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[7.7, -0.121, 92.086]}
        rotation={[0, -1.571, 0]}
        scale={[0.026, 0.358, 0.026]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-81.677, -3.679, 91.8]}
        rotation={[0, -1.571, 0]}
        scale={[0.048, 0.662, 0.048]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-81.944, -0.121, 2.311]}
        rotation={[0, -1.571, 0]}
        scale={[0.031, 0.429, 0.031]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[32.775, -0.121, 46.812]}
        rotation={[0, -1.571, 0]}
        scale={[0.037, 0.511, 0.037]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-14.114, -3.384, 0.555]}
        rotation={[0, -1.571, 0]}
        scale={[0.017, 0.233, 0.017]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-59.655, -5.218, 66.391]}
        rotation={[0, -1.571, 0]}
        scale={[0.033, 0.452, 0.033]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-80.759, -0.106, 111.589]}
        rotation={[0, -1.571, 0]}
        scale={[0.02, 0.28, 0.02]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-59.388, 0.006, 111.303]}
        rotation={[0, -1.571, 0]}
        scale={[0.023, 0.318, 0.023]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[29.5, -0.121, 10.669]}
        rotation={[0, -1.571, 0]}
        scale={[0.017, 0.228, 0.017]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-34.092, -5.218, 36.364]}
        rotation={[0, -1.571, 0]}
        scale={[0.049, 0.669, 0.049]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-69.836, -0.121, 22.844]}
        rotation={[0, -1.571, 0]}
        scale={[0.046, 0.627, 0.046]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-70.103, -0.121, 11.366]}
        rotation={[0, -1.571, 0]}
        scale={[0.028, 0.389, 0.028]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-69.614, -0.121, 125.52]}
        rotation={[0, -1.571, 0]}
        scale={[0.02, 0.279, 0.02]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-59.388, -0.121, 102.944]}
        rotation={[0, -1.571, 0]}
        scale={[0.018, 0.251, 0.018]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[9.997, -0.121, 169.477]}
        rotation={[0, -1.571, 0]}
        scale={[0.037, 0.503, 0.037]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-22.947, -0.121, 158.953]}
        rotation={[0, -1.571, 0]}
        scale={[0.023, 0.315, 0.023]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-25.955, -0.121, 170.507]}
        rotation={[0, -1.571, 0]}
        scale={[0.018, 0.241, 0.018]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[41.341, -0.121, 156.243]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.028, 0.386, 0.028]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-114.192, -0.121, 147.808]}
        rotation={[0, -1.571, 0]}
        scale={[0.027, 0.37, 0.027]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-81.677, -5.218, 77.869]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.014, 0.194, 0.014]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-112.591, -5.218, 80.322]}
        rotation={[0, -1.571, 0]}
        scale={[0.023, 0.312, 0.023]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-70.311, -5.218, 78.156]}
        rotation={[0, -1.571, 0]}
        scale={[0.047, 0.648, 0.047]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-14.81, -0.975, 33.292]}
        rotation={[0, -1.571, 0]}
        scale={[0.041, 0.564, 0.041]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-14.381, -0.795, 33.655]}
        rotation={[0, -1.571, 0]}
        scale={[0.03, 0.415, 0.03]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-22.947, -5.218, 2.931]}
        rotation={[0, -1.571, 0]}
        scale={[0.04, 0.553, 0.04]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[7.478, -0.121, 80.655]}
        rotation={[0, -1.571, 0]}
        scale={[0.036, 0.5, 0.036]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-15.078, -0.121, 55.943]}
        rotation={[0, -1.571, 0]}
        scale={[0.033, 0.457, 0.033]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[18.844, -0.121, 78.156]}
        rotation={[0, -1.571, 0]}
        scale={[0.032, 0.444, 0.032]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[18.623, -0.121, 47.919]}
        rotation={[0, -1.571, 0]}
        scale={[0.037, 0.514, 0.037]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[19.052, -0.121, 55.943]}
        rotation={[0, -1.571, 0]}
        scale={[0.034, 0.473, 0.034]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-3.45, 1.608, 58.691]}
        rotation={[0, -1.571, 0]}
        scale={[0.038, 0.52, 0.038]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-48.244, -0.121, 133.591]}
        rotation={[0, -1.571, 0]}
        scale={[0.022, 0.307, 0.022]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[43.431, -0.121, 136.044]}
        rotation={[0, -1.571, 0]}
        scale={[0.041, 0.561, 0.041]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[52.277, -0.121, 144.326]}
        rotation={[0, -1.571, 0]}
        scale={[0.046, 0.63, 0.046]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[41.608, -0.121, 0.555]}
        rotation={[0, -1.571, 0]}
        scale={[0.023, 0.31, 0.023]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[35.769, -0.121, 3.007]}
        rotation={[0, -1.571, 0]}
        scale={[0.037, 0.507, 0.037]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-42.45, -1.944, 16.165]}
        rotation={[0, -1.571, 0]}
        scale={[0.044, 0.602, 0.044]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[54.842, -0.121, 109.213]}
        rotation={[0, -1.571, 0]}
        scale={[0.018, 0.246, 0.018]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[54.575, -0.121, 108.879]}
        rotation={[0, -1.571, 0]}
        scale={[0.028, 0.389, 0.028]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[35.561, -0.121, 100.445]}
        rotation={[0, -1.571, 0]}
        scale={[0.031, 0.423, 0.031]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-9.238, -0.121, 134.288]}
        rotation={[0, -1.571, 0]}
        scale={[0.043, 0.59, 0.043]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[43.431, -0.121, 152.76]}
        rotation={[0, -1.571, 0]}
        scale={[0.04, 0.545, 0.04]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-84.242, -0.121, 102.534]}
        rotation={[0, -1.571, 0]}
        scale={[0.033, 0.456, 0.033]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-97.697, -1.858, 98.069]}
        rotation={[0, -1.571, 0]}
        scale={[0.047, 0.647, 0.047]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-95.875, -0.121, 152.76]}
        rotation={[0, -1.571, 0]}
        scale={[0.028, 0.384, 0.028]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-98.172, -0.121, 14.075]}
        rotation={[0, -1.571, 0]}
        scale={[0.042, 0.576, 0.042]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-92.821, -0.121, 61.849]}
        rotation={[0, -1.571, 0]}
        scale={[0.039, 0.538, 0.039]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-51.297, -5.218, 58.729]}
        rotation={[0, -1.571, 0]}
        scale={[0.025, 0.346, 0.025]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-53.594, -2.77, 50.295]}
        rotation={[0, -1.571, 0]}
        scale={[0.039, 0.53, 0.039]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-9.238, -0.166, 17.272]}
        rotation={[0, -1.571, 0]}
        scale={[0.042, 0.569, 0.042]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[1.639, 0.732, 64.302]}
        rotation={[0, -1.571, 0]}
        scale={[0.041, 0.564, 0.041]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[8.396, -0.121, 64.225]}
        rotation={[0, -1.571, 0]}
        scale={[0.042, 0.575, 0.042]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-6.452, 0.981, 58.367]}
        rotation={[0, -1.571, 0]}
        scale={[0.03, 0.412, 0.03]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-3.933, 1.559, 64.302]}
        rotation={[0, -1.571, 0]}
        scale={[0.032, 0.44, 0.032]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[36.257, -0.121, 55.867]}
        rotation={[0, -1.571, 0]}
        scale={[0.041, 0.566, 0.041]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[41.608, -0.121, 50.705]}
        rotation={[0, -1.571, 0]}
        scale={[0.047, 0.639, 0.047]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[23.928, -0.121, 58.729]}
        rotation={[0, -1.571, 0]}
        scale={[0.026, 0.357, 0.026]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[13.969, -0.121, 83.728]}
        rotation={[0, -1.571, 0]}
        scale={[0.041, 0.56, 0.041]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[22.105, -0.121, 86.924]}
        rotation={[0, -1.571, 0]}
        scale={[0.032, 0.439, 0.032]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-15.078, 1.559, 83.804]}
        rotation={[0, -1.571, 0]}
        scale={[0.026, 0.353, 0.026]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-30.609, -0.121, 83.728]}
        rotation={[0, -1.571, 0]}
        scale={[0.022, 0.295, 0.022]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-25.955, -0.121, 72.994]}
        rotation={[0, -1.571, 0]}
        scale={[0.032, 0.441, 0.032]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-23.436, -5.212, 19.724]}
        rotation={[0, -1.571, 0]}
        scale={[0.026, 0.351, 0.026]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-20.161, -2.624, 38.454]}
        rotation={[0, -1.571, 0]}
        scale={[0.045, 0.622, 0.045]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-19.686, -2.157, 39.56]}
        rotation={[0, -1.571, 0]}
        scale={[0.023, 0.311, 0.023]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[2.334, 1.509, 33.633]}
        rotation={[0, -1.571, 0]}
        scale={[0.016, 0.222, 0.016]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-73.097, -4.721, 86.514]}
        rotation={[0, -1.571, 0]}
        scale={[0.014, 0.191, 0.014]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-76.105, -3.665, 70.208]}
        rotation={[0, -1.571, 0]}
        scale={[0.021, 0.291, 0.021]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-76.372, -3.471, 69.874]}
        rotation={[0, -1.571, 0]}
        scale={[0.021, 0.293, 0.021]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-75.883, -1.772, 66.315]}
        rotation={[0, -1.571, 0]}
        scale={[0.038, 0.522, 0.038]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-50.333, -3.819, 75.78]}
        rotation={[0, -1.571, 0]}
        scale={[0.038, 0.526, 0.038]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-112.591, -5.212, 86.59]}
        rotation={[0, -1.571, 0]}
        scale={[0.032, 0.446, 0.032]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-116.978, -1.832, 69.798]}
        rotation={[0, -1.571, 0]}
        scale={[0.022, 0.304, 0.022]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-84.463, -5.218, 81.352]}
        rotation={[0, -1.571, 0]}
        scale={[0.021, 0.286, 0.021]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-89.606, -4.334, 75.446]}
        rotation={[0, -1.571, 0]}
        scale={[0.05, 0.69, 0.05]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-117.675, -0.121, 14.075]}
        rotation={[0, -1.571, 0]}
        scale={[0.033, 0.456, 0.033]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-120.682, -0.121, 3.341]}
        rotation={[0, -1.571, 0]}
        scale={[0.04, 0.553, 0.04]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-120.949, -0.121, 35.744]}
        rotation={[0, -1.571, 0]}
        scale={[0.023, 0.317, 0.023]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-84.242, -0.121, 36.364]}
        rotation={[0, -1.571, 0]}
        scale={[0.037, 0.509, 0.037]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-64.264, -0.121, 145.432]}
        rotation={[0, -1.571, 0]}
        scale={[0.037, 0.511, 0.037]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-73.586, -0.121, 147.885]}
        rotation={[0, -1.571, 0]}
        scale={[0.039, 0.534, 0.039]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-61.256, -0.121, 175.669]}
        rotation={[0, -1.571, 0]}
        scale={[0.044, 0.607, 0.044]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-69.836, -0.121, 164.935]}
        rotation={[0, -1.571, 0]}
        scale={[0.016, 0.221, 0.016]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-120.949, -0.121, 158.333]}
        rotation={[0, -1.571, 0]}
        scale={[0.05, 0.688, 0.05]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-119.764, -0.121, 161.739]}
        rotation={[0, -1.571, 0]}
        scale={[0.041, 0.564, 0.041]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-86.553, -0.121, 176.079]}
        rotation={[0, -1.571, 0]}
        scale={[0.026, 0.358, 0.026]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-117.467, -0.121, 103.307]}
        rotation={[0, -1.571, 0]}
        scale={[0.04, 0.551, 0.04]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-114.889, -0.121, 105.32]}
        rotation={[0, -1.571, 0]}
        scale={[0.016, 0.222, 0.016]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-112.324, -0.121, 130.805]}
        rotation={[0, -1.571, 0]}
        scale={[0.026, 0.356, 0.026]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-120.949, 1.559, 119.327]}
        rotation={[0, -1.571, 0]}
        scale={[0.034, 0.47, 0.034]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-89.814, 1.546, 119.251]}
        rotation={[0, -1.571, 0]}
        scale={[0.026, 0.363, 0.026]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[30.464, -0.121, 151.005]}
        rotation={[0, -1.571, 0]}
        scale={[0.044, 0.61, 0.044]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[15.57, -0.121, 163.905]}
        rotation={[0, -1.571, 0]}
        scale={[0.033, 0.457, 0.033]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-17.375, -0.121, 170.097]}
        rotation={[0, -1.571, 0]}
        scale={[0.032, 0.442, 0.032]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-14.81, -0.121, 173.293]}
        rotation={[0, -1.571, 0]}
        scale={[0.035, 0.48, 0.035]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-31.794, -0.121, 164.601]}
        rotation={[0, -1.571, 0]}
        scale={[0.031, 0.427, 0.031]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-25.037, -0.121, 164.525]}
        rotation={[0, -1.571, 0]}
        scale={[0.04, 0.551, 0.04]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-25.955, -0.121, 161.452]}
        rotation={[0, -1.571, 0]}
        scale={[0.025, 0.347, 0.025]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[1.639, -0.121, 167.387]}
        rotation={[0, -1.571, 0]}
        scale={[0.025, 0.337, 0.025]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-17.375, -0.109, 125.52]}
        rotation={[0, -1.571, 0]}
        scale={[0.044, 0.605, 0.044]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-25.955, -0.121, 131.502]}
        rotation={[0, -1.571, 0]}
        scale={[0.016, 0.217, 0.016]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[2.336, -0.121, 131.168]}
        rotation={[0, -1.571, 0]}
        scale={[0.024, 0.332, 0.024]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[21.63, -0.121, 108.106]}
        rotation={[0, -1.571, 0]}
        scale={[0.036, 0.493, 0.036]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[29.767, -0.121, 128.716]}
        rotation={[0, -1.571, 0]}
        scale={[0.033, 0.45, 0.033]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[18.356, -0.121, 131.168]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.022, 0.306, 0.022]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[19.541, -0.121, 128.306]}
        rotation={[0, -1.571, 0]}
        scale={[0.05, 0.682, 0.05]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[13.051, -0.121, 117.571]}
        rotation={[0, -1.571, 0]}
        scale={[0.023, 0.313, 0.023]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[35.072, -0.121, 122.113]}
        rotation={[0, -1.571, 0]}
        scale={[0.016, 0.215, 0.016]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[38.347, -0.121, 113.679]}
        rotation={[0, -1.571, 0]}
        scale={[0.047, 0.639, 0.047]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-75.408, -3.858, 89.71]}
        rotation={[0, -1.571, 0]}
        scale={[0.014, 0.196, 0.014]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-37.366, 1.195, 127.685]}
        rotation={[0, -1.571, 0]}
        scale={[0.047, 0.65, 0.047]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-45.236, -0.121, 130.395]}
        rotation={[0, -1.571, 0]}
        scale={[0.039, 0.532, 0.039]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-72.622, -0.121, 14.485]}
        rotation={[0, -1.571, 0]}
        scale={[0.027, 0.375, 0.027]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-53.386, -0.121, 39.227]}
        rotation={[0, -1.571, 0]}
        scale={[0.035, 0.483, 0.035]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-45.236, -2.422, 41.24]}
        rotation={[0, -1.571, 0]}
        scale={[0.022, 0.304, 0.022]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[29.767, -0.121, 27.719]}
        rotation={[0, -1.571, 0]}
        scale={[0.039, 0.536, 0.039]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-37.366, 1.235, 120.024]}
        rotation={[0, -1.571, 0]}
        scale={[0.042, 0.57, 0.042]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-61.953, -1.465, 92.086]}
        rotation={[0, -1.571, 0]}
        scale={[0.016, 0.219, 0.016]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[30.464, -0.121, 95.282]}
        rotation={[0, -1.571, 0]}
        scale={[0.016, 0.217, 0.016]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[2.336, -0.121, 159.029]}
        rotation={[0, -1.571, 0]}
        scale={[0.045, 0.619, 0.045]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-20.161, -0.121, 139.45]}
        rotation={[0, -1.571, 0]}
        scale={[0.032, 0.436, 0.032]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[47.18, -0.121, 159.363]}
        rotation={[0, -1.571, 0]}
        scale={[0.015, 0.209, 0.015]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[23.928, -0.121, 138.83]}
        rotation={[0, -1.571, 0]}
        scale={[0.031, 0.428, 0.031]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-83.545, -0.121, 158.953]}
        rotation={[0, -1.571, 0]}
        scale={[0.018, 0.244, 0.018]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-100.483, -0.121, 164.935]}
        rotation={[0, -1.571, 0]}
        scale={[0.019, 0.26, 0.019]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-109.805, -0.121, 142.313]}
        rotation={[0, -1.571, 0]}
        scale={[0.024, 0.329, 0.024]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-109.316, -0.121, 5.021]}
        rotation={[0, -1.571, 0]}
        scale={[0.021, 0.292, 0.021]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-103.966, -4.404, 75.78]}
        rotation={[0, -1.571, 0]}
        scale={[0.036, 0.49, 0.036]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-103.536, -2.942, 72.66]}
        rotation={[0, -1.571, 0]}
        scale={[0.033, 0.45, 0.033]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-36.878, -1.082, 71.887]}
        rotation={[0, -1.571, 0]}
        scale={[0.043, 0.586, 0.043]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-61.478, -5.218, 75.78]}
        rotation={[0, -1.571, 0]}
        scale={[0.015, 0.2, 0.015]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-20.65, 1.164, 74.75]}
        rotation={[0, -1.571, 0]}
        scale={[0.019, 0.256, 0.019]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-13.892, 1.164, 72.584]}
        rotation={[0, -1.571, 0]}
        scale={[0.019, 0.258, 0.019]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-20.383, -1.253, 52.794]}
        rotation={[0, -1.571, 0]}
        scale={[0.026, 0.355, 0.026]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[46.913, -0.121, 75.446]}
        rotation={[0, -1.571, 0]}
        scale={[0.043, 0.59, 0.043]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[52.974, -0.121, 53.081]}
        rotation={[0, -1.571, 0]}
        scale={[0.025, 0.337, 0.025]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-34.313, -5.218, 52.794]}
        rotation={[0, -1.571, 0]}
        scale={[0.048, 0.664, 0.048]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-81.944, -0.121, 50.371]}
        rotation={[0, -1.571, 0]}
        scale={[0.049, 0.674, 0.049]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-39.664, -0.121, 135.967]}
        rotation={[0, -1.571, 0]}
        scale={[0.047, 0.638, 0.047]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[5.389, -0.121, 137.074]}
        rotation={[0, -1.571, 0]}
        scale={[0.019, 0.263, 0.019]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-39.456, -0.672, 97.735]}
        rotation={[0, -1.571, 0]}
        scale={[0.045, 0.612, 0.045]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[46.705, -0.121, 2.235]}
        rotation={[0, -1.571, 0]}
        scale={[0.041, 0.556, 0.041]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[49.27, -0.121, 0.555]}
        rotation={[0, -1.571, 0]}
        scale={[0.031, 0.422, 0.031]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[9.997, -0.121, 94.252]}
        rotation={[0, -1.571, 0]}
        scale={[0.017, 0.229, 0.017]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-39.664, -0.121, 133.181]}
        rotation={[0, -1.571, 0]}
        scale={[0.024, 0.325, 0.024]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-83.766, -0.121, 50.705]}
        rotation={[0, -1.571, 0]}
        scale={[0.025, 0.344, 0.025]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[9.997, -0.121, 72.66]}
        rotation={[0, -1.571, 0]}
        scale={[0.044, 0.608, 0.044]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-17.375, -4.763, -0.552]}
        rotation={[0, -1.571, 0]}
        scale={[0.026, 0.353, 0.026]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-84.463, -0.121, 161.452]}
        rotation={[0, -1.571, 0]}
        scale={[0.05, 0.682, 0.05]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-84.73, 1.559, 117.238]}
        rotation={[0, -1.571, 0]}
        scale={[0.032, 0.439, 0.032]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-34.092, -5.218, 39.15]}
        rotation={[0, -1.571, 0]}
        scale={[0.031, 0.426, 0.031]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-72.622, -0.121, 22.844]}
        rotation={[0, -1.571, 0]}
        scale={[0.015, 0.212, 0.015]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[37.858, -0.121, 127.685]}
        rotation={[0, -1.571, 0]}
        scale={[0.05, 0.682, 0.05]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[21.63, -0.121, 94.176]}
        rotation={[0, -1.571, 0]}
        scale={[0.034, 0.472, 0.034]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[26.981, -0.121, 106.427]}
        rotation={[0, -1.571, 0]}
        scale={[0.044, 0.609, 0.044]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-29.008, -0.044, 89.377]}
        rotation={[0, -1.571, 0]}
        scale={[0.019, 0.261, 0.019]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-28.519, -0.121, 167.311]}
        rotation={[0, -1.571, 0]}
        scale={[0.034, 0.466, 0.034]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[15.837, -0.121, 155.88]}
        rotation={[0, -1.571, 0]}
        scale={[0.048, 0.656, 0.048]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[21.142, -0.121, 172.96]}
        rotation={[0, -1.571, 0]}
        scale={[0.027, 0.367, 0.027]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-117.675, -2.486, 94.176]}
        rotation={[0, -1.571, 0]}
        scale={[0.023, 0.31, 0.023]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-84.463, -0.121, 167.025]}
        rotation={[0, -1.571, 0]}
        scale={[0.05, 0.686, 0.05]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-118.163, -0.121, 161.119]}
        rotation={[0, -1.571, 0]}
        scale={[0.021, 0.285, 0.021]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-50.808, -0.121, 161.042]}
        rotation={[0, -1.571, 0]}
        scale={[0.014, 0.197, 0.014]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-61.478, -0.121, 145.432]}
        rotation={[0, -1.571, 0]}
        scale={[0.015, 0.212, 0.015]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-112.591, -0.121, 5.097]}
        rotation={[0, -1.571, 0]}
        scale={[0.047, 0.639, 0.047]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-117.675, -0.121, 11.289]}
        rotation={[0, -1.571, 0]}
        scale={[0.041, 0.558, 0.041]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-95.607, -0.521, 67.421]}
        rotation={[0, -1.571, 0]}
        scale={[0.022, 0.303, 0.022]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-73.586, -0.121, 55.247]}
        rotation={[0, -1.571, 0]}
        scale={[0.043, 0.588, 0.043]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-56.381, -5.183, 61.439]}
        rotation={[0, -1.571, 0]}
        scale={[0.02, 0.27, 0.02]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-5.76, -0.442, 33.858]}
        rotation={[0, -1.571, 0]}
        scale={[0.051, 0.695, 0.051]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-17.864, -3.52, 16.938]}
        rotation={[0, -1.571, 0]}
        scale={[0.021, 0.292, 0.021]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-28.519, -4.022, 55.867]}
        rotation={[0, -1.571, 0]}
        scale={[0.048, 0.655, 0.048]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[38.822, -0.121, 50.705]}
        rotation={[0, -1.571, 0]}
        scale={[0.038, 0.517, 0.038]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-0.573, 0.139, 50.422]}
        rotation={[0, -1.571, 0]}
        scale={[0.046, 0.632, 0.046]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[11.182, -0.121, 61.439]}
        rotation={[0, -1.571, 0]}
        scale={[0.031, 0.426, 0.031]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[5.391, -0.093, 11.708]}
        rotation={[0, -1.571, 0]}
        scale={[0.03, 0.405, 0.03]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-95.178, -0.121, 61.516]}
        rotation={[0, -1.571, 0]}
        scale={[0.034, 0.468, 0.034]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[10.486, -0.121, 150.594]}
        rotation={[0, -1.571, 0]}
        scale={[0.031, 0.432, 0.031]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-51.03, -0.121, 16.575]}
        rotation={[0, -1.571, 0]}
        scale={[0.05, 0.686, 0.05]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[38.555, -0.121, 11.366]}
        rotation={[0, -1.571, 0]}
        scale={[0.031, 0.421, 0.031]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-89.117, -0.121, 145.022]}
        rotation={[0, -1.571, 0]}
        scale={[0.036, 0.492, 0.036]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-22.472, 1.408, 78.566]}
        rotation={[0, -1.571, 0]}
        scale={[0.046, 0.632, 0.046]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-44.54, -1.104, 78.156]}
        rotation={[0, -1.571, 0]}
        scale={[0.032, 0.437, 0.032]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-100.483, -0.121, 145.432]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.045, 0.62, 0.045]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[44.127, -0.121, 111.665]}
        rotation={[0, -1.571, 0]}
        scale={[0.023, 0.315, 0.023]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-66.828, 1.357, 122.733]}
        rotation={[0, -1.571, 0]}
        scale={[0.034, 0.473, 0.034]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[32.553, -0.121, 22.147]}
        rotation={[0, -1.571, 0]}
        scale={[0.05, 0.691, 0.05]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-33.884, -0.121, 111.665]}
        rotation={[0, -1.571, 0]}
        scale={[0.021, 0.291, 0.021]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-100.262, -0.121, 156.167]}
        rotation={[0, -1.571, 0]}
        scale={[0.015, 0.201, 0.015]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[-56.602, -0.291, 45.133]}
        rotation={[0, -1.571, 0]}
        scale={[0.042, 0.583, 0.042]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.Tree}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle.geometry}
        material={nodes.Circle.material}
        position={[0.073, -0.51, 24.103]}
        scale={0.113}
      />
      <group position={[0.073, -0.178, 24.103]} scale={0.147}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_1.geometry}
          material={materials["tankco.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_2.geometry}
          material={materials["Material.001"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006_0.geometry}
        material={materials.Body}
        position={[-0.188, -0.387, 2.812]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.03, 0.002, 0.01]}
      />
    </group>
  );
}

useGLTF.preload("/models/tracks/chevreuse.glb");
