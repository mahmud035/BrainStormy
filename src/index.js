import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import App from './App';
import AuthProvider from './context/AuthProvider/AuthProvider';
import './index.css';
import reportWebVitals from './reportWebVitals';

import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
      <ToastContainer position="top-center" autoClose={1000} newestOnTop />
    </AuthProvider>
  </React.StrictMode>
);

reportWebVitals();
