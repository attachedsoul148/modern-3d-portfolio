import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { logo, menu, close } from '../assets'
import { navLinks } from '../constants'

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)
  return (
    <nav className="paddingX w-full fixed top-0 items-center z-20 py-5 bg-primary">
      <div className="w-full max-w-7xl flex flex-row justify-between mx-auto items-center">
        <Link
          className="flex gap-4 items-center cursor-pointer"
          to={'/'}
          onClick={() => {
            setActive('')
            window.scrollTo(0, 0)
          }}>
          <img alt="logo" src={logo} className="w-9 h-9 object-contain" />
          <p className="inline-flex font-bold text-[18px]">
            <span className="sm:block hidden">Kozak</span>&nbsp;Pavlo
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((navLink) => (
            <li
              key={navLink.id}
              onClick={() => setActive(navLink.title)}
              className={`${active === navLink.title ? 'text-white' : 'text-secondary'}
            font-medium hover:text-white cursor-pointer text-[18px]`}>
              <a href={`#${navLink.id}`}>{navLink.title}</a>
            </li>
          ))}
        </ul>

        <div className="relative block sm:hidden">
          <img
            alt="menu"
            src={toggle ? close : menu}
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle((prev) => !prev)}
          />
          {toggle && (
            <div className="absolute black-gradient rounded-xl p-6 right-4 top-5 mx-4 my-2 z-10 min-w-[140px]">
              <ul className="list-none flex flex-col gap-4">
                {navLinks.map((navLink) => (
                  <li
                    key={navLink.id}
                    onClick={() => {
                      setActive(navLink.title)
                      setToggle(false)
                    }}
                    className={`${active === navLink.title ? 'text-white' : 'text-secondary'}
            font-medium hover:text-white cursor-pointer text-[16px]`}>
                    <a href={`#${navLink.id}`}>{navLink.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
