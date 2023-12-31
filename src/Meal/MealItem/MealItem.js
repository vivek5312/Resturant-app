import React from 'react'
import Form from './Form';
import classes from './MealItem.module.css'
const MealItem = (props) => {
    const price=`$${props.price}`
  return (
    <li className={classes.meal}>
        <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
    <Form/>
    </li>
  )
}

export default MealItem
