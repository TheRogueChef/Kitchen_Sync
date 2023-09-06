import React, { useState } from 'react';
import Dashboard from '../components/dishes/Dashboard';
import DisplayAllDishes from '../components/dishes/DisplayAllDishes';
import '../components/dishes/style.css';
import { Element, Link } from 'react-scroll';

const DisplayPage = (props) => {
    const [dish, setDish] = useState([]);
    return (
        <div>
            <Element name='top'>
                <Dashboard />
            </Element>
            <br />
            <div className='pageTitle'>Recipe Library
            <br />
            </div>
            <DisplayAllDishes dish={dish} setDayDish={setDish} />
            <br/>
            <Link to='top' className='slideLink' smooth={true} duration={500}>Back to Top</Link>
            <br/>
        </div>
    )
}
export default DisplayPage;
