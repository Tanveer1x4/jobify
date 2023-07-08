import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/images/background.jpg';
import { loginUser } from '../app/features/userSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.user);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Dispatch the loginUser action
    dispatch(loginUser({ email, password }));

    // Reset the form
    setEmail('');
    setPassword('');
  };

  useEffect(() => {
    const handleAuthentication = async () => {
      // Wait for the authentication status to change
      while (!isAuthenticated) {
        await new Promise((resolve) => setTimeout(resolve, 100));
      }

      // Navigate to another page after authentication is successful
      navigate('/');
    };

    handleAuthentication();
  }, [isAuthenticated, navigate]);

  return (
    <div
    className="min-h-screen flex items-center justify-center bg-cover"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <div className="max-w-md w-full mx-auto p-8 bg-white bg-opacity-10 rounded">
      <h2 className="text-3xl text-white font-semibold mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-white">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2 text-white">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600"
        >
          Login
        </button>
      </form>
      <div className="mt-4 text-center">
        <span className="text-white">Don't have an account?</span>{' '}
        <Link to="/register" className="text-purple-500 hover:text-purple-700">
          Create Account
        </Link>
      </div>
    </div>
  </div>
  );
};

export default Login;
