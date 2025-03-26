import { InstancedMesh2 } from '@three.ez/instanced-mesh';
import { extend, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import { PlaneGeometry, MeshPhongMaterial, DoubleSide, Vector3, Euler } from 'three';

extend({ InstancedMesh2 });

export const Skid = ({ bottomLeftWheelObject, bottomRightWheelObject }) => {
  const ref = useRef(null);
  const lifeTime = 50;
  const size = 0.25;
  const minDistance = 0.1; // Minimum distance to add a skid

  // Track previous positions, reset if not spinning
  const lastLeftPos = useRef(new Vector3());
  const lastRightPos = useRef(new Vector3());
  const wasSpinning = useRef(false); // Track if the wheel was spinning last frame

  const geometry = useMemo(() => new PlaneGeometry(size, size), [size]);
  const material = useMemo(() => new MeshPhongMaterial({ color: 0x5c5c5c, transparent: true, depthWrite: false, side: DoubleSide }), []);

  useFrame((state, delta) => {
    if (!ref.current || !bottomLeftWheelObject.current || !bottomRightWheelObject.current) return;

    const leftPos = bottomLeftWheelObject.current.getWorldPosition(new Vector3());
    const rightPos = bottomRightWheelObject.current.getWorldPosition(new Vector3());
    const rotationY = bottomLeftWheelObject.current.getWorldQuaternion(new Euler()).z;
    const isSpinning = bottomLeftWheelObject.current.isSpinning;

    if (isSpinning) {
      if (!wasSpinning.current) {
        lastLeftPos.current.copy(leftPos);
        lastRightPos.current.copy(rightPos);
      }

      const leftDistance = leftPos.distanceTo(lastLeftPos.current);
      const rightDistance = rightPos.distanceTo(lastRightPos.current);
      const maxDist = Math.max(leftDistance, rightDistance);

      if (maxDist > minDistance) {
        const steps = Math.ceil(maxDist / minDistance);
        for (let i = 0; i < steps; i++) {
          const factor = i / steps;
          const interpolatedLeft = lastLeftPos.current.clone().lerp(leftPos, factor);
          const interpolatedRight = lastRightPos.current.clone().lerp(rightPos, factor);

          ref.current.addInstances(2, (obj, index) => {
            obj.position.copy(index % 2 === 0 ? interpolatedLeft : interpolatedRight);
            obj.position.y -= 0.35;
            obj.rotateX(-Math.PI / 2);
            obj.rotateZ(rotationY);
            obj.currentTime = 0;
          });
        }
      }

      lastLeftPos.current.copy(leftPos);
      lastRightPos.current.copy(rightPos);
      wasSpinning.current = true;
    } else {
      wasSpinning.current = false;
    }


    ref.current.updateInstances((obj) => {
      obj.currentTime += delta;
      if (obj.currentTime >= lifeTime) obj.remove();
    });
  });

  return <instancedMesh2 ref={ref} args={[geometry, material, { createEntities: true }]} frustumCulled={false} />;
};
