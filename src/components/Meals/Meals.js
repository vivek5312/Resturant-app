import React, { Fragment } from 'react'
import Availablemeals from './Availablemeals'
import Mealsummery from './Mealsummery'

const Meals = () => {
  return (
    <Fragment>
        <Mealsummery/>
        <Availablemeals/>
    </Fragment>
  )
}

export default Meals
