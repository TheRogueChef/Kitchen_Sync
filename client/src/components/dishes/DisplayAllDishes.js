import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const DisplayAllDishes = (props) => {
    const { id } = useParams();
    const [dishList, setDishList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/allDishes')
            .then((res) => {
                setDishList(res.data.reverse());
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className='container' style={{ backgroundImage: 'transparent' }}>
            {dishList.map((dish, index) => {
                return (
                    <div className='details' key={index}>
                        <p className='dishTitle'>{dish.title}</p>
                        <h3>servings: {dish.servings}</h3>
                        <h3>Prep time: {dish.prepTime} minutes</h3>
                        <h3>Cook time: {dish.cookTime} minutes</h3>
                        <br />
                        <Link className='btn' to={`/updateDish/${dish._id}`}>Edit page</Link>
                        <br /><br />
                        <Link className='btn' to={`/oneDish/${dish._id}`}>Let's make this</Link>
                    </div>
                )
            })}
        </div>
    );
}

export default DisplayAllDishes;
