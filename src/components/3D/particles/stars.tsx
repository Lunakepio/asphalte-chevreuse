import * as THREE from "three";
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import PropTypes from "prop-types";

const vertexShader = /* glsl */ `
void main() {
  gl_PointSize = 2.0;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = /* glsl */ `
void main() {
  gl_FragColor = vec4(1.0); // White
}
`;

export const Stars = ({
  count = 1000,
  distance = 1000,
}) => {
  const pointsRef = useRef();
  const geometry = useMemo(() => {
    const positions = [];

    const position = new THREE.Vector3();
    for (let i = 0; i < count; i++) {
      const theta = Math.acos(Math.random());
      const phi = 2 * Math.PI * Math.random();
      position.setFromSphericalCoords(distance, theta, phi);
      positions.push(position.x, position.y, position.z);
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3)
    );
    return geometry;
  }, [count, distance]);

  return (
    <points ref={pointsRef} geometry={geometry}>
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent
        depthWrite={false}
      />
    </points>
  );
};

Stars.propTypes = {
  count: PropTypes.number,
  distance: PropTypes.number,
};
