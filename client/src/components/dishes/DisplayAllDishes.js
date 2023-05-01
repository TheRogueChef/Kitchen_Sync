import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import rusticplankstable from '../images/rusticplankstable.jpg';
import './style.css';

const DisplayAllDishes = (props) => {
    const navigate = useNavigate()
    const { id } = useParams();
    const { dish, setDish } = props;




    useEffect(() => {
        axios.get('http://localhost:8000/api/allDishes')
            .then((res) => {
                setDish(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);


    return (

        <div className='container' style={{
            backgroundImage:`url(${rusticplankstable})`
        }}>
            <div>
            <h1 className='banner'>Check out these dishes!</h1>
            </div>
            {dish.map((dish, index) => {
                return (
                    <div className='details' key={index}>
                        <h3>{dish.title}</h3>
                        <p>servings: {dish.servings}</p>
                        <p>Prep time: {dish.prepTime}</p>
                        <p>Cook time: {dish.cookTime}</p>
                        {/* <h4>{dish.description}</h4> */}
                        <Link className='btn' to={`/oneDish/${dish._id}`}>Details Page
                        </Link>
                        <br /><br />
                        <h5>Add to Calendar</h5>
                        <Link className='btn2' to={`/DCMon/${dish._id}`}>Mon</Link>
                        <Link className='btn2' to={`/DCTue/${dish._id}`}>Tue</Link>
                        <Link className='btn2' to={`/DCWed/${dish._id}`}>Wed</Link>
                        <Link className='btn2' to={`/DCThu/${dish._id}`}>Thu</Link>
                        <Link className='btn2' to={`/DCFri/${dish._id}`}>Fri</Link>
                        <Link className='btn2' to={`/DCSat/${dish._id}`}>Sat</Link>
                        <Link className='btn2' to={`/DCSun/${dish._id}`}>Sun</Link>
                        <br /><br />
                    </div>
                )
            })
            }
        </div>
    );
}
export default DisplayAllDishes;