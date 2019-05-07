// index.tsx

// webpack, will pack the css content, and produce a csss file
import './index.css';


import React from 'react'; // node_modules, bundle.js
import ReactDOM from 'react-dom'; // node_modules

// default import 
import App from './app/App';  // main.bundle.js
// bootstrapping
// load React component into browser

// virtual dom, real dom
// React create Instance for App component
// calls render method, get virtual dom
// diff, patch the real dom
// uni direction, Virtual DOM to REAL DOM
ReactDOM.render(<App />, 
                document.getElementById('root'));