import React from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

import classes from "./MealList.module.css";
const Dummy_List = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty",
    price: 16.35,
  },
  {
    id: "m3",
    name: "Burger",
    description: "American,raw,meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 20.99,
  },
  {
    id: "m5",
    name: "Paneer Angara",
    description: "Indian specialty",
    price: 10.85,
  },
];

const MealList = () => {
  const mealList = Dummy_List.map((meal) =><MealItem key={meal.id} name={meal.name} description={meal.description} price={meal.price}/>);
  
  return (
    <section className={classes.meals}>
        <Card>
      <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default MealList;
