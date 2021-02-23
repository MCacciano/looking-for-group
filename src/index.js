import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import firebase from './firebase';

import GlobalContextProvider from './context/global';
import UserContextProvider from './context/user';

import './index.css';

import App from './App';

if (firebase.apps.length) {
    ReactDOM.render(
        <React.StrictMode>
            <Router>
                <GlobalContextProvider>
                    <UserContextProvider>
                        <App />
                    </UserContextProvider>
                </GlobalContextProvider>
            </Router>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
