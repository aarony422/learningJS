import React from 'react';
// properties are static values passed to our components
// state: is meant to be managed and updated by our component
class App extends React.Component {
  constructor() {
    super(); // give 'this' the context within our component, rather than the parent?
    this.state = {
      txt: 'this is the state txt',
      cat: 0
    }
  }
  update(e) {
    this.setState({txt: e.target.value})
  }
  render() {
    return (
      <div>
        <input type="text" onChange={this.update.bind(this)}/>
        <h1>{this.state.txt} - {this.state.cat}</h1>
      </div>
    )
  }
}

// Export the componenet we created
export default App
