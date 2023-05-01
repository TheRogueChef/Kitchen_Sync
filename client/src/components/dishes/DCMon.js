import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


const DCMon = (props) => {
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
        <div>
            <h3>{dish.title}</h3>
            <p>Servings: {dish.servings}</p>
            <p>Prep Time: {dish.prepTime}</p>
            <p>Cook Time: {dish.cookTime}</p>
            <p>Description: {dish.description}</p>
            {/* <button onClick={(e)=>{deleteDish(dish._id)}} className='btn btn-danger'>Delete</button> */}
        </div>
    )}

export default DCMon;