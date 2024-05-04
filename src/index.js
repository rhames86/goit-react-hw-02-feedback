import React from 'react';
// import ReactDOM from 'react-dom';
import App from './components/App';
import { createRoot } from 'react-dom/client';
import './index.css';

const root = document.getElementById('root');

// Utilizando createRoot en lugar de ReactDOM.render, me presentaba un error con React 18
const rootElement = createRoot(root);
rootElement.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
