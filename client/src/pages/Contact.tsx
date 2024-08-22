import { Sidebar, ContactCard, ContactList } from '../components'

const Contact = () => {
  return (
    <main className='flex-grow grid grid-cols-1 md:grid-cols-[15%_85%] h-screen md:h-dvh'>
      <section className='hidden md:block'>
        <Sidebar />
      </section>
      <section className='bg-stone-300 flex flex-col md:pl-[10%] p-4 md:pt-6 gap-8'>
        <ContactCard />
        <ContactList />
      </section>
    </main>
  )
}

export default Contact
