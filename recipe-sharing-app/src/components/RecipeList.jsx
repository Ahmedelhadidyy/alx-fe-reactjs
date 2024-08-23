import useRecipeStore from "./recipeStore";

const RecipeList = () => {
    // const recipes = useRecipeStore(state => state.recipes);
    const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div>
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe) => (
          <div key={recipe.id} className="p-4 mb-2 border rounded-md">
            <h2 className="text-lg font-semibold">{recipe.title}</h2>
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