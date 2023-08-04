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
        <div className="container4">
            <br/>
            <div className='buttonHolder'>
                <a href='/DisplayPage'>
                    <button className='btn'>Take me Home</button>
                </a>
                <button className='btn' onClick={refreshPage}>Try Again</button>
            </div>
            <form className='details3' onSubmit={submitHandler}>
                <p value={dish.title} name='title' className='pageTitle'>{dish.title}</p>
                <br />
                <h1>Serves:</h1>
                <p value={dish.servings} name='servings'>{dish.servings}</p>
                <br />
                <h1>Prep Time:</h1>
                <h2 value={dish.prepTime} name='prepTime'>{dish.prepTime} minutes</h2>
                <br />
                <h1>Cook Time:</h1>
                <p value={dish.cookTime} name='cookTime'>{dish.cookTime} minutes</p>
                <br />
                <h1>Ingredients: </h1>
                <ul>
                    {dish.ingredients.map((ingredients) => (
                        <ul className='innerBox' key={ingredients.id}>{ingredients.original}</ul>
                    ))}
                </ul>
                <br /><br />
                <h1>Directions:</h1>
                <p value={dish.description} name='description'>{dish.description}</p>
                <br /><br />
                <button className='btn' type='submit'>Add to library</button>
            </form>
            <br /><br />
        </div>
    )
}
export default DishApi;