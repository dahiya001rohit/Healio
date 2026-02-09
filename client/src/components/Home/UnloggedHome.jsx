import React from 'react'
import { Link } from 'react-router-dom'

const UnloggedHome = ({atTop}) => {
  return (
    <div className={ (atTop?'mt-45':'mt-13') + ' w-[90%] mx-[5%] min-w-95 min-h-122 border-3 border-[#121212] rounded-4xl flex flex-col items-center text-white gap-4'}>
        <div className='mt-10 w-[80%] flex justify-center font-zalando-expanded text-[4vw] text-white text-center'>
            <h1>Optimize Your Body with <span className='text-green-400 '>AI</span> <br />using <span className='text-green-400'> HEALiO.</span></h1>
        </div>
        <div className='w-[90%] h-140 min-h-93 bg-[#121212] rounded-4xl mb-[10vh] flex flex-col items-center mt-5 px-[3vw] py-[2vw] gap-4'>
            <div className='w-full h-2/3 flex flex-col items-center justify-center gap-10 '>
                <div className='w-full h-5/10 text-center text-3xl font-roboto-condensed '>
                    <h1 className='mx-4 font-light text-[7vw] md:text-5xl'>
                        Transforms raw data into smarter habits <br />with <span className='text-green-400'>HEALiO.</span>
                    </h1>
                    <h1 className='mx-4 font-light mt-6 text-5xl'>
                        
                    </h1>
                </div>
                <div className='w-9/10 flex gap-4 items-center justify-center text-[4vw] md:text-3xl'>
                    <Link to="/login" className='bg-white text-[#121212] px-[2vw] py-[0.5vh] rounded-3xl font-roboto-condensed hover:bg-green-400 transition duration-300'>Login</Link>
                    <Link to="/signup" className='bg-white text-[#121212] px-[2vw] py-[0.5vh] rounded-3xl font-roboto-condensed transition duration-300 hover:bg-green-400 '>SignUp</Link>
                </div>
            </div>
            <div className='w-full h-1/3 flex flex-col items-center justify-center gap-5 border'></div>
        </div>
    </div>
  )
}

export default UnloggedHome
