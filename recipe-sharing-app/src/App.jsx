import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={< RecipeDetails/>} />
        <Route path="/recipe" element={<RecipeList />} />
      </Routes>
    </Router>
    
  );
};

export default App;
