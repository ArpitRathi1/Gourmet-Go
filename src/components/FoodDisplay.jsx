import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import FoodItem from './FoodItem'

const FoodDisplay = ({category}) => {

    const {food_list} = useContext(StoreContext)

  return (
    <div className='mt-[30px]'>
        <h2 className='text-[max(2vw,24px)] font-bold'>Top dishes near you</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px]'>
            {
                food_list.map((item, index) => {
                    if (category==="All" || category===item.category){
                        return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}></FoodItem>
                    }    
                })
            }
        </div>
    </div>
  )
}

export default FoodDisplay
