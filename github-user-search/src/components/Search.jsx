import { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
    const [username, setUsername] = useState("");
    const [location, setLocation] = useState("");
    const [minRepos, setMinRepos] = useState("");
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const usersData = await fetchUserData({ username, location, minRepos });
            setUsers(usersData);
        } catch (setError) {
            setError("No users found with the specified criteria.");
            setUsers([]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="search-container p-4 max-w-md mx-auto">
            <form onSubmit={handleSearch} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter GitHub username"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Location"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="number"
                        value={minRepos}
                        onChange={(e) => setMinRepos(e.target.value)}
                        placeholder="Minimum Repositories"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Search
                </button>
            </form>

            {loading && <p>Loading...</p>}

            {error && <p>{error}</p>}

            <div className="results">
                {users.length > 0 && users.map(user => (
                    <div key={user.id} className="user-card p-4 mb-4 border rounded shadow-md">
                        <img src={user.avatar_url} alt={`${user.login}'s avatar`} className="w-16 h-16 rounded-full" />
                        <h2 className="text-lg font-bold">{user.login}</h2>
                        <p>Location: {user.location || "N/A"}</p>
                        <p>Repositories: {user.public_repos}</p>
                        <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">View GitHub Profile</a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Search;
