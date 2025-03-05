import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AddRecipe() {
    const [name, setName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/api/recipes', { 
            name, 
            ingredients: ingredients.split(','), 
            instructions 
        });
        navigate('/');
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center">Add New Recipe</h2>
            <form onSubmit={handleSubmit} className="mt-3">
                <div className="mb-3">
                    <label className="form-label">Recipe Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Ingredients (comma separated)</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={ingredients} 
                        onChange={(e) => setIngredients(e.target.value)} 
                        required 
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Instructions</label>
                    <textarea 
                        className="form-control" 
                        rows="4" 
                        value={instructions} 
                        onChange={(e) => setInstructions(e.target.value)} 
                        required
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-success w-100">Add Recipe</button>
            </form>
        </div>
    );
}

export default AddRecipe;
