import React, { useState } from 'react';
import { createContext } from 'react/cjs/react.development';

export const CartContext = createContext()

export const CartProvider = (props) => {

    const [cart, setCart] = useState([])

  return (
  <CartContext.Provider value={[cart, setCart]}>
    {props.children}
  </CartContext.Provider>
    )
};