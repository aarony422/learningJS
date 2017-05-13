import React from 'react';
// Higher order components
// share common functionality or information between components

// Notice that we defined HOC to have state and update method ONCE
// and passing Label and Button into HOC gives them that functionality

// HOC = higher order component
// take in a component, and return a new component
const HOC = (InnerComponent) => class extends React.Component {
  constructor() {
    super();
    this.state = {count: 0}
  }
  update() {
    this.setState({count: this.state.count + 1})
  }
  componentWillMount() {
    console.log('will mount')
  }
  render() {
    return (
      <InnerComponent
        {...this.props}
        {...this.state}
        update={this.update.bind(this)}
      />
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Button>button</Button>
        <hr/>
        <LabelHOC>label</LabelHOC>
      </div>
    )
  }
}

// Stateless function component
const Button = HOC((props) => <button
                                onClick={props.update}>
                                {props.children} - {props.count}
                              </button>)

// Full class component
class Label extends React.Component {
  componentWillMount() {
    console.log('label will mount')
  }
  render() {
    return (
      <label onMouseMove={this.props.update}>
        {this.props.children} - {this.props.count}
      </label>
    )
  }
}

const LabelHOC = HOC(Label)

// Export the componenet we created
export default App
