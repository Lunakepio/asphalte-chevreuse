import * as THREE from "three";
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { AdditiveBlending, MathUtils } from "three";
import PropTypes from "prop-types";

const vertexShader = /* glsl */ `
attribute float size;
attribute vec3 direction;
attribute float timeOffset;
attribute float blinkingSpeed;

uniform float uTime;

varying vec3 vColor;
varying float vTimeOffset;
varying float vBlinkingSpeed;
varying float vDepth;

void main() {
    vColor = color; // Pass color to fragment shader
    vTimeOffset = timeOffset;
    vBlinkingSpeed = blinkingSpeed;

    vec3 animatedPosition = position + direction * sin((uTime) + timeOffset);
    vec4 mvPosition = modelViewMatrix * vec4(animatedPosition, 1.0);
    vDepth = -mvPosition.z; // Pass depth to fragment shader

    gl_PointSize = size;
    gl_Position = projectionMatrix * mvPosition;
}
`;

const fragmentShader = /* glsl */ `
varying vec3 vColor;
varying float vTimeOffset;
varying float vBlinkingSpeed;
varying float vDepth;

uniform float uTime;
uniform float uMaxOpacity;
uniform vec3 fogColor;
uniform float fogNear;
uniform float fogFar;

void main() {
    float timeDifference = max(0.0, uTime - vTimeOffset);
    float delayedMaxOpacity = smoothstep(0.0, 2.0, timeDifference) * uMaxOpacity;

    float opacity = 0.5 + 0.3 * sin((uTime * vBlinkingSpeed) + vTimeOffset); // Reduce the amplitude
    opacity *= delayedMaxOpacity;

    // Scale down the color to reduce brightness
    vec3 scaledColor = vColor * 0.2;

    // Calculate fog factor
    float fogFactor = smoothstep(fogNear, fogFar, vDepth);
    vec3 foggedColor = mix(scaledColor, fogColor, fogFactor);

    // Reduce opacity based on fog factor
    opacity *= (1.0 - fogFactor);

    gl_FragColor = vec4(foggedColor, opacity);
}
`;

export const Particles = ({ fogColor = [0.2, 0.2, 0.2], fogNear = 50, fogFar = 150 }) => {
  const pointsRef = useRef();
  const materialRef = useRef();

  const particleCount = 5000;
  const colorsRGB = [
    [238, 175, 74],
    [239, 198, 117],
    [174, 132, 86],
    [255, 222, 189],
    [255, 175, 108],
  ];
  const baseSize = 1;
  const maxZDistance = 5;
  const distanceMultiplier = 3000;

  const particles = useMemo(() => {
    const positions = [];
    const colors = [];
    const sizes = [];
    const directions = [];
    const timeOffsets = [];
    const blinkingSpeeds = [];

    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * distanceMultiplier;
      const y = (Math.random() - 0.5) * 100;
      const z = (Math.random() - 0.5) * distanceMultiplier;
      positions.push(x, y, z);

      colors.push(...colorsRGB[Math.floor(Math.random() * colorsRGB.length)]);

      const size = baseSize;
      sizes.push(size);
      directions.push(
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2
      );

      blinkingSpeeds.push(Math.random());
      timeOffsets.push(3 + Math.random() * 5);
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
    geometry.setAttribute("size", new THREE.Float32BufferAttribute(sizes, 1));
    geometry.setAttribute("direction", new THREE.Float32BufferAttribute(directions, 3));
    geometry.setAttribute("timeOffset", new THREE.Float32BufferAttribute(timeOffsets, 1));
    geometry.setAttribute("blinkingSpeed", new THREE.Float32BufferAttribute(blinkingSpeeds, 1));

    return geometry;
  }, [particleCount, colorsRGB, baseSize, distanceMultiplier]);

  let currentOpacity = 0.0;
  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
      currentOpacity = MathUtils.lerp(currentOpacity, 1.0, 0.01);
      materialRef.current.uniforms.uMaxOpacity.value = currentOpacity;
    }
  });

  return (
    <points ref={pointsRef} geometry={particles}>
      <shaderMaterial
        ref={materialRef}
        attach="material"
        uniforms={{
          uTime: { value: 0 },
          uMaxOpacity: { value: 0 },
          fogColor: { value: new THREE.Color(...fogColor) },
          fogNear: { value: fogNear },
          fogFar: { value: fogFar },
        }}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        vertexColors
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

Particles.propTypes = {
  fogColor: PropTypes.arrayOf(PropTypes.number),
  fogNear: PropTypes.number,
  fogFar: PropTypes.number,
};
