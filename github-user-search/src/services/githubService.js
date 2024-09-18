import axios from "axios";

export async function fetchUserData ({ username, location, minRepos }) {
    try {
        let query = '';
        if (username) query += `user:${username}`;
        if (location) query += ` location:${location}`;
        if (minRepos) query += ` repos:>=${minRepos}`;

        const response = await axios.get(`https://api.github.com/search/users?q=${encodeURIComponent(query)}`);
        return response.data.items; 
    } catch (error) {
        console.error("Error fetching users:", error);
        throw new Error("Error fetching users");
    }
}
