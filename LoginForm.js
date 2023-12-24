// Import the necessary modules from react-router-dom
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = () => {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*\d).{8,}$/;
    const nameRegex = /^[a-zA-Z\s]+$/;

    if (!name || !email || !password) {
      setError('Please enter all fields.');
    } else if (!password.match(passwordRegex)) {
      setError('Password must contain at least one special character and one number.');
    } else if (!name.match(nameRegex)) {
      setError('Please enter a valid name (only letters and spaces).');
    } else {
      setError('');
      // Redirect to the homepage using useNavigate
      navigate('/');
    }
  };

  return (
    <div className="login-page">
      <div className="form-container">
        <h2>Login</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleLogin}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account?{' '}
          <Link to="/SignupForm">Signup</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;