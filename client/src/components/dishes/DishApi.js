import './style.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const DishApi = (props) => {
    const [dish, setDish] = useState({
        title: '',
        servings: '',
        prepTime: '',
        cookTime: '',
        ingredients: [],
        description: ''
    });

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://api.spoonacular.com/recipes/random?apiKey=f375f3f672264e72a7c6a445b4839f13')
            .then((res) => {
                console.log(res)
                setDish({
                    title: res.data.recipes[0].title,
                    servings: res.data.recipes[0].servings,
                    prepTime: res.data.recipes[0].preparationMinutes,
                    cookTime: res.data.recipes[0].readyInMinutes,
                    ingredients: res.data.recipes[0].extendedIngredients,
                    description: res.data.recipes[0].instructions
                });
            })
            .catch((err) => { console.log(err) })
    }, [])

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/newDish', dish)
            .then((res) => {
                navigate('/displayPage')
            })
            .catch((err) => {
                console.log(err)
            })
    };

    function refreshPage() {
        window.location.reload(true);
    }

    return (
        <div className="container5" style={{
            backgroundImage: `transparent`
        }}>
            <form className='details4' onSubmit={submitHandler}>
                <h1 value={dish.title} name='title' style={{ color: 'greenyellow', fontWeight: 'bolder', textDecoration: 'underline'}}>{dish.title}</h1>
                <br />
                <h3 value={dish.servings} name='servings'>Serves: {dish.servings}</h3>
                <br />
                <h3 value={dish.prepTime} name='prepTime'>Prep Time: {dish.prepTime} minutes</h3>
                <br />
                <h3 value={dish.cookTime} name='cookTime'>Cook Time: {dish.cookTime} minutes</h3>
                <br />
                <h3>Ingredients: </h3>
                <ul>
                    {dish.ingredients.map((ingredients) => (
                        <ul className='innerBox' key={ingredients.id}>{ingredients.original}</ul>
                    ))}
                </ul>
                <br /><br />
                <h5 value={dish.description} name='description'>Directions: {dish.description}</h5>
                <br /><br />
                <br /><br />
                <button className='btn2' type='submit'>Add to library</button>
            </form>
            <div className='buttonHolder'>
                <a href='/DisplayPage'>
                <button className='btn3'>Take me Home</button>
                </a>
                <br  /><br  />
                <button className='btn3' onClick={refreshPage}>Try Again</button>
            </div>
        </div>
    )}
export default DishApi;