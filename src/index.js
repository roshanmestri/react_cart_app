import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2022mw5HwWLrnC6Ec_Y2Z8eLb9cXV73Q",
  authDomain: "cart-react-app-f1163.firebaseapp.com",
  projectId: "cart-react-app-f1163",
  storageBucket: "cart-react-app-f1163.appspot.com",
  messagingSenderId: "430538962384",
  appId: "1:430538962384:web:9a4d3446ddc203bac8b5d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


