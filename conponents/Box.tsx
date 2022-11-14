import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

export const Box = () => {

  const box = useRef<THREE.Mesh>(null!)

  useFrame( ( _, delta ) => {

    box.current.rotation.x += delta
    box.current.rotation.z += delta

  })


  return (
    <mesh ref={box}>
      <boxGeometry/>
      <meshBasicMaterial/>
    </mesh>
  )
}
