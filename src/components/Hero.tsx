import React from 'react'
import { ComputersCanvas } from './canvas'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative h-screen w-full mx-auto overflow-y-scroll scrollbar-hide">
      <div className="absolute paddingX top-[120px] max-w-7xl mx-auto inset-0 flex flex-row gap-5">
        <div className="flex flex-col items-center">
          <div className="w-5 h-5 bg-[#915eff] rounded-full" />

          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className="heroHeadText">
            Hi I'm <span className="text-[#915eff]">Pavlo</span>
          </h1>
          <p className="heroSubText">
            I develop frond-end applications <br className="sm:block hidden" /> with React, NextJS
            and a lot of JS libraries.
          </p>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center">
        <a href="#about" className="z-10">
          <div
            className="relative flex items-start justify-center border-4 border-secondary w-[35px] h-[64px] 
            rounded-full">
            <motion.div
              animate={{ y: [5, 40, 5] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="absolute bg-secondary rounded-full w-3 h-3"
            />
          </div>
        </a>
      </div>

      <ComputersCanvas />
    </section>
  )
}

export default Hero
