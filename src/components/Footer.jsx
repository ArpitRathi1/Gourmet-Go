import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='text-[#d9d9d9] bg-[#323232] flex flex-col items-center gap-5 py-5 px-[8vw] pt-[80px] mt-[100px]' id='contact-us'>
        <div className='w-full flex flex-col md:flex-row gap-[80px] justify-between'>
            {/* Left */}
            <div className='flex flex-col items-start gap-5 w-[50%] '>
                <img src={assets.Gourmet} className='w-[180px]' />
                <p className=''>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta quo, ad ab libero aspernatur esse, saepe dolorum earum aut nostrum quibusdam obcaecati corrupti vitae repudiandae iste. Ipsa magnam voluptates saepe!</p>
                <div className='flex gap-4'>
                    <img className='w-[40px] cursor-pointer' src={assets.facebook_icon} />
                    <img className='w-[40px] cursor-pointer' src={assets.twitter_icon} />
                    <img className='w-[40px] cursor-pointer'    src={assets.linkedin_icon} />
                </div>
            </div>
            {/* Center */}
            <div className='flex flex-col items-start gap-5'>
                <h2 className='text-[30px] font-bold text-white'>Company</h2>
                <ul>
                    <li className='mb-[10px] cursor-pointer'>Home</li>
                    <li className='mb-[10px] cursor-pointer'>About us</li>
                    <li className='mb-[10px] cursor-pointer'>Delivery</li>
                    <li className='mb-[10px] cursor-pointer '>Privacy policy</li>
                </ul>
            </div>
            {/* Right */}
            <div className='flex flex-col items-start gap-5'>
                <h2 className='text-[30px] font-bold text-white'>GET IN TOUCH</h2>
                <ul>
                    <li>+91-1234567890</li>
                    <li>contact@Gourmet-Go.com</li>
                </ul>
            </div>
        </div>
        <hr className='w-full h-[2px] my-5'/>
        <p>Copyright 2024 © Gourmet-Go.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
