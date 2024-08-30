;import { Navigate } from 'react-router-dom';
import { useAuth } from '../useAuth';

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth(); // Use the useAuth hook to get the authentication status

  if (!isAuthenticated) {
    // If the user is not authenticated, redirect to the login page
    return <Navigate to="/login" replace />;
  }

  // If the user is authenticated, render the protected content
  return ;
};

export default ProtectedRoute;
