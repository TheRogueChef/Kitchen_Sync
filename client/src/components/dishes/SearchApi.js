import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import modernblack from '../images/modernblack.jpg';

const RecipeDetails = ({ recipe, addToLibrary }) => {
    const [detailedRecipe, setDetailedRecipe] = useState(null);

    useEffect(() => {
        axios
            .get(
                `https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=f375f3f672264e72a7c6a445b4839f13`
            )
            .then((res) => {
                setDetailedRecipe(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [recipe.id]);

    return (
        <ul className='details6' key={recipe.id}>
            {detailedRecipe ? (
                <>
                    <h1 style={{ color: 'greenyellow', textDecoration: 'underline', fontWeight: 'bold' }}>{detailedRecipe.title}</h1>
                    <p>Serves: {detailedRecipe.servings}</p>
                    <p>Prep Time: {detailedRecipe.preparationMinutes} minutes</p>
                    <p>Cook Time: {detailedRecipe.readyInMinutes} minutes</p>
                    <p >Ingredients:</p>
                    <ul style={{ marginRight: '50px' }} >
                        {detailedRecipe.extendedIngredients.map((ingredient) => (
                            <ul key={ingredient.id}>{ingredient.original}</ul>
                        ))}
                    </ul>
                    <p>Directions: {detailedRecipe.instructions}</p>
                </>
            ) : (
                <p>Loading...</p>
            )}
            <button className='btn2' onClick={() => addToLibrary(detailedRecipe)}>
                Add to library
            </button>
        </ul>
    );
};

const SearchApi = (props) => {
    const [ingredients, setIngredients] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        if (ingredients) {
            axios
                .get(
                    `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&apiKey=f375f3f672264e72a7c6a445b4839f13&number=5`
                )
                .then((res) => {
                    setSearchResults(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [ingredients]);

    const submitHandler = (e) => {
        e.preventDefault();
        setIngredients(searchQuery);
    };

    const addToLibrary = (recipe) => {
        axios
            .post('http://localhost:8000/api/newDish', {
                title: recipe.title,
                servings: recipe.servings,
                prepTime: recipe.preparationMinutes,
                cookTime: recipe.readyInMinutes,
                ingredients: recipe.extendedIngredients,
                description: recipe.instructions,
            })
            .then((res) => {
                navigate('/displayPage');
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className='container7' style={{ backgroundImage: `url(${modernblack})` }}>
            <form className='details4' onSubmit={submitHandler}>

                <h2 style={{ color: 'greenyellow', textDecoration: 'underline' }}>What ingredient do you want to use?</h2>
                <br  />
                <input
                    type='text'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder='Enter ingredients (comma-separated)'
                />
                <button type='submit'>Search</button>
            </form>
            <br /><br />
                <div className='buttonHolder'>
                    <a href='/DisplayPage'>
                        <button className='btn3'>Take me Home</button>
                    </a>
                </div>
            {searchResults && searchResults.length > 0 ? (
                <ul style={{}}>
                    {searchResults.map((recipe) => (
                        <RecipeDetails key={recipe.id} recipe={recipe} addToLibrary={addToLibrary} />
                    ))}
                </ul>
            ) : null}

        </div>
    );
};

export default SearchApi;



