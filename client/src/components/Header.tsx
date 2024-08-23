import React from 'react'
import logo from '../assets/contact-trace.svg'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
  return (
    <header className='flex flex-col sm:flex-row items-center w-full p-5 gap-4 bg-neutral-200'>
      <div className='flex items-center gap-4'>
        <img className='w-10 h-10' src={logo} alt='logo' />
        <h2 className='font-gupter font-semibold text-2xl'>Contact Trace</h2>
      </div>
      <nav className='flex sm:hidden mt-4 gap-4'>
        <Link
          to='/contact'
          className='text-neutral-600 hover:text-neutral-800 underline font-palanquin'
        >
          Contact
        </Link>
        <Link
          to='/global'
          className='text-neutral-600 hover:text-neutral-800 underline font-palanquin'
        >
          Graphs
        </Link>
      </nav>
    </header>
  )
}

export default Header
