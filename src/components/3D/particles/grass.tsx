import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { useMemo, useRef, useEffect } from "react";
import {
  BufferGeometry,
  Float32BufferAttribute,
  Vector3,
  DoubleSide,
  Vector2,
  MeshStandardMaterial,
  TextureLoader,
  MeshNormalMaterial
} from "three";
import { useGameStore } from "../../../store/store";
import CSM from "three-custom-shader-material";

export const Grass = () => {
  const { viewport } = useThree();
  const materialRef = useRef();
  const meshRef = useRef();

  useFrame(({ clock, size, camera}) => {
    if (materialRef.current) {
      materialRef.current.uniforms.time.value = clock.elapsedTime;
      materialRef.current.uniforms.viewport.value.set(size.width, size.height);
    }
    const renderTargetTexture = useGameStore.getState().roadRenderTarget;
    if (renderTargetTexture) {
      materialRef.current.uniforms.grassMask.value = renderTargetTexture;
      materialRef.current.uniforms.grassMask.needsUpdate = true;
    }
    const playerPosition = useGameStore.getState().playerPosition;
    const groundNormal = useGameStore.getState().groundNormal;
    if (!playerPosition) return;
    meshRef.current.position.x = playerPosition.x;
    meshRef.current.position.y = playerPosition.y - 1;
    meshRef.current.position.z = playerPosition.z;
    meshRef.current.quaternion.setFromUnitVectors(
      new Vector3(0, 1, 0),
      groundNormal
    );
    materialRef.current.uniforms.playerPosition.value.set(
      playerPosition.x,
      playerPosition.y,
      playerPosition.z
    );
  });

  const vertexShader = /* glsl */ `
    varying vec2 vUv;
    varying vec3 vPosition;
    uniform float time;
    uniform vec3 playerPosition;
    uniform float size;
    attribute vec3 bladeCenter;
    varying vec3 vBladeCenter;
    void main() {
      vUv = uv;
      vPosition = position;
      vBladeCenter = bladeCenter;
  
      vec3 localCenter = bladeCenter;
      vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  
      localCenter.xz = mod(localCenter.xz - playerPosition.xz, size) - size / 2.0;
  
      vec4 viewPosition = viewMatrix * modelPosition;
      vec3 finalPosition = localCenter + (position - bladeCenter);
  
      csm_Position = finalPosition;
  
      // csm_PositionRaw = modelViewMatrix * vec4(finalPosition, 0.);
  
      // csm_Normal = recalcNormals(csm_PositionRaw);
    }`;

  const fragmentShader = /* glsl */ `
    varying vec2 vUv;
    varying vec3 vPosition;
    uniform sampler2D grassMask;
    uniform vec3 playerPosition;
    uniform float size;
    varying vec3 vBladeCenter;
    uniform vec2 viewport;

    void main() {
      vec2 maskUv = gl_FragCoord.xy / viewport;

      vec4 maskColor = texture2D(grassMask, maskUv);

      float maskValue = maskColor.r;

      if (maskValue > 0.5) {
        discard;
      }

      vec3 color = vec3(0.0);
      color.g = max(0.0, vPosition.y); // Green intensity from Y
      csm_DiffuseColor = vec4(color, 1.0);
    }`;

  const size = 300;
  const count = 50000;

  useEffect(() => {
    if (materialRef.current) {
      materialRef.current.needsUpdate = true;
    }
  }, [vertexShader, fragmentShader]);

  const blades = useMemo(() => {
    const positions = [];
    const indices = [];
    const bladeCenters = [];

    for (let i = 0; i < count; i++) {
      const centerX = Math.random() * size - size / 2;
      const centerZ = Math.random() * size - size / 2;
      const centerY = 0;

      const center = [centerX, centerY, centerZ];

      const halfWidth = 0.3;
      const height = Math.random() + 1;

      const v1 = [centerX - halfWidth, centerY, centerZ];
      const v2 = [centerX + halfWidth, centerY, centerZ];
      const v3 = [centerX, centerY + height, centerZ];

      bladeCenters.push(...center, ...center, ...center);

      const baseIndex = positions.length / 3;
      positions.push(...v1, ...v2, ...v3);
      indices.push(baseIndex, baseIndex + 1, baseIndex + 2);
    }

    const geometry = new BufferGeometry();
    geometry.setAttribute("position", new Float32BufferAttribute(positions, 3));
    geometry.setAttribute(
      "bladeCenter",
      new Float32BufferAttribute(bladeCenters, 3)
    );
    geometry.setIndex(indices);
    geometry.computeVertexNormals();

    return geometry;
  }, [count, size]);

  const matcap = useLoader(TextureLoader, "/matcap.png");
  const StandardMaterial = useMemo(() => new MeshStandardMaterial({ map: matcap, roughness: 0.5, metalness: 0.5 }), [matcap]);

  
  return (
    <mesh ref={meshRef} geometry={blades} renderOrder={-1}>
      <CSM
        ref={materialRef}
        baseMaterial={StandardMaterial}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          time: { value: 0 },
          size: { value: size },
          playerPosition: { value: new Vector3() },
          grassMask: { value: null },
          viewport: { value: new Vector2(window.innerWidth, window.innerHeight) },
        }}
        depthWrite={false}
        transparent
        side={DoubleSide}
      />
    </mesh>
  );
};
