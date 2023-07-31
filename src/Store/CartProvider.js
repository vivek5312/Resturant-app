import React, { useState } from 'react';
import CartContextdata from './CartContextdata';

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const addItemToCartHandler = (item) => {
    setCartItems((prevCartItems) => {
      const existingCartItemIndex = prevCartItems.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (existingCartItemIndex !== -1) {
        const updatedCartItems = [...prevCartItems];
        const existingCartItem = updatedCartItems[existingCartItemIndex];
        existingCartItem.amount += item.amount;
        setTotalAmount((prevTotalAmount) => prevTotalAmount + item.price * item.amount);
        return updatedCartItems;
      } else {
        setTotalAmount((prevTotalAmount) => prevTotalAmount + item.price * item.amount);
        return prevCartItems.concat(item);
      }
    });
  };

  const removeItemFromCartHandler = (id) => {
    setCartItems((prevCartItems) => {
      const existingCartItemIndex = prevCartItems.findIndex(
        (cartItem) => cartItem.id === id
      );

      if (existingCartItemIndex !== -1) {
        const existingCartItem = prevCartItems[existingCartItemIndex];
        setTotalAmount((prevTotalAmount) => prevTotalAmount - existingCartItem.price);
        if (existingCartItem.amount === 1) {
          return prevCartItems.filter((cartItem) => cartItem.id !== id);
        } else {
          const updatedCartItems = [...prevCartItems];
          updatedCartItems[existingCartItemIndex].amount--;
          return updatedCartItems;
        }
      } else {
        return prevCartItems;
      }
    });
  };

  const cartContext = {
    items: cartItems,
    totalAmount: totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContextdata.Provider value={cartContext}>
      {props.children}
    </CartContextdata.Provider>
  );
};

export default CartProvider;
