import React from 'react'

const Header = () => {
  return (
    <div className='Header'>
      <div className='absolute flex flex-col items-start gap-[1.5vw] max-w-[80%] sm:max-w-[50%] bottom-[10%] left-[6vw] header-contain'>
        <h2 className='font-bold text-white text-[18px] sm:text-[max(4.2vw,22px)]'>Order your favourite food here</h2>
        <p className='text-white text-[1vw] hidden lg:block'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
        <a href="#explore-menu"><button className='text-[#747474] font-bold py-[1vw] px-[2.3vw] bg-white text-[max(1vw,13px)] rounded-3xl'>View Menu</button></a>
      </div>
    </div>
  )
}

export default Header