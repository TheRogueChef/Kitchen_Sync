import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link,useNavigate, useParams } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import kitchensink2 from '../images/kitchensink2.jpg';

const Update = (props) => {
    const { id } = useParams();
    const [title, setTitle] = useState();
    const [servings, setServings] = useState();
    const [prepTime, setPrepTime] = useState();
    const [cookTime, setCookTime] = useState();
    const [ingredients, setIngredients] =useState([]);
    const [description, setDescription] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/oneDish/'+ id)
            .then(res => {
                setTitle(res.data.title);
                setServings(res.data.servings);
                setPrepTime(res.data.prepTime);
                setCookTime(res.data.cookTime);
                setIngredients(res.data.ingredients);
                setDescription(res.data.description);
            })
            .catch(err=> console.log(err))
    }, [])

    const updateDish = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/updateDish/'+ id, {
            title,
            servings,
            prepTime,
            cookTime,
            ingredients,
            description
        })
            .then(res => {
                console.log(res);
                navigate('/displayPage');
            })
            .catch(err => console.log(err))
    };

    return(
        <div className='container3'>
            <div className='logLeft'>
                <Image className='dashPicL' src={kitchensink2} alt='...'/>
                <p className= 'dishLogo'>My Kitchen Sync</p>
                <br /><br />
                <Link className='btn' to={'/displayPage'}>Home</Link>
            </div>   
        <div className='details'>
            <h1 className='pageTitle'>Update Recipe</h1>
            <form onSubmit={updateDish}>
                <br  />
                <p>
                    <label>Title</label><br />
                    <input type='text'
                    name='title'
                    className='inputBox'
                    value={title}
                    onChange={(e) => { setTitle(e.target.value) }} />
                </p>
                <p>
                <label>Servings</label><br />
                    <input type='number'
                    name='servings'
                    className='inputBox'
                    value={servings}
                    onChange={(e) => { setServings(e.target.value) }} />
                </p>
                <p>
                <label>Prep Time (in minutes)</label><br />
                    <input type='number'
                    name='prepTime'
                    className='inputBox'
                    value={prepTime}
                    onChange={(e) => { setPrepTime(e.target.value) }} />
                </p>
                <p>
                <label>Cook Time (in minutes)</label><br />
                    <input type='number'
                    name='cookTime'
                    className='inputBox'
                    value={cookTime}
                    onChange={(e) => { setCookTime(e.target.value) }} />
                </p>
                <br  />
                <p>
                <label>Ingredients w/measurements</label><br />
                    <textarea
                    name='ingredients'
                    className='entryBox'
                    value={ingredients.map(ingredient => ingredient.original).join('\n')}
                    onChange={(e) => {
                        const value = e.target.value;
                        const lines = value.split("\n");
                        setIngredients(lines.map(line => ({ original: line })));
                    }}
                    
                    />
                </p>
                <p>
                <label>Directions</label><br />
                    <textarea
                    name='description'
                    className='entryBox'
                    value={description}
                    onChange={(e) => { setDescription(e.target.value) }}
                    /> 
                </p>
                <br  /><br  />
                <input className='btn' type='submit'/>
                <br  /><br  />
            </form>
        </div>
        </div>
    )}

export default Update;
