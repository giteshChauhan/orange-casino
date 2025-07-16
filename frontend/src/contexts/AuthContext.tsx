import { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import api from '../services/api';
import toaster from '../utils/toaster';

interface AuthContextType {
  token: string | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({} as any);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(Cookies.get('jwt') || null);

  useEffect(() => {
    api.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : '';
  }, [token]);

  const login = async (username: string, password: string) => {
    const res = await api.post('/auth/login', { username, password });
    const t = res.data.token;
    Cookies.set('jwt', t);
    setToken(t);
  };

  const logout = () => {
    Cookies.remove('jwt');
    toaster("Logged Out")
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;