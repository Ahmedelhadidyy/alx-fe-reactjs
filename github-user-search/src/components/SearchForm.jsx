import  { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function SearchForm( setUser ) {
        const [username, setUsername] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault(); 
        setLoading(true); 
        setError('');
        
        try {
            const userData = await fetchUserData(username);
            setUser(userData); 
        } catch (setError) {
            setError('Looks like we can’t find the user.');
        } finally {
            setLoading(false); 
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="mb-4">
                <input
                    type="text"
                    placeholder="Search GitHub User"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} 
                    className="border p-2 rounded mr-2"
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded"
                    disabled={loading} 
                >
                    {loading ? 'Loading...' : 'Search'}
                </button>
            </form>
            {error && <p className="text-red-500">{error}</p>}
        </div>
    );
}





export default SearchForm;
