import {Canvas} from '@react-three/fiber'
import {Box} from '../conponents/Box'

export default function Home() {
  return (
    <div className='w-screen h-screen relative'>
      <Canvas className='w-full h-full'>
        <Box/> 
      </Canvas>
    </div>
  )
}
