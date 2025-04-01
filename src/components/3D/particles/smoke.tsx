import { InstancedMesh2, createRadixSort } from '@three.ez/instanced-mesh';
import { extend, ThreeEvent, useFrame } from '@react-three/fiber';
import { useCallback, useEffect, useMemo, useRef } from 'react';
import { BoxGeometry,  MathUtils,  MeshPhongMaterial, OctahedronGeometry, Vector3 } from 'three';

extend({ InstancedMesh2 });

export const Smoke = ({ exhaustRef, vehicleRef }) => {
  const ref = useRef<InstancedMesh2>(null);
  const spawnTime = 0.03;
  const lifeTime = 1;
  const scaleMultiplier = 5;
  const speed = 3;
  const direction = new Vector3(0, 0.5, 0).normalize();
  const displacement = 0.1;
  const maxSpeedThreshold = 50;
  let time = 0;


  const geometry = useMemo(() => new OctahedronGeometry(0.1, 1), []);

  const material = useMemo(() => new MeshPhongMaterial({ emissive: 0xffffff, transparent: true, depthWrite: false }), []);

  useFrame((state, delta) => {
    if (!ref.current || ref.current.instancesCount >= 50 || !exhaustRef.current && !vehicleRef.current.state.currentVehicleSpeedKmHour) return;
    const kmh = Math.abs(vehicleRef.current.state.currentVehicleSpeedKmHour);
    const elapsedTime = state.clock.getElapsedTime();
    const interval = 0.4 - (Math.min(kmh, maxSpeedThreshold) / maxSpeedThreshold) * 0.25;

    const position = exhaustRef.current.getWorldPosition(new Vector3());
    if(elapsedTime - time > interval && kmh < 60){
      time = elapsedTime;
      ref.current.addInstances(1, (obj) => {
      obj.position.copy(position)
      obj.quaternion.random();
      obj.currentTime = 0;
    });
  }
    ref.current.updateInstances((obj) => {
      obj.currentTime += delta;
      obj.position.addScaledVector(direction, speed * delta)
      obj.scale.addScalar(scaleMultiplier * delta);
      obj.opacity = Math.max(0, lifeTime - obj.currentTime) * 0.8;
      
      if (obj.currentTime >= lifeTime + 1.5) {
        obj.remove();
        return;
      }

    })
  });

  return (
    <instancedMesh2
      ref={ref}
      args={[geometry, material, {createEntities: true}]}
      frustumCulled={false}
    />
  );
};

