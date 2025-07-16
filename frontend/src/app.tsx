import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AuthProvider, { AuthContext } from './contexts/AuthContext';
import SocketProvider from './contexts/SocketContext';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';

function AppRoutes() {
  const { token } = useContext(AuthContext);
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={token ? <Home /> : <Navigate to="/login" replace />}
      />
    </Routes>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <SocketProvider>
        <AppRoutes />
        <ToastContainer/>
      </SocketProvider>
    </AuthProvider>
  );
}