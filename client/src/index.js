import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk' 
import './index.css';
import App from './App';
import dishesReducer from './reducers/dishesReducer.js';
import 'bootstrap/dist/css/bootstrap.min.css';


const store = createStore(dishesReducer,applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


