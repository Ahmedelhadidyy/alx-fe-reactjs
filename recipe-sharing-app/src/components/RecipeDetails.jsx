import { useParams } from 'react-router-dom';
import useRecipeStore from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { recipeId } = useParams();
  
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === recipeId)
  );
  if (!recipe) {
    return <div>Recipe not found</div>;
  }


  return (
    <div>
    <EditRecipeForm recipeId={recipeId} />
    <DeleteRecipeButton recipeId={recipeId} />
      {/* <h1>{recipe.title}</h1>
      <p>{recipe.description}</p> */}
    </div>
  );
};

export default RecipeDetails;

