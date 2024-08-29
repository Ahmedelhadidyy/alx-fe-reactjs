import { useState } from 'react';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({ username: '', email: '', password: ''});
    const [error , setError] = useState('');



    const handlechange = (e) => {
        const { name, value} = e.target;
        setFormData((prevstate) => ({ ...prevstate, [name]: value }));
    };




    const handleSubmit = (e) => {
        e.preventDefault();

        if(!formData.username || !formData.email || !formData.password) {
            setError('All fields are required.');
            return;
        }
        setError('');
        console.log(formData);
    };
    

  return (
    <form onSubmit={handleSubmit}>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <input 
            type="text"
            name='username'
            value={formData.username}
            onChange={handlechange}
            placeholder='Name'
        />
        <input 
            type="email"
            name='email'
            value={formData.email}
            onChange={handlechange}
            placeholder='Email'
        />
        <input 
            type="password"
            name='password'
            value={formData.password}
            onChange={handlechange}
            placeholder='Password'
        />
    <button type="submit">Submit</button>
    </form>
  );
};

export default RegistrationForm;