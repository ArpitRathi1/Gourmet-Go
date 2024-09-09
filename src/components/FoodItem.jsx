import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { StoreContext } from '../context/StoreContext'

const FoodItem = ({id, name, price, description, image}) => {

    // const [itemCount, setItemCount] = useState(0) 
    const {cartItems, addToCart, removeFromCart} = useContext(StoreContext)  

  return (
    <div className='FoodItem w-full m-auto rounded-2xl'>
        <div className='w-full relative'>
            <img className='w-full rounded-t-2xl' src={image}/>
            {
                !cartItems[id] ? <img className='w-[35px] absolute bottom-[15px] right-[15px] cursor-pointer rounded-full' onClick={() => addToCart(id)} src={assets.add_icon_white}></img> 
                : <div className='absolute bottom-[15px] right-[15px] cursor-pointer flex items-center gap-2 p-[6px] rounded-3xl bg-white'>
                    <img className='w-[30px]' onClick={() => removeFromCart(id)} src={assets.remove_icon_red} />
                    <p>{cartItems[id]}</p>
                    <img className='w-[30px]' onClick={() => addToCart(id)} src={assets.add_icon_green}/>
                </div> 
            }
        </div>
        <div className='p-5'>
            <div className='flex justify-between items-center mb-2'>
                <p className='text-[20px] font-bold'>{name}</p>
                <img className='w-[70px]' src={assets.rating_starts}/>
            </div>
            <p className='text-[#676767] text-[12px]'>{description}</p>
            <p className='text-[#FF6347] text-[22px] font-bold my-2'>${price}</p>
        </div>
    </div>
  )
}

export default FoodItem
