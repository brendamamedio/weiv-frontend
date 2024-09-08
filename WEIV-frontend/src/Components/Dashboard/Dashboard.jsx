import React from 'react';
import { Button } from '../Shared/Button';

const Dashboard = ({ onLogout }) => {
  return (
    <div>
      <h1>Bem-vindo ao Dashboard</h1>
      <Button style={{ backgroundColor: '#f20574', border: 'none'}} onClick={onLogout}>
        Logout
      </Button>
    </div>
  );
}

export default Dashboard;
