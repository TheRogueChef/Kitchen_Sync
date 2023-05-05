import React, { useState } from 'react';
import Dashboard from '../components/dishes/Dashboard';
import DisplayAllDishes from '../components/dishes/DisplayAllDishes';
import '../components/dishes/style.css';
import modernblack from '../components/images/modernblack.jpg';

const DisplayPage = (props) => {
    const [dish, setDish] = useState([]);
    return (
        <div>
            <Dashboard />
            <div style={{ backgroundImage: `url(${modernblack})`, color: 'white', fontFamily: 'cursive', fontWeight: 'bolder', fontSize: 'large'}}>Check out all your Dishes!!!
            <br  /> <br  />
            </div>
            <DisplayAllDishes dish={dish} setDayDish={setDish} />
        </div>
    )
}
export default DisplayPage;
