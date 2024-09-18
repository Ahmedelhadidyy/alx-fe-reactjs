import Services from './services/services';
import './App.css';

import SearchForm from './components/SearchForm';
import UserProfile from './components/UserProfile';

function App() {
    return (
        <div className="App">
            <h1>GitHub User Search</h1>
            <SearchForm />
            <UserProfile />
            <Services />
        </div>
    );
}

export default App;

