import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import AddRecipeForm from './components/AddRecipeForm';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

const App = () => {
  return (
    <Router>
      <h1>Recipe Sharing Application</h1>
      <AddRecipeForm />
      <FavoritesList />
      <RecommendationsList /> 
      <Routes>
        <Route path="/"  element={< RecipeDetails/>} />
        <Route path="/recipe" element={<RecipeList />} />
      </Routes>
    </Router>
    
  );
};

export default App;
