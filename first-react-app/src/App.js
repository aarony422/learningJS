import React from 'react';
import ReactDOM from 'react-dom';
/*
 * mounting: when component is added to DOM
 * un-mounting: when component is removed from DOM
 * life-cycle methods we can access during this process
 *
*/
class App extends React.Component {
  constructor() {
    super();
    this.state = {val: 0}
    this.update = this.update.bind(this);
  }
  update() {
    this.setState({val: this.state.val + 1});
  }
  // fires right before the componenet is mounted to the DOM
  // while render will fire multiple times, componenetWillMount only fires once
  componentWillMount() {
    console.log('componentWillMount');
  }
  // fires after componenet did mount to the DOM
  // Also only fire once
  componenetDidMount() {
    console.log('componenetDidMount');
  }
  // before componenet leaves DOM
  componenetWillUnmount() {
    console.log('componentWillUnmount');
  }
  render() {
    console.log('render');
    return <button onClick={this.update}>{this.state.val}</button>
  }
}

class Wrapper extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.mount.bind(this)}>Mount</button>
        <button onClick={this.unmount.bind(this)}>Unmount</button>
        <div id='a'></div>
      </div>
    )
  }
  mount() {
    ReactDOM.render(<App />, document.getElementById('a'))
  }
  unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('a'))
  }
}

// Export the componenet we created
export default Wrapper
