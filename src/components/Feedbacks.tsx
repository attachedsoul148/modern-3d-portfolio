import React from 'react'
import SectionHOC from '../hoc/hoc'
import { fadeIn, textVariant } from '../utils/motion'
import { motion } from 'framer-motion'
import { testimonials } from '../constants'

const Feedbacks = () => {
  return (
    <div className="bg-black-100 rounded-[20px]">
      <div className="rounded-[20px]">
        <motion.div
          variants={textVariant(0)}
          className="bg-tertiary min-h-[300px] padding rounded-[20px]">
          <h3 className="sectionSubText">What others say</h3>

          <h2 className="sectionHeadText">Testimonials.</h2>
        </motion.div>

        <div
          className="xl:grid-cols-3 md:grid-cols-2 grid-cols-1 grid gap-10 -mt-40
       place-items-center padding">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.name} index={index} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  )
}

interface TestimonialProps {
  index: number
  testimonial: string
  name: string
  designation: string
  company: string
  image: string
}
const TestimonialCard: React.FC<TestimonialProps> = ({
  index,
  testimonial,
  image,
  name,
  company,
  designation,
}) => {
  return (
    <motion.div
      variants={fadeIn('', 'spring', index * 0.5, 0.75)}
      className="bg-black-200 p-10 rounded-2xl h-full z-10 flex flex-col">
      <p className="font-black text-[48px]">"</p>

      <div className="flex flex-col flex-1 justify-between">
        <p className="text-[18px] leading-[30px] tracking-wider">{testimonial}</p>

        <div className="flex items-center mt-8 justify-between">
          <div className="flex flex-col gap-1 flex-1">
            <p className="text-white font-medium text-[16px]">
              <span className="blue-text-gradient">@</span> {name}
            </p>
            <p className="text-secondary text-[12px]">
              {designation} of {company}
            </p>
          </div>

          <img src={image} alt="" className="w-10 h-10 rounded-full object-cover" />
        </div>
      </div>
    </motion.div>
  )
}
export default SectionHOC(Feedbacks, 'feedbacks')
