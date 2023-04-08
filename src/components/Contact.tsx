import React, { useState, useRef, ChangeEvent, FormEvent } from 'react'
import { motion } from 'framer-motion'
import SectionHOC from '../hoc/hoc'
import { slideIn } from '../utils/motion'
import { EarthCanvas } from './canvas'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const formRef = useRef<null | HTMLFormElement>(null)

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement | HTMLTextAreaElement>) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .send(
        'service_7z40b99',
        'template_1zu9fok',
        {
          from_name: form.name,
          from_email: form.email,
          to_name: 'Pavlo',
          to_email: 'blizzard2281337@gmail.com',
          message: form.message,
        },
        'vDRMub6-SCSxoYSl_',
      )
      .then(() => {
        setLoading(false)
        alert('I will reply as soon as possible.')

        setForm({
          name: '',
          email: '',
          message: '',
        })
      })
      .catch(() => {
        setLoading(false)
        alert('Something went wrong.')
      })
  }
  return (
    <div className="flex xl:flex-row flex-col-reverse gap-10 overflow-x-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="w-full rounded-2xl flex flex-col bg-black-100 p-8 xl:flex-[0.4]">
        <h3 className="sectionSubText">Get in touch</h3>

        <h2 className="sectionHeadText">Contact.</h2>

        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col mt-12 gap-8">
          <div className="flex flex-col w-full">
            <label htmlFor="name" className="text-white font-medium mb-4">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              placeholder="What's your name?"
              className="bg-tertiary outline-none px-6 py-4
               rounded-lg placeholder:text-secondary border-none font-medium"
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="email" className="text-white font-medium mb-4">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              placeholder="What's your email?"
              className="bg-tertiary outline-none px-6 py-4
               rounded-lg placeholder:text-secondary border-none font-medium"
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="message" className="text-white font-medium mb-4">
              Your Message
            </label>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              placeholder="What you want to say?"
              className="bg-tertiary outline-none px-6 py-4
               rounded-lg placeholder:text-secondary border-none font-medium resize-none"
              //@ts-ignore
              onChange={handleChange}
            />
          </div>

          <button className="bg-tertiary outline-none border-none shadow-md px-10 py-3 rounded-xl w-fit">
            {loading ? '...Sending' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:h-auto md:h-[550px] sm:h-[350px] h-[250px] xl:flex-[0.6]">
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionHOC(Contact, 'contact')
