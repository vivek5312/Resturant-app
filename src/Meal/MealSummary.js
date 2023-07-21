import React from 'react'
import classes from './MealSummary.module.css'
const MealSummary = () => {
  return (
  <section className={classes.summary}>
    <h2>Delicious Food, Delivered To You</h2>
    <p>
        Choose you favourtie meal from our broad selection of availabel meals and enjoy a delicious 
        lunch or dinner at home.
    </p>
    <p>
        All our meals are cooked with high-quality ingredient, just-in-time and ofcourse
        by experienced chefs!
    </p>
  </section>
  )
}

export default MealSummary
