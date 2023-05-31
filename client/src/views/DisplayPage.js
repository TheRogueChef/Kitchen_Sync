import React, { useState } from 'react';
import Dashboard from '../components/dishes/Dashboard';
import DisplayAllDishes from '../components/dishes/DisplayAllDishes';
import '../components/dishes/style.css';

const DisplayPage = (props) => {
    const [dish, setDish] = useState([]);
    return (
        <div style={{ backgroundImage: `transparent`}}>
            <Dashboard />
            <div style={{ backgroundImage: 'transparent', color: 'greenyellow', fontFamily: 'cursive', fontWeight: 'bolder', fontSize: 'xx-large', textDecoration: 'underline'}}>Recipe Library
            <br  /> <br  />
            </div>
            <DisplayAllDishes dish={dish} setDayDish={setDish} />
        </div>
    )
}
export default DisplayPage;
