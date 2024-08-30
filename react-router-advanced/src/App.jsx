import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/profile';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import BlogPost from './components/BlogPost';


const App = () => {

  return (
    <div>
      
      

      <Router>
        <nav>
          <Link to="/" style={{ margin: '0 10px' }}>Home</Link>
          <Link to="/login" style={{ margin: '0 10px' }}>Login</Link>
          <Link to="/profile" style={{ margin: '0 10px' }}>Profile</Link>
          <Link to="/blog/1" style={{ margin: '0 10px' }}>Blog Post 1</Link>
          <Link to="/blog/2" style={{ margin: '0 10px' }}>Blog Post 2</Link>
        </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
    </div>
    
  )
}

export default App