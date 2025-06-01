import React from 'react'
import Navbar from './components/Navbar'
import Example from './components/Example'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {

  const isOwner = useLocation().pathname.includes("owner")
  return (
    <div>
      {!isOwner && <Navbar/>}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home></Home>}/>

        </Routes>

      </div>
      
      
    </div>
  )
}

export default App
