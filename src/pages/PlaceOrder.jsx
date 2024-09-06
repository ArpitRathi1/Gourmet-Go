import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'

const PlaceOrder = () => {

  const {getTotalCartAmmount} = useContext(StoreContext)

  return (
    <form className='flex flex-col lg:flex-row items-start justify-between gap-[50px] mt-[100px]'>
      {/* Left */}
      <div className='w-full lg:max-w-[max(30%,500px)]'>
        <p className='text-[30px] font-bold mb-[50px]'>Delivery Information</p>
        <div className='flex gap-2'>
          <input className='mb-[15px] w-full p-2 border border-[#c5c5c5] rounded' type="text"  placeholder='First Name'/>
          <input className='mb-[15px] w-full p-2 border border-[#c5c5c5] rounded' type="text" placeholder='Last Name'/>
        </div>
        <input className='mb-[15px] w-full p-2 border border-[#c5c5c5] rounded' type="text" placeholder='email' />
        <input className='mb-[15px] w-full p-2 border border-[#c5c5c5] rounded' type="text" placeholder='Street'/>
        <div className='flex gap-2'>
          <input className='mb-[15px] w-full p-2 border border-[#c5c5c5] rounded' type="text"  placeholder='City'/>
          <input className='mb-[15px] w-full p-2 border border-[#c5c5c5] rounded' type="text" placeholder='State'/>
        </div>
        <div className='flex gap-2'>
          <input className='mb-[15px] w-full p-2 border border-[#c5c5c5] rounded' type="text"  placeholder='Zip code'/>
          <input className='mb-[15px] w-full p-2 border border-[#c5c5c5] rounded' type="text" placeholder='Country'/>
        </div>
        <input className='mb-[15px] w-full p-2 border border-[#c5c5c5] rounded' type="text" placeholder='Phone' />
      </div>
      {/* Right */}
      <div className='w-full lg:max-w-[max(40%,500px)]'>
        <div className='flex flex-col gap-5 w-full'>
          <h2 className='text-[30px] font-bold'>Cart Total</h2>
            <div>
              <div className='flex justify-between text-[#555]'>
                <p>SubTotal</p>
                <p>${getTotalCartAmmount()}</p>
              </div>
              <hr className='h-[2px] bg-[#e2e2e2] border-none my-2'/>
              <div className='flex justify-between text-[#555]'>
                <p>Delivery Fee</p>
                <p>${getTotalCartAmmount() === 0 ? 0 : 2}</p>
              </div>
              <hr className='h-[2px] bg-[#e2e2e2] border-none my-2'/>
              <div className='flex justify-between text-[#555]'>
                <b>Total</b>
                <b>${getTotalCartAmmount() === 0 ? 0 : getTotalCartAmmount() + 2}</b>
              </div>
            </div>
            <button className='text-white w-full bg-[#FF6347] md:w-[max(15vw,200px)] py-3 rounded'>PROCEED TO PAYMENT</button>  
        </div>
      </div>  
    </form>
  )
}

export default PlaceOrder
