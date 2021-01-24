import React from 'react';
import ReactDOM from 'react-dom';
import firebase from './firebase';

import GlobalContextProvider from './context/global';

import './tailwind.css';

import App from './App';

if (firebase.apps.length) {
  ReactDOM.render(
    <React.StrictMode>
      <GlobalContextProvider>
        <App />
      </GlobalContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
