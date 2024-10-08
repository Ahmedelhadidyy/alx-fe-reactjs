import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";


const RecipeDetail = () => {

    const {id} = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        fetch('/src/data.json')
            .then(response => response.json())
            .then((data) => {
                const selectedRecipe = data.find(recipe => recipe.id === parseInt(id));
                setRecipe(selectedRecipe);
            })
            .catch((error) => console.error('Error fetching recipe details:', error));
        }, [id]);

        if (!recipe) {
            return <div>Loading...</div>; 
          }
        

          return (
            <div className=" mx-auto p-6  bg-gray-400">
              <h1 className="text-3xl font-bold text-center mb-4 text-blue-900">{recipe.title}</h1>
              <img className="w-full h-64 object-cover rounded mb-4 shadow-2xl" src={recipe.image} alt={recipe.title} />
              <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-2 text-blue-700">Ingredients</h2>
                <ul className="list-disc list-inside">
                  {recipe.ingredients && recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="text-gray-700">{ingredient}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-2 text-blue-700">Cooking Instructions</h2>
                <ol className="list-decimal list-inside">
                  {recipe.instructions && recipe.instructions.map((step, index) => (
                    <li key={index} className="text-gray-700 mb-2">{step}</li>
                  ))}
                </ol>
              </div>

            <div className="flex justify-between">
                <Link to="/">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 hover:scale-110 transition-transform duration-500 ease-in-out">
              Back to HomePage
              </button>
            </Link>
            
            <Link to="/addrecipeform">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 hover:scale-110 transition-transform duration-500 ease-in-out">
              Add Recipe
              </button>
            </Link>
                
            </div>  
            

            </div>
          );
        };

export default RecipeDetail