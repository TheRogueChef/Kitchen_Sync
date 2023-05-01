import React, { useState } from 'react'
import DCMon from '../components/dishes/DCMon';
import DCTue from '../components/dishes/DCTue';
import DCWed from '../components/dishes/DCWed';
import DCThu from '../components/dishes/DCThu';
import DCFri from '../components/dishes/DCFri';
import DCSat from '../components/dishes/DCSat';
import DCSun from '../components/dishes/DCSun';
import rusticplankstable from '../components/images/rusticplankstable.jpg';




const DishCalendar = (props) => {

    const [dish, setDish] = useState([]);

    return (
        <div className='container2' style={{
            backgroundImage:`url(${rusticplankstable})`
        }}>
            <div className='details2'>
            <h2>Monday</h2>
            <DCMon dish={dish} setDish={setDish} />
            </div>
            <div className='details2'>
            <h2>Tuesday</h2>
            <DCTue dish={dish} setDish={setDish} />
            </div>
            <div className='details2'>
            <h2>Wednesday</h2>
            <DCWed dish={dish} setDish={setDish} />
            </div>
            <div className='details2'>
            <h2>Thursday</h2>
            <DCThu dish={dish} setDish={setDish} />
            </div>
            <div className='details2'>
            <h2>Friday</h2>
            <DCFri dish={dish} setDish={setDish} />
            </div>
            <div className='details2'>
            <h2>Saturday</h2>
            <DCSat dish={dish} setDish={setDish} />
            </div>
            <div className='details2'>
            <h2>Sunday</h2>
            <DCSun dish={dish} setDish={setDish}/>
            </div>
        </div>
    )
}
export default DishCalendar;
