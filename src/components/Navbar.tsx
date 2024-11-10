import React from 'react'
import { IoIosMenu,IoIosClose } from  "react-icons/io";
import {useState} from "react"


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () =>{
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <div className='container pt-8'>
        <div className='flex justify-between items-center'>
            <div className='text-xl font-medium'>Zainab bibi </div>
            <ul className='gap-10 lg:gap-16 hidden md:flex'>
              <li className='menulink'><a href="/">Home</a></li>
              <li className='menulink'><a href="/about">About</a></li>
              <li className='menulink'><a href="/skills">Skills</a></li>
              <li className='menulink'><a href="/contact">Contact</a></li>
              </ul>
              <div className='md:hidden' onClick={toggleMenu}>
                {isMenuOpen ? <IoIosClose size={30} />:
                <IoIosClose size={30} />

                }
              </div>
              </div>

              {isMenuOpen && (
              <ul className='flex flex-col gap mt-4 md:hidden'>
                <li>
                  <a href="#hero" onClick={toggleMenu}>Home</a>
                </li>
                <li>
                  <a href="/about" onClick={toggleMenu}>About</a>
                </li>
                <li>
                  <a href="/skills" onClick={toggleMenu}>Skills</a>
                </li>
      
                <li>
                  <a href="/contact" onClick={toggleMenu}>Contact</a>
                </li>
                

              </ul>

              )
              }
    </div>
  )
}

export default Navbar