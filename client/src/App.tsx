import React from 'react'
import Navbar from './components/Navbar'
import Example from './components/Example'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'

const App = () => {

  const isOwner = useLocation().pathname.includes("owner")
  return (
    <div>
      {!isOwner && <Navbar/>}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home></Home>}/>
        </Routes>
        <Footer/>
      </div>
      
      
    </div>
  )
}

export default App
