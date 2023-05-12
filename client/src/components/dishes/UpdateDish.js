import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link,useNavigate, useParams } from 'react-router-dom';
import modernblack from '../images/modernblack.jpg';


const Update = (props) => {
    const { id } = useParams();
    const [title, setTitle] = useState();
    const [servings, setServings] = useState();
    const [prepTime, setPrepTime] = useState();
    const [cookTime, setCookTime] = useState();
    const [description, setDescription] = useState();
    const navigate = useNavigate();


    useEffect(() => {
        axios.get('http://localhost:8000/api/oneDish/'+ id)
            .then(res => {
                setTitle(res.data.title);
                setServings(res.data.servings);
                setPrepTime(res.data.prepTime);
                setCookTime(res.data.cookTime);
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
            description
        })
            .then(res => {
                console.log(res);
                navigate('/displayPage');
            })
            .catch(err => console.log(err))
    };

    return(
        <div className='container3' style={{
            backgroundImage:`url(${modernblack})`
        }}>
        <div className='details3'>
            <h1>Update Dish</h1>
            <form className='w-25' onSubmit={updateDish}>
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
                <p>
                <label>Description</label><br />
                    <input type='textarea'
                    name='description'
                    value={description}
                    onChange={(e) => { setDescription(e.target.value) }} /> 
                </p>
                <br  /><br  />
                <br  /><br  />
                <input className='btn btn-success' type='submit'/>
                <br  /><br  />
                <Link className='btn' to={'/displayPage'}>Home</Link>
                <br  /><br  />
            </form>
        </div>
        </div>
    )

}

export default Update;
