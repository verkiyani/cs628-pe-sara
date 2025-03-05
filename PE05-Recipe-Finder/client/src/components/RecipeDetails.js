import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function RecipeDetails() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:5000/api/recipes/${id}`)
            .then(response => setRecipe(response.data))
            .catch(error => console.log(error));
    }, [id]);

    const handleDelete = async () => {
        await axios.delete(`http://localhost:5000/api/recipes/${id}`);
        navigate('/');
    };

    if (!recipe) return <p className="text-center mt-4">Loading...</p>;

    return (
        <div className="container mt-4">
            <div className="card">
                <div className="card-body">
                    <h1 className="card-title">{recipe.name}</h1>
                    <h5 className="card-subtitle mb-3">Ingredients:</h5>
                    <ul className="list-group mb-3">
                        {recipe.ingredients.map((item, index) => (
                            <li key={index} className="list-group-item">{item}</li>
                        ))}
                    </ul>
                    <h5 className="card-subtitle mb-3">Instructions:</h5>
                    <p className="card-text">{recipe.instructions}</p>
                    <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </div>
    );
}

export default RecipeDetails;
