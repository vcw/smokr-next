import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { UserProvider } from './providers/UserProvider';
import { LoadingProvider } from './providers/LoadingProvider';

ReactDOM.render(
  <React.StrictMode>
    <LoadingProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </LoadingProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
