import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import AddRecipe from './components/AddRecipe';
import EditRecipe from './components/EditRecipe';

function App() {
    return (
        <Router>
            <Routes>
                {/* Main Layout Route */}
                <Route path="/" element={<Layout />}>
                    {/* Nested Routes */}
                    <Route index element={<RecipeList />} />
                    <Route path="add" element={<AddRecipe />} />
                    <Route path="recipe/:id" element={<RecipeDetails />} />
                    <Route path="recipe/:id/edit" element={<EditRecipe />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
