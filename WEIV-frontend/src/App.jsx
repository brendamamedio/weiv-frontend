import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Função para lidar com o login
  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate('/dashboard'); // Redireciona para o dashboard após o login
  };

  // Função para lidar com o logout
  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate('/'); // Redireciona para a página de login após o logout
  };

  // Função para lidar com o registro
  const handleRegister = () => {
    setIsAuthenticated(true);
    navigate('/dashboard'); // Redireciona para o dashboard após o registro
  };

  console.log("Is authenticated:", isAuthenticated);

  return (
    <Routes>
      <Route path="/" element={<Login onLogin={handleLogin} />} />
      <Route path="/register" element={<Register onRegister={handleRegister} />} />
      <Route path="/dashboard" element={isAuthenticated ? <Dashboard onLogout={handleLogout} /> : <Login onLogin={handleLogin} />} />
    </Routes>
  );
}

export default App;
