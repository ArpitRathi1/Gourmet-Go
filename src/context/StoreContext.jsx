import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [cartItems, setCartItem] = useState({})

    const addToCart = (itemId) => {
        if(!cartItems[itemId]){
            setCartItem((prev) => ({...prev, [itemId] : 1}))
        } else {
            setCartItem((prev) => ({...prev, [itemId] : prev[itemId] + 1}))
        }
    }

    const removeFromCart = (itemId) => {
        setCartItem((prev) => {
          const updatedCart = { ...prev };
      
          // Decrease the quantity or remove the item if it becomes 0
          if (updatedCart[itemId] === 1) {
            delete updatedCart[itemId]; // Remove the item if its quantity is 1 and should become 0
          } else if (updatedCart[itemId]) {
            updatedCart[itemId] -= 1; // Decrease the quantity by 1
          }
      
          return updatedCart; // Return the updated object
        });
      };

    // const removeFromCart = (itemId) => {
    //     if (cartItems[itemId] === 0){
    //         const newObj = Object.fromEntries(
    //             Object.entries(cartItems).filter(([key, value]) => value !== 0)
    //           );
    //           return newObj
    //     }else{
    //         setCartItem((prev) => ({...prev, [itemId] : prev[itemId] - 1}))
    //     }
        
    // }

    useEffect(()=>{
        console.log(cartItems)
    },[cartItems])

    const getTotalCartAmmount = () => {
        let totalAmmount = 0
        for (const item in cartItems){
            if (cartItems[item] > 0){
                let itemInfo = food_list.find((product) => product._id === item);
                totalAmmount += itemInfo.price * cartItems[item]
            }
        }
        return totalAmmount
    }

    const contextValue = {
        food_list,
        cartItems,
        setCartItem,
        addToCart,
        removeFromCart,
        getTotalCartAmmount
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;