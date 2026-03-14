import React from 'react'
import Navbar from './Pages/Navbar'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './Pages/LandingPage'

const App = () => {
  return (
    <div className='w-full h-full flex flex-col overflow-hidden'>
      <Routes>
        <Route path='/' element={
          <>
            <Navbar />
            <LandingPage />
          </>
        } />
      </Routes>
    </div>
  )
}

export default App
