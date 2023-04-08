import React from 'react'
import SectionHOC from '../hoc/hoc'
import { technologies } from '../constants'
import { BallCanvas } from './canvas'

const Tech = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-10">
      {technologies.map((tech) => (
        <div key={tech.name} className="w-28 h-28">
          <BallCanvas {...tech} />
        </div>
      ))}
    </div>
  )
}

export default SectionHOC(Tech, '#tech')
