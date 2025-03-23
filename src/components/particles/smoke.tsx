
import { Euler, Object3D, Vector3, Matrix4, DoubleSide, Quaternion, TextureLoader, BackSide } from 'three'
import { useRef, useLayoutEffect } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'





const e = new Euler()
const m = new Matrix4()
const o = new Object3D()
const v = new Vector3()
const q = new Quaternion()

// testing

export const Smoke =({exhaustRef}) => {
  const count = 500
  const opacity = 0.1
  const size = 0.2
  const smoke01 = useLoader(TextureLoader, '/smoke.png');


  const texture = smoke01;
  const ref = useRef(null);
  let index = 0
  let time = 0
  let i = 0
  useFrame((state,delta ) => {
    if(!exhaustRef.current || !ref.current) return

    const rotation = exhaustRef.current.rotation.y
    if (state.clock.getElapsedTime() - time > 0.02) {
      time = state.clock.getElapsedTime()
      setItemAt(ref.current, rotation, exhaustRef.current, index++);
      setItemAt(ref.current, rotation, exhaustRef.current, index++);
      
      if (index === count) index = 0
    } else {
      // Shrink old one
      for (i = 0; i < count; i++) {
        const direction = new Vector3(Math.sin(time * 6 + i * 10) , 2, 0);
        ref.current.getMatrixAt(i, m)
        m.decompose(o.position, q, v)
        // o.scale.setScalar(Math.max(0, v.x - 0.005))
        o.position.addScaledVector(direction, 0.01)
        o.updateMatrix()
        ref.current.setMatrixAt(i, o.matrix)
        ref.current.instanceMatrix.needsUpdate = true
      }
    }
  })

  useLayoutEffect(() => {
    if(ref.current){
      ref.current.geometry.rotateY(-Math.PI / 2)
      return () => {
        ref.current.geometry.rotateY(Math.PI / 2)
      }
    }
  })

  return (
    <instancedMesh frustumCulled={false} ref={ref} args={[undefined, undefined, count]}>
      <planeGeometry args={[size, size]} />
      <meshBasicMaterial color={0xffffff} transparent map={smoke01} opacity={1} depthWrite={false} side={DoubleSide} />
    </instancedMesh>
  )
}

function setItemAt(instances, rotation, body, index) {
  const randomOffset = (Math.random() - 0.5) * 0.3 ;
  const pos = body.getWorldPosition(v)
  o.rotation.set(0, rotation + Math.PI / 2, 0);
  
  // pos.y += randomOffset
  pos.z += randomOffset
  o.position.copy(pos);
  o.scale.setScalar(1)
  o.updateMatrix()
  instances.setMatrixAt(index, o.matrix)
  instances.instanceMatrix.needsUpdate = true
}
