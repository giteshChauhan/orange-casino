import React, { createContext, useContext, useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { AuthContext } from './AuthContext';
import parseJwt, { JWTPayload } from '../utils/jwtDecode';

export const SocketContext = createContext<Socket | null>(null);

interface SocketProviderProps {
  children: React.ReactNode;
}


const SocketProvider: React.FC<SocketProviderProps> = ({ children }) => {
  const { token } = useContext(AuthContext);
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    if (!token) return;
    const { id: userId } = parseJwt<JWTPayload>(token);
    const s = io(import.meta.env.VITE_API_URL!.replace('/api', ''), {
      auth: { token }
    });
    s.on('connect', () => {
      s.emit('join', userId);
    });
    setSocket(s);
    return () => {
      s.disconnect();
    };
  }, [token]);

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
