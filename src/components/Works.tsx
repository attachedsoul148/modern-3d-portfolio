import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { projects } from '../constants'
import SectionHOC from '../hoc/hoc'
import { fadeIn, textVariant } from '../utils/motion'
import { github } from '../assets'

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant(0)}>
        <h3 className="sectionSubText">My work</h3>

        <h2 className="sectionHeadText">Projects.</h2>
      </motion.div>

      <div
        className="xl:grid-cols-3 md:grid-cols-2 grid-cols-1 grid gap-10 mt-20
       place-items-center">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

interface ProjectProps {
  name: string
  description: string
  tags: {
    name: string
    color: string
  }[]
  image: string
  source_code_link: string
  index: number
}
const ProjectCard: React.FC<ProjectProps> = ({
  index,
  image,
  name,
  description,
  tags,
  source_code_link,
}) => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', 0.5 * index, 0.75)}
      className="h-full max-w-[340px]">
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speen: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl flex flex-col h-full">
        <div className="w-full relative h-[230px]">
          <img src={image} alt="preview" className="h-full w-full rounded-2xl object-cover" />
          <div className="absolute top-2 right-2 w-8 h-8 p-1 black-gradient rounded-full cursor-pointer">
            <img
              src={github}
              alt="github_logo"
              className="object-cover"
              onClick={() => window.open(source_code_link, '_blank')}
            />
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="text-secondary mt-2 text-[14px]">{description}</p>
        </div>

        <div className="flex flex-row space-x-2 mt-4 flex-grow items-end">
          {tags.map((tag) => (
            <p key={tag.name} className={`${tag.color} text-[14px]`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

export default SectionHOC(Works, 'works')
