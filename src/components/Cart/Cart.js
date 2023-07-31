import React, { useContext } from 'react'
import CartContextdata from '../../Store/CartContextdata'
import Modal from '../UI/Modal'
import './Cart.css'
import CartItem from './CartItem'

const Cart = (props) => {

    const  cartCtx = useContext(CartContextdata);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
    
    const hasitems = cartCtx.items.length > 0;

    // console.log(totalAmount)

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
      };
    
      const cartItemAddHandler = (item) => {
        // cartCtx.addItem(item);
        cartCtx.addItem({ ...item, amount: 1 });
      };

    const cartItems = (
        <ul className='cart-items'>
            {cartCtx.items.map((item) => (
                <CartItem
                key = {item.id}
                // id = {item.id}
                name = {item.name}
                amount = {item.amount}
                price = {item.price}
                onRemove = {cartItemRemoveHandler.bind(null, item.id)}
                onAdd = {cartItemAddHandler.bind(null, item)}/>
            ))}
        </ul>
    )
  return (
    <Modal onClose = {props.onClose}>
        {cartItems}
        <div className='total'>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className='actions'>
            <button className='button--alt' onClick={props.onClose}>
                Close
            </button>
            {hasitems && <button className='button'>
                Order
            </button>}
        </div>
    </Modal>
  )
}

export default Cart
