import { useEffect, useRef, useState } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import {
  PerspectiveCamera,
  WebGLRenderTarget,
  DoubleSide,
  NearestFilter,
  RGBAFormat,
} from "three";
import { useGameStore } from "../../../store/store";

const LayerShaderMaterial = {
  uniforms: {
    renderTargetTexture: { value: null },
    layerMask: { value: 1 },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D renderTargetTexture;
    uniform float layerMask;
    varying vec2 vUv;

    void main() {
        // Read depth as red channel
    vec4 roadColor = texture2D(renderTargetTexture, vUv);
    
    // Simply output the road color without applying any depth-related changes
    gl_FragColor = roadColor;
    }
  `,
};

export const RenderTargetExample = () => {
  const { scene, gl, camera } = useThree();
  const [renderTarget, setRenderTarget] = useState(null);
  const perspectiveCameraRef = useRef(null);
  const planeRef = useRef(null);
  const setRoaderRenderTarget = useGameStore((state) => state.setRoadRenderTarget);

  useEffect(() => {
    const aspect = gl.domElement.width / gl.domElement.height;
    const fov = 90; // Match the player's camera FOV

    // Create a PerspectiveCamera
    const perspectiveCamera = new PerspectiveCamera(fov, aspect, 0.1, 200);
    perspectiveCamera.layers.disable(0);
    perspectiveCamera.layers.enable(1);
    perspectiveCameraRef.current = perspectiveCamera;

    // Create a render target with depth buffer
    const renderTarget = new WebGLRenderTarget(1024, 1024, {
      format: RGBAFormat,
      minFilter: NearestFilter,
      magFilter: NearestFilter,
      generateMipmaps: false,
      depthBuffer: true,
    });

    setRenderTarget(renderTarget);
  }, [gl]);

  useFrame(() => {
    if (!renderTarget || !perspectiveCameraRef.current || !camera) return;

    // Sync with the player's camera
    perspectiveCameraRef.current.position.copy(camera.position);
    perspectiveCameraRef.current.quaternion.copy(camera.quaternion);
    perspectiveCameraRef.current.updateProjectionMatrix();


    gl.setRenderTarget(renderTarget);
    gl.render(scene, perspectiveCameraRef.current);
    gl.setRenderTarget(null);
    setRoaderRenderTarget(renderTarget.texture);

    // const {x, y, z } = useGameStore.getState().playerPosition;
    // planeRef.current.position.set(x, y+ 5 , z)
    // planeRef.current.lookAt(camera.position)
    // 
    // if (planeRef.current) {
    //   planeRef.current.material.uniforms.renderTargetTexture.value = renderTarget.texture;
      
    //   planeRef.current.material.needsUpdate = true;
    // }
  });

  return (
    <>
      {/* <mesh ref={planeRef} position={[0, 0, -5]}>
        <planeGeometry args={[3, 3]} />
        <shaderMaterial
          attach="material"
          args={[LayerShaderMaterial]}
          side={DoubleSide}
          depthWrite={false}
          transparent={true}
        />
      </mesh> */}
    </>
  );
};
