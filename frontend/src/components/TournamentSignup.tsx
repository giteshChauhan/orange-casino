import { useState, useEffect } from 'react';
import api from '../services/api';
import toaster from '../utils/toaster';

interface Tournament { _id: string; name: string; startTime: string; endTime: string; }

export default function TournamentSignup() {
  const [tours, setTours] = useState<Tournament[]>([]);

  const fetch = async () => {
    try {
      const res = await api.get<Tournament[]>('/admin/tournament');
      setTours(res.data);
    } catch (error) { }
  };
  useEffect(() => {
    fetch();
  }, []);

  const join = async (id: string) => {
    try {
      await api.post(`/admin/tournament/${id}/join`);
      toaster('Joined');
    } catch (error) { }
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl mb-2">Available Tournaments</h2>
      {tours.map(t => (
        <div key={t._id} className="flex justify-between border-b py-1">
          <div>
            <div>{t.name}</div>
            <div className="text-sm text-gray-500">{new Date(t.startTime).toLocaleString()} - {new Date(t.endTime).toLocaleString()}</div>
          </div>
          <button onClick={() => join(t._id)} className="bg-gray-800 cursor-pointer hover:bg-gray-900 text-white px-2 rounded">Join</button>
        </div>
      ))}
    </div>
  );
}