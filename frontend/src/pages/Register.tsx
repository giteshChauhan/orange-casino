// src/pages/Register.tsx
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import SlotMachineEffect from '../components/SlotMachineEffect';
import api from '../services/api';
import logo from '../assets/logo.png';
import toaster from '../utils/toaster';

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirm) {
      toaster('Passwords do not match');
      return;
    }
    try {
      await api.post('/auth/register', { username, password });
      toaster('Account created! Please log in.');
      navigate('/login');
    } catch (err: any) {
      toaster(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left: Slot Machine Effect (hidden on small screens) */}
      <div className="hidden md:flex md:w-2/5 w-full bg-orange-500 items-center justify-center p-4">
        <SlotMachineEffect />
      </div>

      {/* Right: Register Form */}
      <div className="w-full md:w-3/5 flex items-center justify-center bg-gray-50 p-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-full max-w-md"
        >
          <h1 className="flex items-center text-3xl font-bold text-gray-800 mb-6">
            <img src={logo} alt="Orange Casino" className="mr-4 h-10" />
            Create Account
          </h1>

          <label className="block mb-2 text-gray-600">
            Username
            <input
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              placeholder="Choose a username"
              className="mt-1 block w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </label>

          <label className="block mb-2 text-gray-600">
            Password
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter a password"
              className="mt-1 block w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </label>

          <label className="block mb-4 text-gray-600">
            Confirm Password
            <input
              type="password"
              value={confirm}
              onChange={e => setConfirm(e.target.value)}
              placeholder="Confirm your password"
              className="mt-1 block w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </label>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
          >
            Register
          </button>

          <p className="mt-4 text-center text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-orange-500 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
