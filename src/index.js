import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App';
import AuthRoutes from "./AuthRoutes";

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthRoutes />
    <App />
  </React.StrictMode>
);
