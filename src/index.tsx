import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Adjust path as needed

// Create a root element
const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

// Render your application
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
