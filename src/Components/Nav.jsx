import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { FaTimes } from 'react-icons/fa'
import { CiMenuFries } from 'react-icons/ci'

const Nav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  }

  return (
    <nav>
      <div className='h-10vh flex justify-between w-full z-50 text-white lg:py-5 px-5 md:px-16 py-4 fixed bg-slate-900'>
        <div className='flex items-center flex-1'>
          <span className='text-3xl font-bold'>PORTOFOLIO</span>
        </div>
        <div className='lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden'>
          <div className='flex-10'>
            <ul className='flex gap-8 text-[18px]'>
              <Link spy={true} smooth={true} to="About">
                <li className='hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer'>About</li>
              </Link>
              <Link spy={true} smooth={true} to="Skills">
                <li className='hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer'>Skills</li>
              </Link>
              <Link spy={true} smooth={true} to="Projects">
                <li className='hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer'>Projects</li>
              </Link>
              <Link spy={true} smooth={true} to="Minigames">
                <li className='hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer'>Minigames</li>
              </Link>
            </ul>
          </div>
        </div>

        <div className={`md:hidden block absolute top-12 left-0 right-0 bg-slate-900 transition-all duration-500 ease-in-out overflow-hidden ${click ? 'max-h-[450px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <ul className='text-center text-xl p-20'>
            <Link spy={true} smooth={true} to="About">
              <li className='mb-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>About</li>
            </Link>
            <Link spy={true} smooth={true} to="Skills">
              <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>Skills</li>
            </Link>
            <Link spy={true} smooth={true} to="Projects">
              <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>Projects</li>
            </Link>
            <Link spy={true} smooth={true} to="Minigames">
              <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>Minigames</li>
            </Link>
          </ul>
        </div>

        <button className='block md:hidden transition' onClick={handleClick}>
          {click ? <FaTimes className='w-8 h-8' /> : <CiMenuFries className='w-8 h-8' />}
        </button>
      </div>
    </nav>
  )
}

export default Nav
