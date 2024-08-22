import { Header } from './components'
import Contact from './pages/Contact'
import CreateContact from './pages/CreateContact'
import ContactDetail from './pages/ContactDetail'
import { Routes, Route, Navigate } from 'react-router-dom'

function App() {
  return (
    <main className='flex flex-col h-screen'>
      <Header />
      <Routes>
        <Route path='/' element={<Navigate to={'/contact'} />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/contact/new' element={<CreateContact />} />
        <Route path='/contact/:id' element={<ContactDetail />} />
      </Routes>
    </main>
  )
}

export default App
