import { BackSide, Color } from "three";

export const EnvironmentSphere = () => {

  const color1 = '#001522 ';
  const color2 = '#000010';

  // Convert hex colors to RGB
  const hexToRgb = (hex) => {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return [r / 255, g / 255, b / 255];
  };

  const [r1, g1, b1] = hexToRgb(color1);
  const [r2, g2, b2] = hexToRgb(color2);

  const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  const fragmentShader = `
    uniform float time;
    uniform vec2 resolution;
    varying vec2 vUv;
    uniform vec3 color1;
    uniform vec3 color2;
    void main() {
      vec2 uv = vUv;
      float t = smoothstep(0.0, 1.0, uv.y);
      vec3 color = mix(color1, color2, t);
      gl_FragColor = vec4(color, 1.0);
    }
  `;

  return (
    <mesh
      position={[0, 0, 0]}
      scale={[1000, 1000, 1000]}
      rotation={[0, 0, 0]}
    >
      <sphereGeometry args={[1, 32, 32]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          color1: { value: new Color(r1, g1, b1) },
          color2: { value: new Color(r2, g2, b2) }
        }}
        side={BackSide}
      />
    </mesh>
  );
};
