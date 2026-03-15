import React from 'react'
import Navbar from './Pages/Navbar'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import Track from './Pages/Track'

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
      </Routes>
    </div>
  )
}

export default App

