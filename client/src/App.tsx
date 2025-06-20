import React from 'react'
import Navbar from './components/Navbar'
import Example from './components/Example'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import AllRooms from './pages/AllRooms'
import RoomDetails from './pages/RoomDetails'
import MyBooking from './pages/MyBooking'
import HotelReg from './components/HotelReg'
import Layout from './pages/hotelOwner/Layout'
import Dashboard from './pages/hotelOwner/Dashboard'
import AddRoom from './pages/hotelOwner/AddRoom'
import ListRoom from './pages/hotelOwner/ListRoom'


const App = () => {

  const isOwner = useLocation().pathname.includes("owner")
  return (
    <div>
      {!isOwner && <Navbar/>}
       {false && <HotelReg/>}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home></Home>}/>
          <Route path='/rooms' element={<AllRooms/>}/>
          <Route path='/rooms/:id' element={<RoomDetails/>}/>
          <Route path='/my-bookings' element={<MyBooking/>} />
          <Route path='/owner' element={<Layout/>}>
              <Route index element={<Dashboard/>}/>
              <Route path='add-room' element={<AddRoom/>}/>
              <Route path='list-room' element={<ListRoom/>}/>
          </Route>
        </Routes>
      </div>
      <Footer/>
      
    </div>
  )
}

export default App
