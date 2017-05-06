import React from 'react';
// Access nested data with reacts props.children
class App extends React.Component {
  render() {
    return <Button>I <Heart/> React</Button>
  }
}

const Button = (props) => <button>{props.children}</button>

class Heart extends React.Component {
  render() {
    return <span>&hearts;</span>
  }
}

// Export the componenet we created
export default App
