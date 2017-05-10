import React from 'react';
// refs reference a node or instance of a componenet in our app
import ReactDOM from 'react-dom'
class App extends React.Component {
  // To set initial state, include a constructor
  constructor() {
    super();
    this.state = {a: ''}
  }
  update() {
    this.setState({
      a: this.a.refs.input.value,
      b: this.refs.b.value // this.refs.b returns the componenet with that ref name
    })
  }
  render() {
    // ref attribute can also take a callback
    return (
      <div>
        <Input
          ref={ component => this.a = component}
          update={this.update.bind(this)}
        /> {this.state.a}
        <hr />
        <input
          ref="b"
          type = "text"
          onChange={this.update.bind(this)}
        /> {this.state.b}
      </div>
    )
  }
}

// refs can also reference an instance of another component

class Input extends React.Component {
  render() {
    return <div><input ref="input" type="text" onChange={this.props.update}/></div>
  }
}

// Export the componenet we created
export default App
