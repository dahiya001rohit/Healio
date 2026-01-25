import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({atTop, setAtTop, isLogged, logOut}) => {
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
            'min-w-4xl left-0 right-0 fixed border-b border-black'
            :
            'min-w-4xl border-[2.5px] border-[#121212] mt-[5vh] mx-[6vw] rounded-4xl'
        ) + ' transition-all duration-1000' }>
        <div className={ (atTop?
                'w-full h-full text-white flex justify-between items-center   bg-[#121212] px-[5vw] py-[1vh]'
                :
                'w-full h-full text-white flex justify-between items-center   bg-[#121212] px-[5vw] py-[1vh] border-[1.5px] border-black rounded-4xl'
            ) + ' transition-all duration-1000 border-[#121212]'}>
            <div className='font-bebas text-4xl text-green-400 items-center'>Heal<span className='font-roboto text-3xl'>i</span>o</div>
            <div className='flex gap-4 font-roboto-condensed text-sm font-light'>
                <Link to="/" className='px-[1vw] hover:bg-green-400 hover:text-[#121212] rounded-2xl transition duration-300'>HOME</Link>
                {isLogged && <Link to="track" className='px-[1vw] hover:bg-green-400 hover:text-[#121212] rounded-xl transition duration-300'>TRACK</Link>}
                {isLogged && <h1 onClick={logOut} className='px-[1vw] hover:bg-green-400 hover:text-[#121212] rounded-xl transition duration-300 cursor-pointer'>LOGOUT</h1>}
                <Link to="/about" className='px-[1vw] hover:bg-green-400 hover:text-[#121212] rounded-xl transition duration-300'>ABOUT HEALiO</Link>
                
            </div>
            <div className='flex gap-4 items-center justify-between'>
                {isLogged?
                    <Link to="/todays-update" className='bg-white text-[#121212] px-[2vw] py-[0.5vh] rounded-3xl font-roboto-condensed font-bold hover:bg-green-400 transition duration-300'>Today's Update</Link>
                    :
                    <>
                        <Link to="/login" className='bg-white text-[#121212] px-[2vw] py-[0.5vh] rounded-3xl font-roboto-condensed font-bold hover:bg-green-400 transition duration-300'>LOGiN</Link>
                        <Link to="/signup" className='bg-white text-[#121212] px-[2vw] py-[0.5vh] rounded-3xl font-roboto-condensed font-bold transition duration-300 hover:bg-green-400 '>SiGN-UP</Link>
                    </>
                }
            </div>
        </div>
    </div>
  )
}

export default Navbar
