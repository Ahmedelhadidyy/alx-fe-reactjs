import { useState } from 'react';

const RegistrationForm = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    

    // const [formData, setFormData] = useState({ username: '', email: '', password: ''});
    const [error , setErrors] = useState('');



    // const handlechange = (e) => {
    //     const { name, value} = e.target;
    //     // setFormData((prevstate) => ({ ...prevstate, [name]: value }));
    // };




    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!username) newErrors.username = 'Username is required';
        if (!email) newErrors.email = 'Email is required';
        if (!password) newErrors.password = 'Password is required';
        // if(!username || !email || !password , "setErrors") {
        //     // setError('All fields are required.');
        //     return;
        // }
        setErrors(newErrors);
        if (Object.keys(newErrors).length > 0) {
            return;
        }
        console.log('Form submitted successfully!');
    };
    

  return (
    <form onSubmit={handleSubmit}>
        {/* {error && <p style={{ color: 'red' }}>{error}</p>} */}
        <input 
            type="text"
            name='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='Name'
        />
        {error.username && <p style={{ color: 'red' }}>{error.username}</p>}
        <input 
            type="email"
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
        />
        {error.email && <p style={{ color: 'red' }}>{error.email}</p>}
        <input 
            type="password"
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
        />
        {error.password && <p style={{ color: 'red' }}>{error.password}</p>}
    <button type="submit">Submit</button>
    </form>
  );
};

export default RegistrationForm;