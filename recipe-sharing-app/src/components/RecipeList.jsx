import useRecipeStore from "./recipeStore";
import { Link } from "react-router-dom";

const RecipeList = () => {
    // const recipes = useRecipeStore(state => state.recipes);
    const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div>
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe) => (
          <div key={recipe.id}>
            <h2><Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link></h2>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No recipes found</p>
      )}
    </div>
  );
};

export default RecipeList