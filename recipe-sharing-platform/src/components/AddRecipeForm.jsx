import {useState} from 'react';
import { Link } from 'react-router-dom';

const AddRecipeForm = () => {

    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [steps, setSteps] = useState('');
    const [errors, setErrors] = useState('');

    const validate = () => {

        const validaionErrors = {};

        if (!title.trim()) validaionErrors.title = 'Title is required';
        if (!ingredients.trim()) validaionErrors.ingredients = 'Ingredients are required';
        if (!steps.trim()) validaionErrors.steps = 'Steps are required';
        return validaionErrors;

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const validaionErrors = validate();

        
        setErrors(validaionErrors);
        if (Object.keys(validaionErrors).length === 0) {
            console.log('Form submitted successfully!', {title, ingredients, steps})

            setTitle('');
            setIngredients('');
            setSteps('');
        }
    };

    return (
        <div className=" mx-auto p-6 bg-gray-400 rounded-lg shadow-md mt-10">
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-900">Add a New Recipe</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="title">
                Recipe Title
              </label>
              <input
                type="text"
                id="title"
                className="w-full p-2 border border-gray-300 rounded"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
            </div>
    
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="ingredients">
                Ingredients
              </label>
              <textarea
                id="ingredients"
                className="w-full p-2 border border-gray-300 rounded"
                rows="4"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
              ></textarea>
              {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
            </div>
    
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="steps">
                Preparation Steps
              </label>
              <textarea
                id="steps"
                className="w-full p-2 border border-gray-300 rounded"
                rows="4"
                value={steps}
                onChange={(e) => setSteps(e.target.value)}
              ></textarea>
              {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
            </div>
    
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Add Recipe
            </button>
          </form>
          <div className="flex justify-between mt-16">
                <Link to="/">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 hover:scale-110 transition-transform duration-500 ease-in-out">
              Back to HomePage
              </button>
            </Link>
            
                
            </div>  
        </div>
      );
    };

export default AddRecipeForm