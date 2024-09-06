import React from 'react'
import { menu_list } from '../assets/assets'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='flex flex-col gap-5' id='explore-menu'>
      <h1 className='text-[#262626] font-bold text-[34px]'>Explore our menu</h1>
      <p className='max-w-[60%] text-[#262626]'>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
      <div className='flex justify-between items-center gap-8 text-center my-5 mx-0 overflow-x-scroll explore-menu-list'>
        {
            menu_list.map((item, index)=>{
                return (
                    <div key={index} onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}>
                        <img src={item.menu_image} className={`${category===item.menu_name ? "border-4 border-[#FF6347] p-[2px]" : ""} w-[7.5vw] min-w-[80px] cursor-pointer rounded-full transition-all duration-200`} />
                        <p className='mt-2 text-[#747474] text-[max(1.4vw,16px)] cursor-pointer'>{item.menu_name}</p>
                    </div>
                )
            })
        }
      </div>
      <hr className='my-2 mx-0 h-[2px] bg-[#e2e2e2]'/>
    </div>
  )
}

export default ExploreMenu