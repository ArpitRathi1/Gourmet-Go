import React, { useState } from 'react'
import { assets } from '../assets/assets'

const LoginPopup = ({setShowLogin}) => {

    const [currState, setCurrState] = useState("Login")

  return (
    <div className='login-popup-container absolute z-10 w-[100%] h-[100%] bg-[#00000090] flex justify-center items-center'>
        <form className='self-center w-[max(23vw,330px)] text-[#808080] bg-white flex flex-col gap-6 py-6 px-[30px] rounded-lg text-[14px]'>
            <div className='flex justify-between items-center text-black'>
                <h2 className='text-[24px] font-bold'>{currState}</h2>
                <img className='w-[16px] cursor-pointer' onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className='flex flex-col gap-5'>
                {currState === "Sign Up" ? <input className='border-2 p-2 rounded' type="text" placeholder='Your name' required /> : <></>}
                <input className='border-2 p-2 rounded' type='email' placeholder='your email' required/>
                <input className='border-2 p-2 rounded' type='password' placeholder='Password' required/>
            </div>
            <button className='p-3 rounded text-white bg-[#FF6347] text-[15px]'>
                {currState === "Sign Up" ? "Create account" : "Login"}
            </button>
            <div className='flex items-start gap-2 -mt-[15px]'>
                <input className='mt-1' type="checkbox" required />
                <p>By continuing, I agree to the terms of use & privacy policy</p>
            </div>
            {
                currState === "Login" ? <p>Create a new account? <span className='text-[#FF6347] font-bold cursor-pointer' onClick={() => setCurrState("Sign Up")}>click here</span></p>
                : <p>Already have an account? <span className='text-[#FF6347] font-bold cursor-pointer'      onClick={() => setCurrState("Login")}>Login here</span></p> 
            }
        </form>
    </div>
  )
}

export default LoginPopup
