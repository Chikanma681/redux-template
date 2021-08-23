import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.css";
import './index.css';
import App from './App';
//createStore is imported from redux while provider is imported from react-redux
import {createStore} from 'redux';
//no need to import index.js
import {allReducers} from './reducers';
import {Provider} from 'react-redux';
const store = createStore(
    allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
// //store

// //action - JS function that returns Object returns type and payload
// const increment = () => {
//   return {
//     type:'INCREMENT'
//   };
// };
// const decrement = () =>{
//   return {
//     type:'DECREMENT'
//   };
// };
// // reducer 

// const counter = (state=0,action)=>{
//   switch(action.type){
//     case "INCREMENT":
//       return state+1
//     case "DECREMENT":
//       return state-1
//     default:
//       return state;
//   }
// }
// // dispatch

// const store = createStore(
//   counter
//   ); 

//   // display in console use dispatch
//  subscribe is run anytime the action is run
//   store.subscribe(()=>console.log(store.getState()))
//   store.dispatch(increment());
//   store.dispatch(increment());
//   store.dispatch(decrement());

// Provider makes store accessible to any components

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
