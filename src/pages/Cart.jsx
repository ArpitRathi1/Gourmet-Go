import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

  const {cartItems, food_list, removeFromCart, getTotalCartAmmount} = useContext(StoreContext)
  const natigate = useNavigate()

  return (
    <div className='mt-[100px]'>
      <div>
         <div className='cart-items-title'>  {/* same properties give to return div */}
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
          {
            food_list.map((item, index) => {
              if(cartItems[item._id]){
                return (
                  <div key={index}>
                    <div className='cart-items-title my-2 mx-0 '> 
                      <img src={item.image} className='w-[50px]' />
                      <p className='text-black'>{item.name}</p>
                      <p className='text-black'>${item.price}</p>
                      <p className='text-black'>{cartItems[item._id]}</p>
                      <p className='text-black'>${item.price * cartItems[item._id]}</p>
                      <p onClick={() => removeFromCart(item._id)} className='text-black cursor-pointer'>X</p>
                    </div>
                    <hr className='h-[2px] bg-[#e2e2e2] border-none'></hr>
                  </div>  

                )
              }
            })
          }
          <div className='mt-[80px] flex flex-col lg:flex-row justify-between gap-[(12vw,20px)]'>
            <div className='flex flex-col gap-5 w-full lg:w-[30%]'>
              <h2 className='text-[24px] font-bold'>Cart Total</h2>
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
              {
                Object.keys(cartItems).length > 0 ? <button onClick={() => natigate("/order")} className='text-white bg-[#FF6347] w-full md:w-[max(15vw,200px)] py-3 rounded'>PROCEED TO CHECKOUT</button>
                : <button className="bg-gray-300 py-3 rounded w-full md:w-[max(15vw,200px)] cursor-not-allowed opacity-50" disabled>PROCEED TO CHECKOUT</button>
              }  
            </div>
            <div className='w-full lg:w-[50%] mt-[15px] lg:mt-0'>
              <div>
                <p className='text-black font-bold text-[24px]'>If you have a promo code, Enter it here</p>
                <div className='mt-2 flex gap-2 items-center  rounded '>
                  <input className='bg-[#eaeaea] w-full rounded py-3 pl-2' type="text" placeholder='Promo code' />
                  <button className='w-[max(10vw,150px)] py-3 px-1 bg-black text-white rounded'>Submit</button>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Cart
