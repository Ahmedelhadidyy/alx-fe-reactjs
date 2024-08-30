import { Routes, Route, Link, useParams } from 'react-router-dom';
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';

const UserProfile = () => {
    const { userId } = useParams();
    return <div>User Profile for User ID: {userId}</div>;
  };

const Profile = () => {
  return (
    <div>
        <h1>Profile</h1>
        <nav>
            <Link to="/details">Profile Details</Link>
            <Link to="/settings">Profile Settings</Link>
            <Link to="user/123">User Profile</Link>
        </nav>
        <Routes>
        <Route path="/details" element={<ProfileDetails />} />
        <Route path="/settings" element={<ProfileSettings />} />
        <Route path="user/:userId" element={<UserProfile />} />
        </Routes>
    </div>
  )
}

export default Profile