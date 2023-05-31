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
        <div className='container4' style={{
            backgroundImage: `transparent`
        }}>
            <Dashboard />
            <br /><br />
            <Link className='btn4' to={`/displayPage`}>Back to Library</Link>
            <div className='details4'>
                <h1 style={{ textDecoration: 'underline', fontWeight: 'bolder', color: 'greenyellow'}}>{dish.title}</h1>
                <br />
                <h3>Feeds How Many: {dish.servings}</h3>
                <h3>How long to prep: {dish.prepTime} minutes</h3>
                <h3>How long to cook: {dish.cookTime} minutes</h3>
                <br /><br />
                {dish.ingredients && (
                    <>
                        <h2>Ingredients:</h2>
                        <ul>
                            {dish.ingredients.map((ingredients) => (
                                <ul className='innerBox' key={ingredients.id}>{ingredients.original}</ul>
                            ))}
                        </ul>
                        <br /><br />
                    </>
                )}
                <br />
                <h4>Directions: {dish.description}</h4>
                <br /><br />
                <br /><br />
                <button onClick={(e) => { deleteDish(dish._id) }} className='btn3 btn-danger'>Delete from library</button>
            </div>
        </div>
    )
}

export default OneDish;