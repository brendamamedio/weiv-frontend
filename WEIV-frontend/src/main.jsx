// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Importar BrowserRouter
import App from './App';
import GlobalStyles from './GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <GlobalStyles />
    <BrowserRouter> {/* Envolva a aplicação com BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
