import { create } from "zustand";

const useRecipeStore = create( set => ({
    recipes: [],
    addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe]})),
    setRecipes: (recipes) => set({recipes}),
    updateRecipe: (id , updatedRecipe) => {set((state)=> ({ recipes: state.recipes.map(recipe => recipe.id === id ? {...recipe, ... updatedRecipe} : recipe)}))},
    _getRecipeById: (id) => {
        return set().recipes.find((recipe) => recipe.id === id);
    },
    get getRecipeById() {
        return this._getRecipeById;
    },
    set getRecipeById(value) {
        this._getRecipeById = value;
    },
    deleteRecipe: (id) => {set((state) => ({recipes: state.recipes.filter(recipe => recipe.id !== id),}))}
    
}))
export default useRecipeStore