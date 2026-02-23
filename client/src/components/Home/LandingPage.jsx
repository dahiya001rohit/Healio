import React from 'react'
import { Link } from 'react-router-dom'
import HeroLanding from './LandinPageComponents/HeroLanding'

const LandingPage = () => {
  return (
    <div className='w-full h-screen bg-red-500 mt-20 flex '>
        <HeroLanding/>
    </div>
  )
}

export default LandingPage
