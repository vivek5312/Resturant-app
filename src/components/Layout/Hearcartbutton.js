import React, { useContext, useEffect, useState } from 'react'
import CartContextdata from '../../Store/CartContextdata.js'
import CartIcon from '../Cart/Carticon.js'
import './Headercartbutton.css'

const Hearcartbutton = (props) => {

const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

const cartCtx = useContext(CartContextdata);
const { items } = cartCtx;

  const numberOfCartItems = cartCtx.items.reduce(
    (currentNo, item) => {
    return currentNo + item.amount;
  }, 0);
  // console.log(numberOfCartItems)

  const btnClasses = `${'button'} ${btnIsHighlighted ? 'bump' : ''}`;
  
    useEffect(() => {
      if (items.length === 0) {
        return;
      }
      setBtnIsHighlighted(true);
  
      const timer = setTimeout(() => {
        setBtnIsHighlighted(false);
      }, 300);
  
      return () => {
        clearTimeout(timer);
      };
    }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
        <span className='icon'>
        <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className='badge'>
            {numberOfCartItems}
        </span>
    </button>
  )
}

export default Hearcartbutton
