import { useState } from 'react';
import './App.css';
import SearchForm from './components/SearchForm';
import UserProfile from './components/UserProfile';

function App() {
    const [user, setUser] = useState(null);

    return (
        <div className="App">
            <h1>GitHub User Search</h1>
            <SearchForm setUser={setUser} /> 
            {user && <UserProfile user={user} />}
        </div>
    );
}

export default App;


