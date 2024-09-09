import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../context/StoreContext'

const Navbar = ({setShowLogin}) => {

    const [menu, setMenu] = useState("home")
    const {getTotalCartAmmount} = useContext(StoreContext)

  return (
    <div className='py-5 flex justify-between items-center'>
      <Link to="/"><img src={assets.Gourmet} className='w-[120px] md:w-[180px]'></img></Link>
      <ul className='lg:flex gap-5 hidden text-[#49557e] text-lg'>
        <Link to="/" onClick={() => setMenu("home")} className={menu === "home" ? "pb-[2px] border-b-2 border-[#49557e]" : ""}>Home</Link>
        <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "pb-[2px] border-b-2 border-[#49557e]" : ""}>Menu</a>
        <a href="#mobile-app" onClick={() => setMenu("moblie-app")} className={menu === "moblie-app" ? "pb-[2px] border-b-2 border-[#49557e]" : ""}>Mobile-App</a>
        <a href='#contact-us' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "pb-[2px] border-b-2 border-[#49557e]" : ""}>Contact-us</a>
      </ul>
      <div className='flex items-center gap-3 lg:gap-10'>
        <img src={assets.search_icon} className='w-[20px] sm:w-[30px]'/>
        <div className='relative'>
            <Link to="/cart"><img src={assets.basket_icon} className='w-[20px] sm:w-[30px]' /></Link>
            <div className={`${getTotalCartAmmount() === 0 ? "" : 'absolute min-w-2 min-h-2 bg-[#FF6347] rounded-md -top-[8px] -right-[8px]'}`}></div>
        </div>
        <button 
        onClick={() => setShowLogin(true)}
        className='bg-transparent text-[16px] text-[#49557e] border border-[#FF6347] py-1 sm:py-2 px-4 lg:px-6 rounded-3xl cursor-pointer transition-all duration-300
        hover:bg-[#fff4f2]'
        >Sign in</button>
      </div>
    </div>
  )
}

export default Navbar
