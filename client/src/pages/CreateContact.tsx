import { Sidebar, ContactForm } from '../components'

const CreateContact = () => {
  return (
    <main className='flex-grow grid grid-cols-1 md:grid-cols-[15%_85%] h-dvh'>
      <section className='hidden md:block'>
        <Sidebar />
      </section>
      <section className='bg-stone-300 flex flex-col pl-[10%] pt-6'>
        <ContactForm />
      </section>
    </main>
  )
}

export default CreateContact
