import { create } from "zustand";

const useRecipeStore = create( set => ({
    recipes: [],
    addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe],filteredRecipes: [...state.filteredRecipes, newRecipe].filter((r) =>
        r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),})),
    setRecipes: (recipes) => set({recipes}),
    updateRecipe: (id , updatedRecipe) => {set((state)=> ({ recipes: state.recipes.map(recipe => recipe.id === id ? {...recipe, ... updatedRecipe} : recipe)}))},
    _getRecipeById: (id) => {
        return set().recipes.find((recipe) => recipe.id === id);
    },
    searchTerm: '', 
    filteredRecipes: [],
    setSearchTerm: (term) => {
        set({ searchTerm: term });
        set((state) => ({
          filteredRecipes: state.recipes.filter((recipe) =>
            recipe.title.toLowerCase().includes(term.toLowerCase())
          ),
        }));
      },
    
    get getRecipeById() {
        return this._getRecipeById;
    },
    set getRecipeById(value) {
        this._getRecipeById = value;
    },
    updatedRecipe: (updatedRecipe) => set((state) => ({
        recipes: state.recipes.map((recipe) =>
          recipe.id === updatedRecipe.id ? updatedRecipe : recipe
        ),
        filteredRecipes: state.recipes
          .map((recipe) => (recipe.id === updatedRecipe.id ? updatedRecipe : recipe))
          .filter((recipe) =>
            recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
          ),
      })),
    deleteRecipe: (id) => {set((state) => ({recipes: state.recipes.filter(recipe => recipe.id !== id),}))}
    
    
}))
export default useRecipeStore