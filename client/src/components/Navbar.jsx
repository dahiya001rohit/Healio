import React from 'react'

const Navbar = () => {
  return (
    <div className='min-w-140 border-2 border-[#121212] mt-[4vh] mx-[6vw] rounded-4xl'>
        <div className='w-full h-full text-white flex justify-between items-center   bg-[#121212] px-[5vw] py-[1vh] border-2 border-black rounded-4xl '>
            <div className='font-bebas text-4xl text-green-400 items-center'>Heal<span className='font-roboto text-3xl'>i</span>o</div>
            <div className='flex gap-4 font-roboto-condensed text-sm '>
                <a href="#" className='px-[1vw] hover:bg-green-400 hover:text-[#121212] rounded-2xl transition duration-200'>HOME</a>
                <a href="#" className='px-[1vw] hover:bg-green-400 hover:text-[#121212] rounded-xl transition duration-200'>TRACK</a>
                <a href="#" className='px-[1vw] hover:bg-green-400 hover:text-[#121212] rounded-xl transition duration-200'>LOGOUT</a>
            </div>
            <div className='flex gap-4 items-center justify-between'>
                <a href="#" className='bg-white text-[#121212] px-[2vw] py-[0.5vh] rounded-3xl font-roboto-condensed font-bold hover:bg-green-400 transition duration-200'>LOGiN</a>
                <a href="#" className='bg-white text-[#121212] px-[2vw] py-[0.5vh] rounded-3xl font-roboto-condensed font-bold hover:bg-green-400 transition duration-300'>SiGN-UP</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar
