import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import modernblack from '../images/modernblack.jpg';
import './style.css';


const DisplayAllDishes = (props) => {
    const { id } = useParams();
    const [ dish, setDish ]  = useState([]);


    useEffect(() => {
        axios.get('http://localhost:8000/api/allDishes')
            .then((res) => {
                setDish(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <div className='container' style={{
            backgroundImage: `url(${modernblack})`
        }}>
            {dish?.map((dish, index) => {
                return (
                    <div className='details' key={index}>
                        <h3>{dish.title}</h3>
                        <p>servings: {dish.servings}</p>
                        <p>Prep time: {dish.prepTime}</p>
                        <p>Cook time: {dish.cookTime}</p>
                        <br /><br />
                        <Link className='btn2' to={`/updateDish/${dish._id}`}>Edit page</Link>
                        <br /><br />
                        <Link className='btn2' to={`/oneDish/${dish._id}`}>Lets make this
                        </Link>
                    </div>
                )
            })
            }
        </div>
    );
}
export default DisplayAllDishes;