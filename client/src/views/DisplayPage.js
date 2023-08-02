import React, { useState } from 'react';
import Dashboard from '../components/dishes/Dashboard';
import DisplayAllDishes from '../components/dishes/DisplayAllDishes';
import '../components/dishes/style.css';

const DisplayPage = (props) => {
    const [dish, setDish] = useState([]);
    return (
        <div style={{ backgroundImage: `transparent`}}>
            <Dashboard />
            <br/>
            <div className= 'pageTitle'>Recipe Library
            <br/> <br/>
            </div>
            <DisplayAllDishes dish={dish} setDayDish={setDish} />
        </div>
    )
}
export default DisplayPage;
