import React, { useState } from 'react'
import Navbar from './components/Navbar'
import TodaysUpdate from './components/TodaysUpdate'
import Track from './components/Track'
import SignUp from './components/SignUp'
import Login from './components/Login'

const App = () => {
    const [atTop, setAtTop] = useState(false)
  return (
    <div className='flex flex-col overflow-x-auto'>
      <Navbar atTop={atTop} setAtTop ={setAtTop} />
      <SignUp atTop={atTop}/>
    </div>
  )
}

export default App
