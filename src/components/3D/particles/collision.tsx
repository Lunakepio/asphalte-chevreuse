import { InstancedMesh2 } from "@three.ez/instanced-mesh";
import { extend, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import {
  CircleGeometry,
  DoubleSide,
  MathUtils,
  MeshPhongMaterial,
  Vector3,
} from "three";
import { useGameStore } from "../../../store/store";

extend({ InstancedMesh2 });

export const Collision = () => {
  const ref = useRef<InstancedMesh2>(null);

  const lifeTime = 0.3;
  const scaleMultiplier = -1;
  const speed = 20;

  const geometry = useMemo(() => new CircleGeometry(0.1, 1), []);
  const material = useMemo(
    () =>
      new MeshPhongMaterial({
        emissive: 0xffd700,
        emissiveIntensity: 100,
        transparent: true,
        depthWrite: false,
        side: DoubleSide,
      }),
    []
  );
  const setCollisionInstance = useGameStore(
    (state) => state.setCollisionInstance
  );
  useEffect(() => {
    if (ref.current) {
      setCollisionInstance(ref.current);
    }
  }, [setCollisionInstance]);

  useFrame((state, delta) => {
    if (!ref.current) return;

    const elapsedTime = state.clock.getElapsedTime();

    ref.current.updateInstances((obj) => {
      obj.currentTime += delta;
      obj.position.addScaledVector(obj.direction, speed * delta); // Update position based on direction
      obj.scale.addScalar(scaleMultiplier * delta);
      obj.opacity = Math.max(0, lifeTime - obj.currentTime) * 0.8;

      if (obj.currentTime >= lifeTime + 1.5) {
        obj.remove();
        return;
      }
    });
  });

  return (
    <instancedMesh2
      ref={ref}
      args={[geometry, material, { createEntities: true }]}
      // frustumCulled={false}
    />
  );
};

export const addInstancesToCollision = (instancedMesh, position) => {
  const speed = 30;
  const scaleMultiplier = -3;

  instancedMesh.addInstances(8, (obj) => {
    obj.position.copy(position);

    // Generate a random direction
    const randomDirection = new Vector3(
      MathUtils.randFloatSpread(1),
      MathUtils.randFloatSpread(1),
      MathUtils.randFloatSpread(1)
    ).normalize();

    obj.scale.set(-1, -1, -1)
    obj.quaternion.setFromUnitVectors(new Vector3(-1, -1, -1), randomDirection);
    obj.currentTime = 0;
    obj.direction = randomDirection;
    obj.speed = speed;
    obj.scaleMultiplier = scaleMultiplier;
  });
};
