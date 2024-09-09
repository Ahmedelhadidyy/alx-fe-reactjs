import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {

    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        fetch('/src/data.json')
          .then((response) => response.json())
          .then((data) => setRecipes(data))
          .catch((error) => console.error('Error fetching recipes:', error));
      }, []);

  return (
    <div className="p-6 bg-gray-400">
    <h1 className="text-2xl font-bold text-center mb-6 text-blue-900">Recipe Sharing Platform</h1>
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          className="max-w-sm rounded-xl overflow-hidden shadow-lg hover:scale-110 hover:shadow-xl transition-transform duration-500 ease-in-out bg-gray-600"
        >
          <img className="w-full h-48 object-cover" src={recipe.image} alt={recipe.title} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-blue-900">{recipe.title}</div>
            <p className="text-gray-700 text-base">{recipe.summary}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <Link to={`/recipe/${recipe.id}`}>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 hover:scale-110 transition-transform duration-300 ease-in-out">
                View Recipe
              </button>
            </Link>
          </div>  
        </div>
      ))}
    </div>
    <div className="flex justify-between mt-16">
                
            <Link to="/addrecipeform">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 hover:scale-110 transition-transform duration-500 ease-in-out w-40">
              Add Recipe
              </button>
            </Link>
                
            </div>
  </div>
);
};

export default HomePage