import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link,useNavigate, useParams } from 'react-router-dom';

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
        <div className='container6' style={{
            backgroundImage:`transparent`
        }}>
        <div className='details5'>
            <h1 style={{ color: 'greenyellow', fontWeight: 'bolder', textDecoration: 'underline'}}>Update Recipe</h1>
            <form className='w-25' onSubmit={updateDish}>
                <br  />
                <p>
                    <label>Title</label><br />
                    <input type='text'
                    name='title'
                    value={title}
                    onChange={(e) => { setTitle(e.target.value) }} />
                </p>
                <p>
                <label>Servings</label><br />
                    <input type='number'
                    name='servings'
                    value={servings}
                    onChange={(e) => { setServings(e.target.value) }} />
                </p>
                <p>
                <label>Prep Time (in minutes)</label><br />
                    <input type='number'
                    name='prepTime'
                    value={prepTime}
                    onChange={(e) => { setPrepTime(e.target.value) }} />
                </p>
                <p>
                <label>Cook Time (in minutes)</label><br />
                    <input type='number'
                    name='cookTime'
                    value={cookTime}
                    onChange={(e) => { setCookTime(e.target.value) }} />
                </p>
                <br  />
                <p>
                <label>Ingredients w/measurements</label><br />
                    <textarea
                    name='ingredients'
                    value={ingredients.map(ingredient => ingredient.original).join('\n')}
                    onChange={(e) => {
                        const value = e.target.value;
                        const lines = value.split("\n");
                        setIngredients(lines.map(line => ({ original: line })));
                    }}
                    style={{ height: '200px', width: '400px', whiteSpace: 'pre-wrap'}}
                    />
                </p>
                <p>
                <label>Directions</label><br />
                    <textarea
                    name='description'
                    value={description}
                    onChange={(e) => { setDescription(e.target.value) }}
                    style={{ height: '200px', width: '400px', whiteSpace: 'pre-wrap'}}
                    /> 
                </p>
                <br  /><br  />
                <input className='btn btn-success' type='submit'/>
                <br  /><br  />
                <Link className='btn' to={'/displayPage'}>Home</Link>
                <br  /><br  />
            </form>
        </div>
        </div>
    )}

export default Update;
