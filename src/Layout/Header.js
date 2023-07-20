import React from 'react'
import mealImg from '../assest/meals.jpg'

import classes from './Header.module.css'
const Header = () => {
  return (
    <>
    <header className={classes.header}>
        <h1>ReactMrals</h1>
        <button>Cart</button>
    </header>
    <div className={classes['main-image']}> 
        <img src={mealImg} alt='A delicus food is waiting for you' ></img>
    </div>
    </>
  )
}

export default Header
