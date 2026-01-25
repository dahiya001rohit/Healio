import React from 'react'

const Track = ({atTop}) => {
  return (
    <div className={ (atTop? 'mt-[18vh]':'mt-[5vh]' ) + ' min-w-3xl h-[200vh] border-[1.5px] border-[#121212] mx-[6vw] rounded-4xl flex flex-col items-center text-white gap-4'}>
      <div className='w-[90%] h-[6vh] mt-10 flex justify-center items-center font-roboto-condensed gap-8'>
        <h1 className='px-[1.5vw] py-[0.5vh] bg-[#121212] rounded-2xl font-light'>Daily</h1>
        <h1 className='px-[1.5vw] py-[0.5vh] bg-[#121212] rounded-2xl font-light'>Weekly</h1>
        <h1 className='px-[1.5vw] py-[0.5vh] bg-[#121212] rounded-2xl font-light'>Monthly</h1>
      </div>
      <div className='w-[90%] h-[90vh] bg-[#121212] rounded-4xl '>
      </div>
    </div>
  )
}

export default Track
