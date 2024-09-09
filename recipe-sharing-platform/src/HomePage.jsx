import { useState, useEffect } from "react";

const HomePage = () => {

    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        fetch('/data.json')
          .then((response) => response.json())
          .then((data) => setRecipes(data))
          .catch((error) => console.error('Error fetching recipes:', error));
      }, []);

  return (
    <div className="p-6">
    <h1 className="text-2xl font-bold text-center mb-6">Recipe Sharing Platform</h1>
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          className="max-w-sm rounded overflow-hidden shadow-lg hover:scale-110 transition-transform duration-500 ease-in-out"
        >
          <img className="w-full h-48 object-cover" src={recipe.image} alt={recipe.title} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{recipe.title}</div>
            <p className="text-gray-700 text-base">{recipe.summary}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <button className="bg-blue-500 hover:bg-blue-700 hover:scale-110 transition-transform duration-300 ease-in-out text-white font-bold py-2 px-4 rounded">
              View Recipe
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);
};

export default HomePage