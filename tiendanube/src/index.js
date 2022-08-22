import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC75Eh_r8DdeX7jBDpwt6TtdF1OnpC9LXo",
  authDomain: "ecommercecoder-b73cf.firebaseapp.com",
  projectId: "ecommercecoder-b73cf",
  storageBucket: "ecommercecoder-b73cf.appspot.com",
  messagingSenderId: "118824726638",
  appId: "1:118824726638:web:4cff9c0fd9821ee2a9f67f",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
