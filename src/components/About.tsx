import React from 'react'
import { services } from '../constants'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import SectionHOC from '../hoc/hoc'
import { fadeIn, textVariant } from '../utils/motion'

const About = () => {
  return (
    <>
      <motion.div variants={textVariant(0)}>
        <h3 className="sectionSubText">Introduction</h3>

        <h2 className="sectionHeadText">Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 0.1)}
        className="text-secondary leading-[30px] mt-4 max-w-3xl">
        Developing and maintaining web applications using React.js and other related
        technologies.Collaborating with cross-functional teams including designers, product
        managers, and other developers to create high-quality products.Implementing responsive
        design and ensuring cross-browser compatibility.
      </motion.p>

      <div
        className="lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 grid-cols-1 grid gap-10 mt-20
       place-items-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} service={service} />
        ))}
      </div>
    </>
  )
}

interface ServiceProps {
  service: {
    title: string
    icon: string
  }
  index: number
}
const ServiceCard: React.FC<ServiceProps> = ({ service, index }) => {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speen: 450,
      }}>
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="green-pink-gradient shadow-card flex-1 rounded-[20px] cursor-pointer p-[2px]
         w-[250px] h-[250px]">
        <div
          className="flex flex-col items-center justify-evenly w-full h-full
         bg-tertiary rounded-[20px] py-5 px-12">
          <img src={service.icon} alt="service" className="w-16 h-16 object-contain" />
          <p className="text-[17px] font-bold text-center">{service.title}</p>
        </div>
      </motion.div>
    </Tilt>
  )
}

export default SectionHOC(About, 'about')
