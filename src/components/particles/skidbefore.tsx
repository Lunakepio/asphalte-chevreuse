import { Euler, Object3D, Vector3, Matrix4, FrontSide } from 'three'
import { useRef, useLayoutEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { vec3 } from '@react-three/rapier'
import { useControls as useLeva } from "leva";





const e = new Euler()
const m = new Matrix4()
const o = new Object3D()
const v = new Vector3()



export function Skid({ bottomLeftWheelObject, bottomRightWheelObject }) {
  const ref = useRef(null);
  let index = 0
  const count = 500;
  const opacity = 1;
  const size = 0.35;

  const skidMesh = useLeva("skid", {
    color: "#5c5c5c",

  }, {
    collapsed: true,
  });
  useFrame(() => {
    if(!bottomLeftWheelObject.current && !bottomRightWheelObject.current) return;
    const rotation = bottomLeftWheelObject.current.getWorldQuaternion(e).y;
    if (bottomLeftWheelObject.current && bottomRightWheelObject.current && ref.current && bottomLeftWheelObject.current.isSpinning) {
      setItemAt(ref.current, rotation, bottomLeftWheelObject.current, index++);
      setItemAt(ref.current, rotation, bottomRightWheelObject.current, index++);
      
      if (index === count) index = 0
    }
  })

  useLayoutEffect(() => {
    if(ref.current){
      ref.current.geometry.rotateX(-Math.PI / 2)
      return () => {
        ref.current.geometry.rotateX(Math.PI / 2)
      }
    }
  })

  return (
    <instancedMesh frustumCulled={false} ref={ref} args={[undefined, undefined, count]}>
      <planeGeometry args={[size, size]} />
      <meshPhongMaterial roughness={1} color={skidMesh.color} side={FrontSide} transparent opacity={opacity} />
    </instancedMesh>
  )
}

function setItemAt(instances, rotation, body, index) {
  o.position.copy(body.getWorldPosition(v));
  o.rotation.set(0, rotation, 0);
  o.scale.setScalar(1)
  o.updateMatrix()
  instances.setMatrixAt(index, o.matrix)
  instances.instanceMatrix.needsUpdate = true
}
