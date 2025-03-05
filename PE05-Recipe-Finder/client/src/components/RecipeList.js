import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function RecipeList() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/recipes')
            .then(response => setRecipes(response.data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">Recipes</h1>
            <Link to="/add" className="btn btn-primary mb-3">Add Recipe</Link>
            <ul className="list-group">
                {recipes.map(recipe => (
                    <li key={recipe._id} className="list-group-item">
                        <Link to={`/recipe/${recipe._id}`} className="text-decoration-none">{recipe.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default RecipeList;
