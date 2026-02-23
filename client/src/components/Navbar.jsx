import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ isLogged, logOut }) => {
    const navBar = useRef(null)
        const [menuClicked, setMenuClicked] = useState(false)
    const onMenuClicked = () => {
            setMenuClicked((prev) => !prev)
    }

  return (
    <div ref={navBar} className='w-[85%] h-20 pt-5 flex flex-col justify-between fixed overflow-hidden z-2 bg-[#F3F4E5] border-b items-center'>
        <div className='w-full h-full flex justify-between items-center '>
            <div className='font-bebas text-4xl text-green-400 items-center'>Heal<span className='font-roboto text-3xl'>i</span>o</div>
            <div className='flex gap-2.5 md:hidden'>
                <div className='bg-black text-white px-2.5 py-1 flex items-center font-roboto-condensed font-bold hover:bg-green-400 transition duration-300 cursor-pointer md:hidden border-b-4' onClick={onMenuClicked}>
                    <h1>MENU</h1>
                </div>
                <div className='bg-black text-green-400 px-2.5 py-1 flex items-center font-roboto-condensed font-bold transition duration-300 cursor-pointer md:hidden border-b-4' >
                    <Link to={isLogged?'/track':'signup'}>Track</Link>
                </div>
            </div>
            <div className='w-full hidden md:flex gap-4 justify-center'>
                <Link className='h-10 flex items-center justify-end font-roboto-condensed font-bold hover:bg-green-500 px-4' to='/' >Home</Link>
                {isLogged && <>
                    <Link className='h-10 flex items-center justify-end font-roboto-condensed font-bold hover:bg-green-500 px-4'>Today's Update</Link>
                </>}
                <Link className='h-10 flex items-center justify-end font-roboto-condensed font-bold hover:bg-green-500 px-4' to='/about'>About Us</Link>
            </div>
            <div className='hidden md:flex gap-2.5'>
                <div className='bg-black text-red-500 px-2.5 py-1 flex items-center font-roboto-condensed font-bold hover:bg-red-500 hover:text-black transition duration-300 cursor-pointer  border-b-2' onClick={logOut}>
                    <h1>LogOut</h1>
                </div>
                <div className='w-25 bg-black text-green-400 px-2.5 py-1 flex items-center justify-center font-roboto-condensed font-bold transition duration-300 cursor-pointer border-b-2 hover:bg-green-400 hover:text-black' >
                    <Link to={isLogged?'/track':'signup'}>Let's Track</Link>
                </div>
            </div>
        </div>
        <div className={`w-full bg-[#F3F4E5] ${ menuClicked?'flex flex-col':'hidden'} justify-between items-center md:hidden opacity-100 z-2 transition-all duration-1000 px-[5%]`}>
            <Link className='w-full h-10 flex items-center border-b justify-end font-roboto-condensed font-bold hover:bg-green-500' to='/' >Home</Link>
            {isLogged && <>
                <Link className='w-full h-10 flex items-center border-b justify-end font-roboto-condensed font-bold hover:bg-green-500'>Today's Update</Link>
                <h1 className='w-full h-10 flex items-center border-b justify-end font-roboto-condensed font-bold hover:bg-red-500' onclick={logOut}>Log Out</h1>
            </>}
            <Link className='w-full h-10 flex items-center border-b justify-end font-roboto-condensed font-bold hover:bg-green-500' to='/about'>About Us</Link>
        </div>
    </div>
  )
}

export default Navbar
