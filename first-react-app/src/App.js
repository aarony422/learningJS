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
// const App = () => <h1>Hello stateless</h1>

// render() method can only return a single componenet
// const App = () => <h1>Hello stateless</h1> <b>Bold</b> // syntax error
// const App = () => React.createElement() React.createElement() // equivalent to this
// To solve this, we can wrap our compoenets in a parent componenet

//const App = () => <div><h1>Hello stateless</h1> <b>Bold</b></div>

// Using this method, the first compoenet must be on the same line as the return statement
// to be safe, use parenthesis!
class App extends React.Component {
  // always have a render function
  // returning the html element using jsx
  // if you are including a class, we need to use "className" instead of just class
  // <h1 className="name"> ...
  render(){
    return (
      <div>
        <h1>Hello World</h1>
        <b>Bold</b>
      </div>
    )
  }
}

// Export the componenet we created
export default App
