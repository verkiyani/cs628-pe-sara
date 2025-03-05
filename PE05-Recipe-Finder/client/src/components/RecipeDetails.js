import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function RecipeDetails() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:5000/api/recipes/${id}`)
            .then(response => {
                setRecipe(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError('Error fetching recipe details');
                console.error(error);
                setLoading(false);
            });
    }, [id]);

    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete this recipe?')) {
            try {
                await axios.delete(`http://localhost:5000/api/recipes/${id}`);
                navigate('/');
            } catch (error) {
                setError('Error deleting recipe');
                console.error(error);
            }
        }
    };

    if (error) {
        return <div className="alert alert-danger">{error}</div>;
    }

    if (loading) {
        return (
            <div className="text-center">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    if (!recipe) {
        return <div className="alert alert-warning">Recipe not found</div>;
    }

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1 className="h2 mb-0">{recipe.name}</h1>
                <Link to="/" className="btn btn-outline-secondary">
                    <i className="bi bi-arrow-left"></i> Back to List
                </Link>
            </div>
            
            <div className="card">
                <div className="card-body">
                    <h5 className="card-subtitle mb-3">Ingredients:</h5>
                    <ul className="list-group mb-3">
                        {recipe.ingredients.map((item, index) => (
                            <li key={index} className="list-group-item">{item}</li>
                        ))}
                    </ul>
                    <h5 className="card-subtitle mb-3">Instructions:</h5>
                    <p className="card-text">{recipe.instructions}</p>
                    <div className="d-flex gap-2">
                        <Link to={`/recipe/${id}/edit`} className="btn btn-primary">Edit</Link>
                        <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecipeDetails;
