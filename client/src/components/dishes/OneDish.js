import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Dashboard from '../dishes/Dashboard';

const OneDish = (props) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [dish, setDish] = useState({})

    useEffect(() => {
        axios.get("http://localhost:8000/api/oneDish/" + id)
            .then((res) => {
                setDish(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const deleteDish = (dishId) => {
        axios.delete('http://localhost:8000/api/allDishes/' + dishId)
            .then(res => {
                navigate('/displayPage')
            })
            .catch(err => console.log(err))
    };

    return (
        <div className='container4'>
       
            <br />
            <Link className='btn' to={`/displayPage`}>Back to Library</Link>
            <div className='details3'>
                <p className='pageTitle'>{dish.title}</p>
                <br />
                <h1>Feeds How Many: </h1>
                <p>{dish.servings}</p>
                <br />
                <h1>How long to prep:</h1>
                <p>{dish.prepTime} minutes</p>
                <br />
                <h1>How long to cook: </h1>
                <p>{dish.cookTime} minutes</p>
                <br />
                {dish.ingredients && (
                    <>
                        <h1>Ingredients:</h1>
                        <ul>
                            {dish.ingredients.map((ingredients) => (
                                <ul className='innerBox' key={ingredients.id}>{ingredients.original}</ul>
                            ))}
                        </ul>
                    </>
                )}
                <br />
                <h1>Directions: </h1>
                <p>{dish.description}</p>
                <br /><br />
                <button onClick={(e) => { deleteDish(dish._id) }} className='btn'>Delete from library</button>

            </div>
            <br />
        </div>
    )
}

export default OneDish;