import React, { useState } from 'react';
import './SignupForm.css';
import { Link, useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const navigate = useNavigate(); // Use useNavigate to get access to the navigate function
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();

    if (!username || !password || !confirmPassword) {
      setError('Please fill in all fields.');
    } else if (password !== confirmPassword) {
      setError('Passwords do not match.');
    } else if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
    } else if (!/^(?=.*[a-zA-Z])[\w.]+$/.test(username)) {
      setError(
        'Username must contain only letters, numbers, underscores, or dots and must start with a letter.'
      );
    } else {
      setError('');
      console.log(`Signing up with username: ${username} and password: ${password}`);
      
      // Redirect to the homepage using useNavigate
      navigate('/');
    }
  };

  return (
    <div className='back'>
      <div className="form-container">
        <h2>Signup</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleSignup}>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
          <label>
            Confirm Password:
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Signup</button>
        </form>
        <p>
          Already have an account?{' '}
          <Link to="/LoginForm">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;