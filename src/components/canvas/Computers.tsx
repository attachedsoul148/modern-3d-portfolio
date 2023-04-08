import React, { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf') //*request for model

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width : 500px)')

    setIsMobile(mediaQuery.matches)

    const onMediaChangeHandler = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches)
    }

    mediaQuery.addEventListener('change', onMediaChangeHandler)

    return () => {
      mediaQuery.removeEventListener('change', onMediaChangeHandler)
    }
  }, [])

  return (
    <mesh>
      //!nessesary tag
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        pemubra={1} //*don't know what it is, but with it 3d looks slightly better
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        position={isMobile ? [0, -2.2, -1] : [0, -3, -1.5]} //*position relatively to page
        scale={isMobile ? 0.5 : 0.75} //*obviously scale
        rotation={[0, 0.13, -0.05]} //*initial rotation to own axises like you take the axis in your arm and move it
      />
      //!nessesary tag
    </mesh>
  )
}

const ComputerCanvas = () => {
  return (
    <Canvas
      frameloop="demand" //*if it is demand animation will work only when it needed, better for performance
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }} //*camera position relatively to object axises
      gl={{ preserveDrawingBuffer: true }}>
      //!necessary prop
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        //*camera makes the circles , this properties determine on which angle line of the globe
        //*must camera move
        <Computers />
      </Suspense>
      <Preload all />
      //!necessary tag with prop
    </Canvas>
  )
}

export default ComputerCanvas
