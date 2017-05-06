import React from 'react';
// properties are static values passed to our components
// state: is meant to be managed and updated by our component
class App extends React.Component {
  constructor() {
    super(); // give 'this' the context within our component, rather than the parent?
    this.state = {
      txt: 'this is the state txt',
    }
  }
  update(e) {
    this.setState({txt: e.target.value})
  }
  // using a react component to create other child components
  render() {
    return (
      <div>
        <h1>{this.state.txt}</h1>
        <Widget update={this.update.bind(this)}/>
        <Widget update={this.update.bind(this)}/>
        <Widget update={this.update.bind(this)}/>
      </div>
    )
  }
}

const Widget = (props) =>
  <input type="text" onChange={props.update}/>

// Export the componenet we created
export default App
