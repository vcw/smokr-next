import React from 'react';
import ReactDOM from 'react-dom';
import { FirebaseAppProvider } from 'reactfire';
import firebaseConfig from './firebase.config'
import './index.css';
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <App />
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
