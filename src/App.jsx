import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import PlaceOrder from './pages/PlaceOrder'
import Footer from "./components/Footer"
import LoginPopup from './components/LoginPopup'

const App = () => {

  const [showLogin, setShowLogin] = useState(false)

  return (
    <div>
      {
        showLogin ? <LoginPopup setShowLogin={setShowLogin}></LoginPopup> : <></>
      }
      <div className='w-[80%] mx-auto'>
        <Navbar setShowLogin={setShowLogin}></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/cart' element={<Cart></Cart>}></Route>
          <Route path='/order' element={<PlaceOrder></PlaceOrder>}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </div>

  )
}

export default App

