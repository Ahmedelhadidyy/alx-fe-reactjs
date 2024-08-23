import useRecipeStore from './recipeStore';
import { useNavigate } from 'react-router-dom';
const DeleteRecipeButton = () => {
    const navigate = useNavigate();
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleDelete = () => {
    deleteRecipe(parseInt());
    history.push('/recipes');
    navigate('/'); 
  };

  return <button onClick={handleDelete}>Delete Recipe</button>;
};

export default DeleteRecipeButton;
