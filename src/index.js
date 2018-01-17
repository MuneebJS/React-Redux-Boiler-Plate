import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux"
import Routers from './containers/Routes';
import allReducer from './reducers/index'

//here I created a store and "allReducer"" is our combined Reducer 
const store = createStore(allReducer)

ReactDOM.render(
  //you must wrap your component in "Provider"" when you are using redux with react
  <Provider store={store}>
    <Routers />
  </Provider>,
  document.getElementById('root')
);
