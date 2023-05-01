import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link,useNavigate, useParams } from 'react-router-dom';


const OneDish = (props) => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [dish, setDish] = useState({})
    

    useEffect(() => {
        axios.get("http://localhost:8000/api/oneDish/"+id)
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
            navigate('/main')
        })
        .catch(err => console.log(err))
    };


    return (
        <div className='m-5 border border-dark rounded w-50 h-100 d-inline-block p-3 mb-2 bg-primary text-white w-25'>
            <h2>Title: {dish.title}</h2>
            <h3>Feeds How Many?: {dish.servings}</h3>
            <h3>How long to prep?: {dish.prepTime}</h3>
            <h3>How long to cook?: {dish.cookTime}</h3>
            <p>Description: {dish.description}</p>
            <Link className='btn' to={`/updateDish/${dish._id}`}>Edit page</Link>
            <br  /><br  />
            <Link className='btn' to={'/main'}>Home</Link>
            <br  /><br  />
            <button onClick={(e)=>{deleteDish(dish._id)}} className='btn btn-danger'>Delete</button>
        </div>
    )}

export default OneDish;