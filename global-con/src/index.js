import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import Layout from './Layout';
import './css/index.css';

// Get the root element
const rootElement = document.getElementById('root');

// Create a root using createRoot
const root = createRoot(rootElement);

// Render your Layout component
root.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
);