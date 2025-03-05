import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AddRecipe() {
    const [formData, setFormData] = useState({
        name: '',
        ingredients: '',
        instructions: ''
    });
    const [errors, setErrors] = useState({});
    const [submitError, setSubmitError] = useState('');
    const navigate = useNavigate();

    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.name.trim()) {
            newErrors.name = 'Recipe name is required';
        }

        if (!formData.ingredients.trim()) {
            newErrors.ingredients = 'Ingredients are required';
        }

        if (!formData.instructions.trim()) {
            newErrors.instructions = 'Instructions are required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitError('');

        if (!validateForm()) {
            return;
        }

        try {
            await axios.post('http://localhost:5000/api/recipes', {
                name: formData.name.trim(),
                ingredients: formData.ingredients.split(',').map(item => item.trim()).filter(item => item),
                instructions: formData.instructions.trim()
            });
            navigate('/');
        } catch (error) {
            setSubmitError('Error adding recipe');
            console.error(error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error for the field being edited
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Add New Recipe</h2>
            {submitError && (
                <div className="alert alert-danger">{submitError}</div>
            )}
            <form onSubmit={handleSubmit} className="mt-3">
                <div className="mb-3">
                    <label className="form-label">Recipe Name</label>
                    <input 
                        type="text" 
                        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                        name="name"
                        value={formData.name} 
                        onChange={handleChange}
                    />
                    {errors.name && (
                        <div className="invalid-feedback">{errors.name}</div>
                    )}
                </div>
                <div className="mb-3">
                    <label className="form-label">Ingredients (comma separated)</label>
                    <input 
                        type="text" 
                        className={`form-control ${errors.ingredients ? 'is-invalid' : ''}`}
                        name="ingredients"
                        value={formData.ingredients} 
                        onChange={handleChange}
                    />
                    {errors.ingredients && (
                        <div className="invalid-feedback">{errors.ingredients}</div>
                    )}
                </div>
                <div className="mb-3">
                    <label className="form-label">Instructions</label>
                    <textarea 
                        className={`form-control ${errors.instructions ? 'is-invalid' : ''}`}
                        rows="4" 
                        name="instructions"
                        value={formData.instructions} 
                        onChange={handleChange}
                    ></textarea>
                    {errors.instructions && (
                        <div className="invalid-feedback">{errors.instructions}</div>
                    )}
                </div>
                <div className="d-flex gap-2">
                    <button type="submit" className="btn btn-success">Add</button>
                    <button type="button" className="btn btn-secondary" onClick={() => navigate('/')}>Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default AddRecipe;
