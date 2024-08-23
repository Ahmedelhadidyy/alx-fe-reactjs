import useRecipeStore from './recipeStore';

const DeleteRecipeButton = () => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleDelete = () => {
    deleteRecipe(parseInt());
    history.push('/recipes'); 
  };

  return <button onClick={handleDelete}>Delete Recipe</button>;
};

export default DeleteRecipeButton;
