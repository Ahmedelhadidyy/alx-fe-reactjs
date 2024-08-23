import { useState } from 'react';
import useRecipeStore from './recipeStore';


const EditRecipeForm = () => {
    const { recipes, updateRecipe } = useRecipeStore();
    const recipe = recipes.find((recipe) => recipe.id === parseInt());

    const [title, setTitle] = useState(recipe?.title || '');
    const [description, setDescription] = useState(recipe?.description || '');

    const handleSubmit = (event) => {
        event.preventDefault();
        updateRecipe(parseInt(), { title, description });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Recipe Title" />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Recipe Description" />
            <button type="submit">Save Changes</button>
        </form>
    );
}

export default EditRecipeForm;
