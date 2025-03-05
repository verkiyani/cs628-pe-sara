import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function EditRecipe() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [recipe, setRecipe] = useState({
        name: '',
        ingredients: '',
        instructions: ''
    });
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:5000/api/recipes/${id}`)
            .then(response => {
                setRecipe({
                    name: response.data.name,
                    ingredients: response.data.ingredients.join(', '),
                    instructions: response.data.instructions
                });
            })
            .catch(error => {
                setError('Error fetching recipe details');
                console.error(error);
            });
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:5000/api/recipes/${id}`, {
                name: recipe.name,
                ingredients: recipe.ingredients.split(',').map(item => item.trim()),
                instructions: recipe.instructions
            });
            navigate(`/recipe/${id}`);
        } catch (error) {
            setError('Error updating recipe');
            console.error(error);
        }
    };

    const handleChange = (e) => {
        setRecipe({
            ...recipe,
            [e.target.name]: e.target.value
        });
    };

    if (error) {
        return <div className="alert alert-danger m-3">{error}</div>;
    }

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Edit Recipe</h2>
            <form onSubmit={handleSubmit} className="mt-3">
                <div className="mb-3">
                    <label className="form-label">Recipe Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="name"
                        value={recipe.name} 
                        onChange={handleChange}
                        required 
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Ingredients (comma separated)</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="ingredients"
                        value={recipe.ingredients} 
                        onChange={handleChange}
                        required 
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Instructions</label>
                    <textarea 
                        className="form-control" 
                        rows="4" 
                        name="instructions"
                        value={recipe.instructions} 
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <div className="d-flex gap-2">
                    <button type="submit" className="btn btn-primary">Save Changes</button>
                    <button type="button" className="btn btn-secondary" onClick={() => navigate(`/recipe/${id}`)}>Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default EditRecipe; 