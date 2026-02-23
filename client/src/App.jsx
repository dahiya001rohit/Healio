import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import TodaysUpdate from './components/TodaysUpdate'
import Track from './components/Track'
import SignUp from './components/SignUp'
import Login from './components/Login'
import LoggedHome from './components/Home/LoggedHome'
import { Route, Router, Routes } from 'react-router-dom'
import useAuth from './Hooks/useAuth'
import ProctedRoutes from './components/ProctedRoutes'
import LandingPage from './components/Home/LandingPage'

const App = () => {
    const [atTop, setAtTop] = useState(false)
    const [isLogged, setIsLogged] = useState(false)
    const { token, user, logOut} = useAuth()
    useEffect(() => {
      if(token && user){
        setIsLogged(true);
      }
    }, [token, user]);
  return (
    <div className='flex flex-col bg-[#F3F4E5] px-[7.5%]'>
      <Navbar atTop={atTop} setAtTop ={setAtTop} isLogged = {isLogged} logOut = {logOut}/>
      <Routes>
        <Route path='/' element = {isLogged?<LoggedHome atTop={atTop} user = {user} />:<LandingPage atTop={atTop} />} />
        <Route path='/login' element={<Login atTop={atTop} isLogged = {isLogged} />}/>
        <Route path='/signup' element={<SignUp atTop={atTop} isLogged = {isLogged} />}/>
        <Route path='/todays-update' element={<ProctedRoutes>
          <TodaysUpdate atTop={atTop}/>
        </ProctedRoutes >}/>
        <Route path='track' element={<ProctedRoutes>
          <Track atTop={atTop}/>
        </ProctedRoutes>}/>
        <Route path='*' element={<Login atTop={atTop} isLogged = {isLogged} />}/>
      </Routes>
    </div>
  )
}

export default App
