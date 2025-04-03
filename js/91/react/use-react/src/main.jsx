import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

import React from 'react';

const Greeting = ({ name }) => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Hello, {name}!</h1>
      <p>Welcome to our site. We hope you have a great experience!</p>
      <button onClick={() => alert(`Hello, ${name}!`)}>Say Hello</button>
    </div>
  );
};

export default Greeting;



