import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, Decal, Float, useTexture } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Ball: React.FC<{
  icon: string
}> = ({ icon }) => {
  const [decal] = useTexture([icon])

  return (
    //@ts-ignore
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#fff8eb" polygonOffset polygonOffsetFactor={-5} flatShading />
        <Decal map={decal} position={[0, 0, 1]} rotation={[Math.PI * 2, 0, 6.25]} flatShading />
      </mesh>
    </Float>
  )
}

interface BallProps {
  name: string
  icon: string
}
const BallCanvas: React.FC<BallProps> = ({ name, icon }) => {
  return (
    <Canvas gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball icon={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}
export default BallCanvas
