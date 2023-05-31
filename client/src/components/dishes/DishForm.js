import React, { useState } from 'react';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const DishForm = (props) => {
    const [errors, setErrors] = useState ({})
    const navigate = useNavigate()
    const [dish, setDish] = useState({
        title: '',
        servings: Number(0),
        prepTime: '',
        cookTime: '',
        ingredients: '',
        description: ''
    });

    const handleInputChange = (e) => {
        setDish({ ...dish, [e.target.name]: e.target.value })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/newDish', dish)
            .then((res) => {
                setDish({title:"", servings:0, prepTime: "", cookTime: "", ingredients: [], description:""})
                navigate('/displayPage')
            })
            .catch((err) => {
                setErrors(err.response.data.error.errors)
            })
    }

    return (
        <div className='container2'  style={{
            backgroundImage: `transparent`} }>
        <div className='details3'>
            <form className='w-25' onSubmit={submitHandler}>
                <h1 style={{ color: 'greenyellow', fontWeight: 'bolder', textDecoration: 'underline'}}>Create a New Dish</h1>

                <label className='form-label'>Title: </label>
                <input className='form-control' type="text" onChange={handleInputChange} value={dish.title} name='title' />
                {
                    errors.title?
                    <p className='text-danger'>{errors.title.message}</p>:
                    null
                }
                <br />
                <label className='form-label'>Servings: </label>
                <input className='form-control' type="number" onChange={handleInputChange} value={dish.servings} name='servings' />
                {
                    errors.servings?
                    <p className='text-danger'>{errors.servings.message}</p>:
                    null
                }
                <br />
                <label className='form-label'>Prep Time: (in minutes) </label>
                <input className='form-control' type="text" onChange={handleInputChange} value={dish.prepTime} name='prepTime' />
                {
                    errors.prepTime?
                    <p className='text-danger'>{errors.prepTime.message}</p>:
                    null
                }
                <br />
                <label className='form-label'>Cook Time: (in minutes)</label>
                <input className='form-control' type="text" onChange={handleInputChange} value={dish.cookTime} name='cookTime' />
                {
                    errors.cookTime?
                    <p className='text-danger'>{errors.cookTime.message}</p>:
                    null
                }
                <br />
                <label className='form-label'>Ingredients with measurements</label>
                <textarea className='form-control' type="textarea" onChange={handleInputChange} value={dish.ingredients} name='ingredients' style={{ height: '200px', width: '400px', whiteSpace: 'pre-wrap'}} />
                {
                    errors.ingredients?
                    <p className='text-danger'>{errors.ingredients.message}</p>:
                    null
                }
                <br />
                <label className='form-label'>Directions: </label>
                <textarea className='form-control' type="text" onChange={handleInputChange} value={dish.description} name='description' style={{ height: '200px', width: '400px', whiteSpace: 'pre-wrap'}} />
                {
                    errors.description?
                    <p className='text-danger'>{errors.description.message}</p>:
                    null
                }
                <br />
                <button className='btn btn-success' >Create</button>
            </form>
            <br  /><br  />
                <Link className='btn' to={'/displayPage'}>Home</Link>
        </div>
        </div>
    )
}

export default DishForm;