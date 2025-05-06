import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App'; // or wherever your App component is
import './index.css'; // your Tailwind/main CSS

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* ✅ This wraps everything */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
