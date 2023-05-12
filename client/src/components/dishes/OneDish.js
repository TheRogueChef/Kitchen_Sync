import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link,useNavigate, useParams } from 'react-router-dom';
import modernblack from '../images/modernblack.jpg';
import Dashboard from '../dishes/Dashboard';


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
            navigate('/displayPage')
        })
        .catch(err => console.log(err))
    };


    return (
        <div className='container4' style={{
            backgroundImage:`url(${modernblack})`
        }}>
            <Dashboard/>
            <h1 style={{ backgroundImage: `url(${modernblack})`, color: 'white', fontFamily: 'cursive', fontWeight: 'bolder', fontSize: 'large'}}>Lets make this dish!!!</h1>
            <Link className='btn4' to={`/displayPage`}>Dish Library</Link>
        <div className='details4'>
            <h2>{dish.title}</h2>
            <br  />
            <h3>Feeds How Many?: {dish.servings}</h3>
            <h3>How long to prep?: {dish.prepTime}</h3>
            <h3>How long to cook?: {dish.cookTime}</h3>
            <br  />
            <h4>Description: {dish.description}</h4>
            <br  /><br  />
            <br  /><br  />
            <button onClick={(e)=>{deleteDish(dish._id)}} className='btn3 btn-danger'>Delete this dish from my library</button>
        </div>
        </div>
    )}

export default OneDish;