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
                        <h3 style={{ color: 'yellow', fontStyle: 'italic', paddingLeft: '5px', paddingRight: '5px' }}>{dish.title}</h3>
                        <p>servings: {dish.servings}</p>
                        <p>Prep time: {dish.prepTime} minutes</p>
                        <p>Cook time: {dish.cookTime} minutes</p>
                        <br />
                        <Link className='btn2' to={`/updateDish/${dish._id}`}>Edit page</Link>
                        <br /><br />
                        <Link className='btn2' to={`/oneDish/${dish._id}`}>Let's make this</Link>
                    </div>
                )
            })}
        </div>
    );
}

export default DisplayAllDishes;
