import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import SectionHOC from '../hoc/hoc'
import 'react-vertical-timeline-component/style.min.css'
import { textVariant } from '../utils/motion'
import { experiences } from '../constants'

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant(0)} id="work">
        <h3 className="sectionSubText">What I have done so far</h3>

        <h2 className="sectionHeadText">Work Experince.</h2>
      </motion.div>

      <div className="mt-20">
        <VerticalTimeline>
          {experiences.map((exp) => (
            <ExperienceCard key={exp.title} {...exp} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

interface ExpProps {
  title: string
  company_name: string
  icon: string
  iconBg: string
  date: string
  points: string[]
}
const ExperienceCard: React.FC<ExpProps> = ({
  date,
  icon,
  title,
  company_name,
  points,
  iconBg,
}) => {
  return (
    <VerticalTimelineElement
      date={date}
      contentStyle={{ background: '#1d1836' }}
      iconStyle={{ background: iconBg }}
      contentArrowStyle={{ borderRight: '7px solid #232631' }}
      icon={
        <div className="flex items-center justify-center h-full w-full">
          <img src={icon} alt={company_name} className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
        </div>
      }>
      <div className="p-2">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-secondary text-[16px]" style={{ margin: 0 }}>
          {company_name}
        </p>

        <ul className="list-disc flex flex-col space-y-2 mt-5 ml-5">
          {points.map((point, i) => (
            <li key={i} className="tracking-wider text-white-100 xs:text-[14px] text-[10px]">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  )
}

export default SectionHOC(Experience, 'work')
