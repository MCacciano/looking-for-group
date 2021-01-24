import React from 'react';
import ReactDOM from 'react-dom';
import firebase from './firebase';

import './tailwind.css';

import App from './App';

if (firebase.apps.length) {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
