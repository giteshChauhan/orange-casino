// src/pages/Login.tsx
import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import SlotMachineEffect from '../components/SlotMachineEffect';
import { AuthContext } from '../contexts/AuthContext';
import logo from '../assets/logo.png'
import toaster from '../utils/toaster';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(username, password);
      toaster('Logged in successfully!');
      navigate('/');
    } catch (err: any) {
      toaster(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left: Slot Machine Reel Animation */}
      <div className="md:w-2/5 hidden md:flex w-full bg-orange-500 items-center justify-center p-4 md:p-0">
      <SlotMachineEffect />
      </div>

      {/* Right: Login Form */}
      <div className="md:w-3/5 w-full flex items-center justify-center h-[100vh] md:h-auto bg-gray-50 p-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-full max-w-md"
        >
          <h1 className="text-3xl flex font-bold text-gray-800 mb-6 text-nowrap"><img alt='Orange Casino' className='me-4 h-[40px]' src={logo} />Welcome Back</h1>

          <label className="block mb-2 text-gray-600">
            Username
            <input
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              className="mt-1 block w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Enter your username"
            />
          </label>

          <label className="block mb-4 text-gray-600">
            Password
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="mt-1 block w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Enter your password"
            />
          </label>

          <button
            type="submit"
            className="w-full bg-orange-500 cursor-pointer text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
          >
            Login
          </button>

          <p className="mt-4 text-center text-gray-600">
            Don't have an account?{' '}
            <Link to="/register" className="text-orange-500 hover:underline">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
