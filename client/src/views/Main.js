import React, { useState } from 'react'
import Dashboard from '../components/dishes/Dashboard';
import DishCalendar from '../views/DishCalendar';
import DisplayAllDishes from '../components/dishes/DisplayAllDishes';




const Main = (props) => {

    const [dish, setDish] = useState([]);
    const removeFromDom = dishId => {
        setDish(dish.filter(dish=>dish._id !== dishId));
    }
    return (
        <div>
            <Dashboard dish={dish} setDish={setDish} removeFromDom={removeFromDom}/>
            <DishCalendar dish={dish} setDish={setDish} removeFromDom={removeFromDom}/>
            <DisplayAllDishes dish={dish} setDish={setDish} removeFromDom={removeFromDom}/>
        </div>
    )
}
export default Main;
