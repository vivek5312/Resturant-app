import React, { useContext } from 'react'
import CartContextdata from '../../../Store/CartContextdata';
import './Mealitem.css'
import MealitemForm from './MealitemForm';

const Mealitem = (props) => {
  const cartCtx = useContext(CartContextdata);
    const price = `$${props.price.toFixed(2)}`;

    const onAddToCartHandler = amount => {
      cartCtx.addItem({
        // key: props.id,
        id: props.id,
        name: props.name,
        amount: amount,
        price: props.price
      });

    }

    // console.log(cartCtx)


  return (
    <li className='meal'>
        <div>
            <h3>{props.name}</h3>
            <div className='description'>
                {props.description}</div>
            <div className='price'>
                {price}</div>
        </div>
        <div>
          <MealitemForm key={props.id} onAddToCart={onAddToCartHandler}/>
        </div>
      
    </li>
  )
}

export default Mealitem
