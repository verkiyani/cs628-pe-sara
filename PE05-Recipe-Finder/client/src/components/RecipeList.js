import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function RecipeList() {
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:5000/api/recipes')
            .then(response => {
                setRecipes(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError('Error fetching recipes list');
                console.error(error);
                setLoading(false);
            });
    }, []);

    if (error) {
        return <div className="alert alert-danger m-3">{error}</div>;
    }

    if (loading) {
        return <div className="text-center mt-4">Loading...</div>;
    }

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">Recipes</h1>
            <Link to="/add" className="btn btn-primary mb-3">Add New Recipe</Link>
            {recipes.length === 0 ? (
                <div className="alert alert-info">No recipes found.</div>
            ) : (
                <ul className="list-group">
                    {recipes.map(recipe => (
                        <li key={recipe._id} className="list-group-item">
                            <Link to={`/recipe/${recipe._id}`} className="text-decoration-none">{recipe.name}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default RecipeList;
