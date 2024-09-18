import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/users';

export const fetchUserData = async (username) => {
    const response = await axios.get(`${GITHUB_API_URL}/${username}`);
    return response.data;
};


export async function fetchAdvancedUserData({ username, location, minRepos }) {
    try {
        let query = "";
        if (username) query += `user:${username}`;
        if (location) query += ` location:${location}`;
        if (minRepos) query += ` repos:>=${minRepos}`;

        const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
        return response.data.items; // This returns an array of user objects
    } catch (error) {
        throw new Error("Error fetching users");
    }
}
