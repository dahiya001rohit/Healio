import React from 'react'

const TodaysUpdate = ({atTop}) => {
  return (
    <div className={ (atTop?'mt-[18vh]':'mt-[5vh]') + ' min-w-3xl h-[200vh] border-[2.5px] border-[#121212] mx-[6vw] rounded-4xl flex flex-col items-center text-white'}>
      <div className='text-white'>Todays Update</div>
      <div></div>
    </div>
  )
}

export default TodaysUpdate
