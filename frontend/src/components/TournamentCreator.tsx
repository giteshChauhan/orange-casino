// src/components/TournamentCreator.tsx
import React, { useState } from 'react';
import api from '../services/api';
import toaster from '../utils/toaster';

export default function TournamentCreator(): JSX.Element {
  const [name, setName] = useState<string>('');
  const [start, setStart] = useState<string>('');
  const [end, setEnd] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleCreate = async (): Promise<void> => {
    if (!name || !start || !end) {
      toaster('Please fill out all fields');
      return;
    }
    try {
      setLoading(true);
      await api.post('/admin/tournament', { name, startTime: start, endTime: end });
      toaster('Tournament created!');
      setName('');
      setStart('');
      setEnd('');
    } catch (err: any) {
      toaster(err.response?.data?.message || 'Creation failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg me-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Create Tournament</h2>

      <label className="block mb-4">
        <span className="text-gray-700">Name</span>
        <input
          type="text"
          placeholder="Tournament name"
          value={name}
          onChange={e => setName(e.target.value)}
          className="mt-1 block w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
      </label>

      <label className="block mb-4">
        <span className="text-gray-700">Start Time</span>
        <input
          type="datetime-local"
          value={start}
          onChange={e => setStart(e.target.value)}
          className="mt-1 block w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
      </label>

      <label className="block mb-6">
        <span className="text-gray-700">End Time</span>
        <input
          type="datetime-local"
          value={end}
          onChange={e => setEnd(e.target.value)}
          className="mt-1 block w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
      </label>

      <button
        onClick={handleCreate}
        disabled={loading}
        className="w-full bg-orange-500 cursor-pointer hover:bg-orange-600 text-white py-3 rounded-lg font-semibold disabled:opacity-50 transition"
      >
        {loading ? 'Creating...' : 'Create'}
      </button>
    </div>
  );
}
