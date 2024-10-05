import React from 'react';
import ReactDOM from 'react-dom/client'; 
import App from './App';
import './index.css';
import { FronteggProvider } from '@frontegg/react';

const contextOptions = {
  baseUrl: 'https://app-6rio1e7ugq0m.frontegg.com',
  clientId: 'f3f6e2e4-8466-4de9-ac15-91a9878a9fc2',
  appId: '41f6977f-7c1d-4c70-92a5-00f9f0f03de0'
};

const container = document.getElementById('root'); 

const root = ReactDOM.createRoot(container); 
root.render(
  <React.StrictMode>
    <FronteggProvider 
      contextOptions={contextOptions} 
      hostedLoginBox={false}
    >
      <App />
    </FronteggProvider>
  </React.StrictMode>
);
