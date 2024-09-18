import { useState } from "react";
import { fetchUserData } from "../services/githubService"; 

function Search() {
    const [username, setUsername] = useState("");
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const userData = await fetchUserData(username);
            setUser(userData);
        } catch (setError) {
            setError("Looks like we cant find the user");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="search-container">
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter GitHub username"
                />
                <button type="submit">Search</button>
            </form>

            {loading && <p>Loading...</p>}

            {error && <p>{error}</p>}

            {user && (
                <div className="user-info">
                    <img src={user.avatar_url} alt={`${user.login}'s avatar`} />
                    <h2>{user.login}</h2>
                    <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                        View GitHub Profile
                    </a>
                </div>
            )}
        </div>
    );
}

export default Search