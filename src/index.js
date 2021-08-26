import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//Reducers
import pizzaR from './store/reducers/pizzaComposition.js';
import pizzaB from './store/reducers/pizzaBuild.js';


import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

//Reducers
const rootReducer = combineReducers({
    pizzaReducer: pizzaR,
    pizzaBuild: pizzaB,
});

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
