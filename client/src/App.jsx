import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import Track from './Pages/Track'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'

const App = () => {
  return (
    <div className='w-full h-full flex flex-col overflow-hidden'>
      <Navbar />
      <Routes>
        <Route path='/' element={
          <>
            <LandingPage />
          </>
        } />
        <Route path='/track' element={
          <>
            <Track />
          </>
        } />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default App

