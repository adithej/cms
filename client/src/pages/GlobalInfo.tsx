import { Sidebar, CasesLineGraph, CasesWorldMap } from '../components'

const GlobalInfo = () => {
  return (
    <main className='flex-grow grid grid-cols-1 md:grid-cols-[15%_85%] h-screen md:h-dvh'>
      <section className='hidden md:block'>
        <Sidebar />
      </section>
      <section className='bg-stone-300 flex flex-col h-full gap-5 p-3 md:p-5'>
        <div className='flex h-[40%] md:pl-[10%] md:pt-6 gap-4 pr-5'>
          <CasesLineGraph />
        </div>
        <div className='h-[55%] md:pl-[10%] pr-4'>
          <CasesWorldMap />
        </div>
      </section>
    </main>
  )
}

export default GlobalInfo
