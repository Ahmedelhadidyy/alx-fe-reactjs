
import './App.css';

// Components (you will create these files later)
import SearchForm from './components/SearchForm';
import UserProfile from './components/UserProfile';

function App() {
    return (
        <div className="App">
            <h1>GitHub User Search</h1>
            <SearchForm />
            <UserProfile />
        </div>
    );
}

export default App;

