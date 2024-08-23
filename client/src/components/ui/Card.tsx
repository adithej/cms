const Card = ({ image, content }: { image: string; content: string }) => {
  return (
    <div className='w-full h-full bg-neutral-200 shadow-lg rounded-lg overflow-hidden flex'>
      <div className='w-1/2 relative'>
        <img
          src={image}
          alt='illustration'
          className='absolute inset-0 w-full h-full object-cover'
        />
      </div>
      <div className='w-1/2 p-6 flex flex-col justify-center items-center'>
        <h5 className='mb-4 text-3xl font-bold text-gray-900 font-montserrat'>
          {content}
        </h5>
      </div>
    </div>
  )
}

export default Card
