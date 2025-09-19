import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import AppAdvanced from './App-Advanced.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
const SHOW_ADVANCED = true;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {SHOW_ADVANCED ? <AppAdvanced /> : <App />}
  </StrictMode>
);