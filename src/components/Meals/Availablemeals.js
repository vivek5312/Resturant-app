import React from 'react'
import Card from '../UI/Card';
import './Availablemeals.css'
import Mealitem from './Mealitems/Mealitem';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

const Availablemeals = () => {
    const mealslist = DUMMY_MEALS.map(meal => 
    <Mealitem 
    key={meal.id}
    id={meal.id}
    description = {meal.description}
    name = {meal.name}
    price = {meal.price}/>
    )
  return (
    <React.Fragment>
    <section>
        <ul className='meals'>
            <Card>
                <ul>{mealslist}</ul>
            </Card>
        </ul>
    </section>
    </React.Fragment>
  )
}

export default Availablemeals
