import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store';

// Firebase import.
import firebase from 'firebase';

// Setup for firebase.
const firebaseConfig = {
  apiKey: "AIzaSyB3L6mVz0c98T87saZ3svSuQ6GnzHXLwus",
  authDomain: "chatter-245f6.firebaseapp.com",
  projectId: "chatter-245f6",
  storageBucket: "chatter-245f6.appspot.com",
  messagingSenderId: "444009945604",
  appId: "1:444009945604:web:d59f1c357846891f88b351",
  measurementId: "G-R6TD7ERNY5"
};
// Initialize firebase.
firebase.initializeApp(firebaseConfig);

window.store = store;

ReactDOM.render(
  <Provider store= {store}>
      <React.StrictMode>
        <App />
    </React.StrictMode>,
  </Provider>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
