import { useProgress, Html } from '@react-three/drei'
import React from 'react'

const Loader = () => {
  const { progress } = useProgress()
  //!nessesary tag
  //*progress.toFixed make number with fixed amount of decimals after the coma
  return (
    <Html position={[-1.5, 0, 0]}>
      <span>
        <p className="mt-[40px] text-xl font-bold">{progress.toFixed(2)}%</p>
      </span>
    </Html>
  )
}

export default Loader
