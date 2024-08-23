import React from 'react'
import Button from './ui/Button'
import { FaChevronRight } from 'react-icons/fa'
import { useNavigate, useLocation } from 'react-router-dom'

const Sidebar: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const isActive = (path: string) => location.pathname.startsWith(path)

  return (
    <section className='flex flex-col bg-neutral-300 h-full'>
      <nav className='flex-grow py-5'>
        <Button
          secondary
          className={`w-full rounded-r-lg ${
            isActive('/contact') ? 'bg-neutral-700' : ''
          }`}
          onClick={() => navigate('/contact')}
        >
          Contact
          <FaChevronRight className='h-4' />
        </Button>

        <Button
          secondary
          className={`w-full rounded-r-lg ${
            isActive('/global') ? 'bg-neutral-700' : ''
          }`}
          onClick={() => navigate('/global')}
        >
          Global Info
          <FaChevronRight className='h-4' />
        </Button>
      </nav>
      <div className='hidden md:block text-center text-xs text-neutral-800 p-2'>
        <span>Copyright &copy; Ailment View 2024</span>
      </div>
    </section>
  )
}

export default Sidebar
