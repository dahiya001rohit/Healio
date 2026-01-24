import React, { useState } from 'react'
import Navbar from './components/Navbar'
import TodaysUpdate from './components/TodaysUpdate'
import Track from './components/Track'

const App = () => {
    const [atTop, setAtTop] = useState(false)
  return (
    <div className='flex flex-col overflow-x-auto'>
      <Navbar atTop={atTop} setAtTop ={setAtTop} />
      <Track atTop={atTop}/>
    </div>
  )
}

export default App
