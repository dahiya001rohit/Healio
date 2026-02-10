import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({atTop, setAtTop, isLogged, logOut}) => {
    const navBar = useRef(null)

    const [menuOpen, setMenuOpen] = useState(false);
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
            'w-full fixed border-b border-black'
            :
            'w-[90%] border-[2.5px] border-[#121212] mt-[5vh] rounded-4xl mx-[5%]'
        ) + ' min-w-95 transition-all duration-1000' }>
        <div className={ (atTop?
                ''
                :
                'border-[1.5px] border-black rounded-4xl'
            ) + ' text-white flex justify-between items-center bg-[#121212] px-[5vw] py-[1vh] transition-all duration-1000 border-[#121212]'}>
            <div className='font-bebas text-4xl text-green-400 items-center'>Heal<span className='font-roboto text-3xl'>i</span>o</div>

            <div className='font-roboto-condensed text-sm font-light md:hidden'>
                <h1 className='bg-white text-[#121212] px-[2vw] py-[0.5vh] rounded-3xl font-roboto-condensed font-bold hover:bg-green-400 transition duration-300 cursor-pointer' onClick={() => setMenuOpen(!menuOpen)}>MENU</h1>
                <div className={`absolute right-[10%] mt-3 w-44 bg-[#121212] border border-black rounded-2xl transition-all duration-300
                ${menuOpen ? "opacity-100" : "opacity-0 scale-95 pointer-events-none"}`}
                >
                    <Link to="/" className="block px-4 py-3 hover:bg-green-400 hover:text-black rounded-t-2xl">HOME</Link>
                    {isLogged && (
                        <>
                            <Link to="/track" className="block px-4 py-3 hover:bg-green-400 hover:text-black">TRACK</Link>
                            <Link to="/todays-update" className="block px-4 py-3 hover:bg-green-400 hover:text-black">TODAY'S UPDATE</Link>
                        </>
                    )}
                    <Link to="/about" className="block px-4 py-3 hover:bg-green-400 hover:text-black">ABOUT</Link>
                    {isLogged ? (
                            <button onClick={logOut} className="w-full text-left px-4 py-3 hover:bg-green-400 hover:text-black rounded-b-2xl">LOGOUT
                            </button>
                        ) : (
                        <>
                            <Link to="/login" className="block px-4 py-3 hover:bg-green-400 hover:text-black">LOGIN</Link>
                            <Link to="/signup" className="block px-4 py-3 hover:bg-green-400 hover:text-black rounded-b-2xl">SIGN UP</Link>
                        </>
                    )}
                </div> 
            </div>

            <div className='hidden font-roboto-condensed text-sm font-light md:flex sm:gap-4'>
                <Link to="/" className='px-[1vw] hover:bg-green-400 hover:text-[#121212] rounded-2xl transition duration-300'>HOME</Link>
                {isLogged && <Link to="track" className='px-[1vw] hover:bg-green-400 hover:text-[#121212] rounded-xl transition duration-300'>TRACK</Link>}
                <Link to="/about" className='px-[1vw] hover:bg-green-400 hover:text-[#121212] rounded-xl transition duration-300'>ABOUT HEALiO</Link>
                
            </div>
            <div className='hidden md:flex gap-4 items-center justify-between)'>
                {isLogged?
                    <>
                        <Link to="/todays-update" className='bg-white text-[#121212] px-[2vw] py-[0.5vh] rounded-3xl font-roboto-condensed font-bold hover:bg-green-400 transition duration-300'>Today's Update</Link>
                        <h1 onClick={logOut} className='bg-white text-[#121212] px-[2vw] py-[0.5vh] rounded-3xl font-roboto-condensed font-bold hover:bg-red-500 transition duration-300 cursor-pointer'>LOGOUT</h1>
                    </>
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
