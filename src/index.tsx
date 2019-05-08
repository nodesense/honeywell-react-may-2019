// index.tsx

// webpack, will pack the css content, and produce a csss file
import './index.css';
import {configure} from 'mobx';

import React from 'react'; // node_modules, bundle.js
import ReactDOM from 'react-dom'; // node_modules

import './mobx-demo';

// default import 
import App from './app/App';  // main.bundle.js

// we will be exposing store as provider for rest of the react components
import store from './configureStore';

// expose store as context values for react components
import {Provider} from 'mobx-react';

// use action to mutate the data
configure({'enforceActions': 'always'});

// bootstrapping
// load React component into browser


/*
expose one prop at a time
<Provider counterState={store.counterState}
cartState={store.cartState}
/.....
            >

alternative is
expose all the states with in the state
<Provider {...store}


*/


// virtual dom, real dom
// React create Instance for App component
// calls render method, get virtual dom
// diff, patch the real dom
// uni direction, Virtual DOM to REAL DOM
ReactDOM.render(
            <Provider {...store}
            >
                <App />
            </Provider>
            , 
                document.getElementById('root'));