import React from 'react';

// Ways to create a react componenet
// class App extends React.Component {
//   // always have a render function
//   // returning the html element using jsx
//   // if you are including a class, we need to use "className" instead of just class
//   // <h1 className="name"> ...
//   render(){
//     return <h1>Hello World</h1>
//   }
// }

// For demonstration purposes
// All jsx is compiled into javascript
// class App extends React.Component {
//   // For custom React componenets, name must start with Capital letter
//   render(){
//     return React.createElement('h1', null, 'Hello Eggheads');
//   }
// }

// Another method: stateless function componenet
// This function can't have state, other methods can
const App = () => <h1>Hello stateless</h1>

// Export the componenet we created
export default App
