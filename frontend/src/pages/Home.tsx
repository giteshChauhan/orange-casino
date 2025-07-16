// src/pages/Home.tsx
import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import SlotMachine from '../components/SlotMachine';
import Leaderboard from '../components/Leaderboard';
import TournamentCreator from '../components/TournamentCreator';
import TournamentSignup from '../components/TournamentSignup';
import Balance from '../components/Balance';
import logo from '../assets/logo.png';
import parseJwt from '../utils/jwtDecode';

export default function Home(): JSX.Element {
  const { logout, token } = useContext(AuthContext);
  const role = parseJwt(token).role;

  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <nav className="flex items-center justify-between bg-white shadow px-6 py-4">
        <div className="flex items-center space-x-2 md:space-x-4">
          <img src={logo} alt="Logo" className="h-8 w-8" />
          <span className="md:text-xl text-lg font-bold">Orange Casino</span>
        </div>
        <div className="flex items-center space-x-6">
          <Balance />
          <button
            onClick={logout}
            className="text-red-500 cursor-pointer hover:text-red-700 font-medium"
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 overflow-auto bg-gray-100 p-6">
        {/* Slot & Leaderboard */}
        <div className="flex flex-col md:flex-row gap-4 h-auto md:h-2/3">
          <div className="w-full md:w-1/2 bg-white rounded-lg shadow p-4 flex items-center justify-center">
            <SlotMachine />
          </div>
          <div className="w-full md:w-1/2 bg-white rounded-lg shadow p-4 overflow-auto">
            <Leaderboard />
          </div>
        </div>

        {/* Tournaments */}
        <div className="mt-6 space-y-4">
          {role === 'admin' ? (
            <div className='bg-white rounded-lg shadow p-8'>
              <h2 className="text-2xl font-semibold mb-2">Admin Panel</h2>
              <div className='grid md:grid-cols-2 grid-cols-1 '>
                <TournamentCreator />
                <TournamentSignup />
              </div>
            </div>
          ) : <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-2xl font-semibold mb-6">Join Tournament</h2>
            <TournamentSignup />
          </div>}
        </div>
      </main>
    </div>
  );
}
