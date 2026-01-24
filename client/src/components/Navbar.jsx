import React, { useEffect, useRef } from 'react'

const Navbar = ({atTop, setAtTop}) => {
    const navBar = useRef(null)
    useEffect(() => {
        const navAt = navBar.current.offsetTop
        function onScroll (){
            if(window.scrollY >= navAt){ 
                setAtTop(true)
            } else {
                setAtTop(false)
            }
        }
        window.addEventListener('scroll', onScroll)
        return () => { window.removeEventListener('scroll', onScroll)}
    }, [])

    useEffect(() => {
        console.log(atTop);
    }, [atTop])

  return (
    <div ref={navBar} className={ (atTop?
            'min-w-3xl left-0 right-0 fixed'
            :
            'min-w-3xl border-[2.5px] border-[#121212] mt-[5vh] mx-[6vw] rounded-4xl'
        ) + ' transition-all duration-1000 border-[#121212]' }>
        <div className={ (atTop?
                'w-full h-full text-white flex justify-between items-center   bg-[#121212] px-[5vw] py-[1vh]'
                :
                'w-full h-full text-white flex justify-between items-center   bg-[#121212] px-[5vw] py-[1vh] border-[1.5px] border-black rounded-4xl'
            ) + ' transition-all duration-1000 border-[#121212]'}>
            <div className='font-bebas text-4xl text-green-400 items-center'>Heal<span className='font-roboto text-3xl'>i</span>o</div>
            <div className='flex gap-4 font-roboto-condensed text-sm font-light'>
                <a href="#" className='px-[1vw] hover:bg-green-400 hover:text-[#121212] rounded-2xl transition duration-300'>HOME</a>
                <a href="#" className='px-[1vw] hover:bg-green-400 hover:text-[#121212] rounded-xl transition duration-300'>TRACK</a>
                <a href="#" className='px-[1vw] hover:bg-green-400 hover:text-[#121212] rounded-xl transition duration-300'>ABOUT HEALiO</a>
                <a href="#" className='px-[1vw] hover:bg-green-400 hover:text-[#121212] rounded-xl transition duration-300'>LOGOUT</a>
            </div>
            <div className='flex gap-4 items-center justify-between'>
                <a href="#" className='bg-white text-[#121212] px-[2vw] py-[0.5vh] rounded-3xl font-roboto-condensed font-bold hover:bg-green-400 transition duration-300'>LOGiN</a>
                <a href="#" className='bg-white text-[#121212] px-[2vw] py-[0.5vh] rounded-3xl font-roboto-condensed font-bold transition duration-300 hover:bg-green-400 '>SiGN-UP</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar
