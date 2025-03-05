import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import AddRecipe from './components/AddRecipe';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<RecipeList />} />
                    <Route path="recipe/:id" element={<RecipeDetails />} />
                    <Route path="add" element={<AddRecipe />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
