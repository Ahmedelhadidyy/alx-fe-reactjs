import { useState } from 'react';

const RegistrationForm = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    

    // const [formData, setFormData] = useState({ username: '', email: '', password: ''});
    const [error , setError] = useState('');



    // const handlechange = (e) => {
    //     const { name, value} = e.target;
    //     // setFormData((prevstate) => ({ ...prevstate, [name]: value }));
    // };




    const handleSubmit = (e) => {
        e.preventDefault();

        if(!username || !email || !password) {
            setError('All fields are required.');
            return;
        }
        setError('');
        console.log('Form submitted successfully!');
    };
    

  return (
    <form onSubmit={handleSubmit}>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <input 
            type="text"
            name='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='Name'
        />
        <input 
            type="email"
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
        />
        <input 
            type="password"
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
        />
    <button type="submit">Submit</button>
    </form>
  );
};

export default RegistrationForm;