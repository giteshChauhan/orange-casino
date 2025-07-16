// src/components/Leaderboard.tsx
import React, { useState, useEffect, useContext, useCallback } from 'react';
import api from '../services/api';
import { SocketContext } from '../contexts/SocketContext';

interface Entry {
  username: string;
  netWin: number;
}

export default function Leaderboard(): JSX.Element {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [days, setDays] = useState<number>(7);
  const socket = useContext(SocketContext);

  const fetchLeaderboard = useCallback(
    async (d: number) => {
      try {
        const { data } = await api.get<Entry[]>(`/leaderboard?days=${d}`);
        setEntries(data);
      } catch (err) {
        console.error('Failed to fetch leaderboard:', err);
      }
    },
    []
  );

  // initial load
  useEffect(() => {
    fetchLeaderboard(days);
  }, [fetchLeaderboard, days]);

  // real‑time updates
  useEffect(() => {
    if (!socket) return;
    socket.on('spin', () => fetchLeaderboard(days));
    return () => {
      socket.off('spin', () => fetchLeaderboard(days));
    };
  }, [socket, fetchLeaderboard]);

  return (
    <div className="w-full">
      <h2 className="text-2xl text-center font-semibold mb-4">Leaderboard</h2>

      {/* Days input */}
      <div className="flex justify-end  mb-4 space-x-2">
        <label className="font-medium text-gray-700">
          Days:
          <input
            type="number"
            min={1}
            value={days}
            onChange={e => setDays(Number(e.target.value) || 1)}
            className="ml-2 w-15 text-center py-1 border rounded outline-none border-gray-200 focus:border-none focus:ring-2 focus:ring-orange-500"
          />
        </label>
        <button
          onClick={() => fetchLeaderboard(days)}
          className="bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600 transition"
        >
          Refresh
        </button>
      </div>

      {/* Entries list */}
      <ul className="space-y-2">
        {entries.map((e, i) => (
          <li
            key={i}
            className="flex justify-between py-2 px-4 bg-white rounded shadow-sm"
          >
            <span>{i + 1}. {e.username}</span>
            <span>💰 {e.netWin}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
