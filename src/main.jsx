// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';               // Importa tu CSS base con Tailwind y variables
import App from './App.jsx';
import { ThemeProvider } from './ThemeProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
