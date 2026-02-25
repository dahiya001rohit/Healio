import React from 'react'
import { Link } from 'react-router-dom'
import HeroLanding from './LandinPageComponents/HeroLanding'

const LandingPage = (  ) => {
  return (
    <div className='w-full h-full  mt-25 flex flex-wrap border rounded-4xl'>
        <HeroLanding/>
    </div>
  )
}

export default LandingPage
