import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import Layout from './Layout';
import './css/index.css';

const container = document.getElementById('root'); // Get the root element
const root = createRoot(container); // Create a root

root.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
);