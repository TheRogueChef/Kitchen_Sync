import React, { useState } from 'react';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image } from 'react-bootstrap';
import kitchensink2 from '../images/kitchensink2.jpg';

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
        <div className='container3'>
            <div className='logLeft'>
                <Image className='dashPicL' src={kitchensink2} alt='...'/>
                <p className= 'dishLogo'>My Kitchen Sync</p>
                <br /><br />
                <Link className='btn' to={'/displayPage'}>Home</Link>
            </div>
        <div className='details3'>
            <form onSubmit={submitHandler}>
                <p className='pageTitle'>Create a New Dish</p>
                <br />
                <label>Title </label>
                <input className='inputBox' type="text" onChange={handleInputChange} value={dish.title} name='title' />
                {
                    errors.title?
                    <p className='text-danger'>{errors.title.message}</p>:
                    null
                }
                <br /><br />
                <label>Servings </label>
                <input className='inputBox' type="number" onChange={handleInputChange} value={dish.servings} name='servings' />
                {
                    errors.servings?
                    <p className='text-danger'>{errors.servings.message}</p>:
                    null
                }
                <br /><br />
                <label>Prep Time in minutes </label>
                <input className='inputBox' type="number" onChange={handleInputChange} value={dish.prepTime} name='prepTime' />
                {
                    errors.prepTime?
                    <p className='text-danger'>{errors.prepTime.message}</p>:
                    null
                }
                <br /><br />
                <label>Cook Time in minutes</label>
                <input className='inputBox' type="number" onChange={handleInputChange} value={dish.cookTime} name='cookTime' />
                {
                    errors.cookTime?
                    <p className='text-danger'>{errors.cookTime.message}</p>:
                    null
                }
                <br /><br />
                <label>Ingredients with measurements</label>
                <br />
                <textarea className='entryBox' type="textarea" onChange={handleInputChange} value={dish.ingredients} name='ingredients' style={{ height: '200px', width: '400px', whiteSpace: 'pre-wrap'}} />
                {
                    errors.ingredients?
                    <p className='text-danger'>{errors.ingredients.message}</p>:
                    null
                }
                <br /><br />
                <label>Directions: </label>
                <br />
                <textarea className='entryBox' type="text" onChange={handleInputChange} value={dish.description} name='description' style={{ height: '200px', width: '400px', whiteSpace: 'pre-wrap'}} />
                {
                    errors.description?
                    <p className='text-danger'>{errors.description.message}</p>:
                    null
                }
                <br /><br />
                <button className='btn' >Create</button>
            </form>
            <br  /><br  />
                
        </div>
        </div>
    )
}

export default DishForm;