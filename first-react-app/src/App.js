import React from 'react';

class App extends React.Component {
  render() {
    return <Title text="12345"/>
  }
}

const Title = (props) => <h1>Title: {props.text}</h1>

// What we can do is pass in a customized function
Title.propTypes = {
  text(props, propName, component) {
    if (!(propName in props)) {
      return new Error(`missing ${propName}`)
    }
    if (props[propName].length < 6) {
      return new Error(`${propName} was too short`)
    }
  }
}

// The best we can do here, is to make it required
// Title.propTypes = {
//   text: React.PropTypes.string.isRequired
// }


// Export the componenet we created
export default App
