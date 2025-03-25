import { InstancedMesh2, createRadixSort } from '@three.ez/instanced-mesh';
import { extend, ThreeEvent, useFrame } from '@react-three/fiber';
import { useCallback, useEffect, useMemo, useRef } from 'react';
import { BoxGeometry,  DoubleSide,  Euler,  MathUtils,  MeshPhongMaterial, PlaneGeometry, Vector3, Matrix4 } from 'three';

// add InstancedMesh2 to the jsx catalog i.e use it as a jsx component
extend({ InstancedMesh2 });

export const Skid = ({ bottomLeftWheelObject, bottomRightWheelObject }) => {
  const ref = useRef<InstancedMesh2>(null);
  const lifeTime = 25;
  const count = 500;
  const opacity = 1;
  const size = 0.25  ;
  let time = 0;


  const geometry = useMemo(() => new PlaneGeometry(size, size), [size]);

  const material = useMemo(() => new MeshPhongMaterial({ color: 0x5c5c5c, transparent: true, depthWrite: false, side: DoubleSide}), []);

  useFrame((state, delta) => {
    if (!ref.current || ref.current.instancesCount >= 100000 || !bottomLeftWheelObject.current || !bottomRightWheelObject.current) return;

    const leftPosition = bottomLeftWheelObject.current.getWorldPosition(new Vector3());
    const rightPosition = bottomRightWheelObject.current.getWorldPosition(new Vector3());
    const rotationY = bottomLeftWheelObject.current.getWorldQuaternion(new Euler()).y;
    const elapsedTime = state.clock.getElapsedTime();
    if(bottomLeftWheelObject.current && bottomRightWheelObject.current && ref.current && bottomLeftWheelObject.current.isSpinning){
      time = elapsedTime;
      ref.current.addInstances(2, (obj, index) => {
      obj.position.copy(index % 2 === 0 ? leftPosition : rightPosition)
      obj.position.y -= 0.35
      obj.rotateX(-Math.PI / 2)
      obj.rotateZ(rotationY)
      obj.currentTime = 0;
      console.log(obj.quaternion)
    });
  }
    ref.current.updateInstances((obj) => {
      obj.currentTime += delta;
      
      if (obj.currentTime >= lifeTime) {
        obj.remove();
        return;
      }

    })
  });

  useEffect(() => {
    if (!ref.current) return;
    ref.current.sortObjects = true;
    ref.current.customSort = createRadixSort(ref.current);
    // only compute the bvh on mount
    ref.current.computeBVH();
  }, []);

;

  return (
    <instancedMesh2
      ref={ref}
      args={[geometry, material, {createEntities: true}]}
      frustumCulled={false}
    />
  );
};

