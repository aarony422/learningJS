import React from 'react'; // library that allows us to build react components
import ReactDOM from 'react-dom'; // library that allows us to work with the DOM
import App from './App'; //

// render in jsx format to the target 'root'
// we can pass data into componenets using prop
ReactDOM.render(
  <App cat={5} txt="this is the prop value"/>,
  document.getElementById('root')
);
