import React from 'react'
import { Link } from 'react-router-dom'
const HeroLanding = ( isLogged ) => {
  return (
    <div className='w-full h-full  flex flex-col justify-around items-center mt-5 '>
        <div className='w-[90%] h-[50%] flex flex-col font-bbh-bartle items-center text-center text-3xl sm:text-4xl md:text-6xl lg:text-7xl '>
            <h1>
                Track. <br />
                <span className='text-green-400'>Optimize.</span> <br />
                Grow.
            </h1>
            <h1 className='text-sm lg:text-lg font-roboto-condensed mt-10 text-gray-400 '>
            <span className='text-black font-bebas text-3xl'>Let's Track your Journey with</span> <br /> <span className='text-green-400 font-bebas text-4xl'>HEALiO.</span>
            </h1>
            <div className='w-25 h-10 bg-green-400 text-lg text-black px-2.5 py-1 flex items-center justify-center font-roboto-condensed font-bold transition duration-300 cursor-pointer border-b-2 hover:bg-black hover:text-green-400 mt-5' >
                    <Link to='signup'>Let's Track</Link>
            </div>
            <h1 className='text-sm lg:text-lg font-roboto-condensed mt-10 text-gray-400 '>
                Precision <span className='font-bold text-green-400'>NUTRTION</span> and <span className='font-bold text-green-400'>WORKOUT</span> analytics for serious athletes. <br />
            </h1>
        </div>
        <div className='w-[90%]  rounded-b-4xl bg-green-400 flex flex-wrap items-center justify-center xl:justify-around gap-3 p-4 my-6'>
            <div className='w-full xl:w-[48%] h-35  p-4 flex justify-between items-center '>
                <div className='w-[45%] h-[90%] text-center text-[10px] sm:text-sm lg:text-2xl xl:text-lg font-bbh-bartle flex flex-col lg:flex-row  xl:flex-col items-center justify-center '>
                    <svg className='w-10 xs:w-12 sm:w-15' xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flame-icon lucide-flame"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"/></svg>
                    <h1>
                        2704<br />Calories
                    </h1>
                </div>
                <div className='w-[45%] h-[90%] text-center text-[10px] sm:text-sm lg:text-2xl xl:text-lg font-bbh-bartle flex flex-col lg:flex-row  xl:flex-col items-center justify-center '>
                    <svg className='w-10 xs:w-12 sm:w-15' xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-footprints-icon lucide-footprints"><path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z"/><path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z"/><path d="M16 17h4"/><path d="M4 13h4"/></svg>
                    <h1>
                        10101<br />Foot Steps
                    </h1>
                </div>
            </div>
            <div className='w-full xl:w-[48%] h-35 p-4 flex justify-between items-center'>
                <div className='w-[45%] h-[90%] text-center text-[10px] sm:text-sm lg:text-2xl xl:text-lg font-bbh-bartle flex flex-col lg:flex-row  xl:flex-col items-center justify-center  '>
                    <svg className='w-10 xs:w-12 sm:w-15' xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-biceps-flexed-icon lucide-biceps-flexed"><path d="M12.409 13.017A5 5 0 0 1 22 15c0 3.866-4 7-9 7-4.077 0-8.153-.82-10.371-2.462-.426-.316-.631-.832-.62-1.362C2.118 12.723 2.627 2 10 2a3 3 0 0 1 3 3 2 2 0 0 1-2 2c-1.105 0-1.64-.444-2-1"/><path d="M15 14a5 5 0 0 0-7.584 2"/><path d="M9.964 6.825C8.019 7.977 9.5 13 8 15"/></svg>
                    <h1>
                        121g<br />Protein
                    </h1>
                </div>
                <div className='w-[45%] h-[90%] text-center text-[10px] sm:text-sm lg:text-2xl xl:text-lg font-bbh-bartle flex flex-col lg:flex-row  xl:flex-col items-center justify-center  '>
                    <svg className='w-10 xs:w-12 sm:w-15' xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bed-icon lucide-bed"><path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/></svg>
                    <h1>
                        8.5hr<br />Sleep
                    </h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroLanding
