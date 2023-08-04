import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Element, Link } from 'react-scroll';

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
        <ul className='details3' key={recipe.id}>
            {detailedRecipe ? (
                <>
                    <p className='pageTitle'>{detailedRecipe.title}</p>
                    <h1>Serves:</h1>
                    <p>{detailedRecipe.servings}</p>
                    <br />
                    <h1>Prep Time:</h1>
                    <p> {detailedRecipe.preparationMinutes} minutes</p>
                    <br />
                    <h1>Cook Time:</h1>
                    <p> {detailedRecipe.readyInMinutes} minutes</p>
                    <br />
                    <h1>Ingredients:</h1>
                    <ul style={{ marginRight: '7%' }} >
                        {detailedRecipe.extendedIngredients.map((ingredient) => (
                            <ul key={ingredient.id}>{ingredient.original}</ul>
                        ))}
                    </ul>
                    <br />
                    <h1>Directions</h1>
                    <p>{detailedRecipe.instructions}</p>
                </>
            ) : (
                <p>Loading...</p>
            )}
            <button className='btn' onClick={() => addToLibrary(detailedRecipe)}>
                Add to library
            </button>
            <br />
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
        <div className='container4'>
            <br />
            <Element name='top'>
            <div className='buttonHolder2'>
                <a href='/DisplayPage'>
                    <button className='btn'>Take me Home</button>
                </a>
            </div>
            </Element>
            <form className='details3' onSubmit={submitHandler}>

                <p className='pageTitle'>What ingredient do you want to use?</p>
                <p>Scroll down for your results</p>
                <br />
                <input
                    type='text'
                    value={searchQuery}
                    className='inputBox2'
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder='Enter ingredients (comma-separated)'
                />
                <br /><br />
                <button className='btn' type='submit'>Search</button>
            </form>
            <br /><br />

            {searchResults && searchResults.length > 0 ? (
                <ul style={{}}>
                    {searchResults.map((recipe) => (
                        <RecipeDetails key={recipe.id} recipe={recipe} addToLibrary={addToLibrary} />
                    ))}
                </ul>
            ) : null}
            <br />
            <Link to='top' className='slideLink' smooth={true} duration={500}>Back to Top</Link>
        </div>
    );
};

export default SearchApi;



