import { InstancedMesh2 } from '@three.ez/instanced-mesh';
import { extend, ThreeEvent, useFrame } from '@react-three/fiber';
import { useCallback, useEffect, useMemo, useRef } from 'react';
import { BoxGeometry,  MeshLambertMaterial, OctahedronGeometry, Vector3 } from 'three';

// add InstancedMesh2 to the jsx catalog i.e use it as a jsx component
extend({ InstancedMesh2 });

export const Smoke = ({ exhaustRef }) => {
  const ref = useRef<InstancedMesh2>(null);
  const spawnTime = 0.03;
  const lifeTime = 1;
  const scaleMultiplier = 3;
  const speed = 3;
  const direction = new Vector3(0, 0.2, 1).normalize();
  const displacement = 0.1;

  const geometry = useMemo(() => new OctahedronGeometry(0.03, 1), []);

  const material = useMemo(() => new MeshLambertMaterial({ emissive: 0x999999, transparent: true, depthWrite: false }), []);

  useFrame((state, delta) => {
    // early return
    if (!ref.current || ref.current.instancesCount >= 200000 || !exhaustRef.current) return;

    const position = exhaustRef.current.getWorldPosition(new Vector3());
    // add 100 instances every frame
    ref.current.addInstances(2, (obj) => {
      obj.position
        .setX(position.x)
        .setY(position.y)
        .setZ(position.z);
      obj.quaternion.random();

    });
    // ref.current.updateInstances((obj) => {
    //   // obj.position.addScaledVector(direction, speed * delta)
    //   // obj.scale.addScalar(scaleMultiplier * delta);
    //   // obj.opacity -= delta * 1;
    // })
  });

  useEffect(() => {
    if (!ref.current) return;

    // only compute the bvh on mount
    ref.current.computeBVH();
  }, []);

;

  return (
    <instancedMesh2
      ref={ref}
      args={[geometry, material]}
      frustumCulled={false}
    />
  );
};

