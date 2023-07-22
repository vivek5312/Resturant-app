import React from 'react'
import mealImg from '../assest/meals.jpg'
import HeaderButton from './HeaderButton'
import classes from './Header.module.css'
const Header = (props) => {
  return (
    <>
    <header className={classes.header}>
        <h1>React Meals</h1>
      <HeaderButton onClick={props.onCartShown}/>
    </header>
    <div className={classes['main-image']}> 
        <img src={mealImg} alt='A delicus food is waiting for you' ></img>
    </div>
    </>
  )
}

export default Header
