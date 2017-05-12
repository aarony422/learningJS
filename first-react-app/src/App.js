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
    // Have access to state and props, but not the DOM representation of the
    // componenet because it hasn't been mounted yet!
    console.log('componentWillMount');
    this.setState({m:2});
  }
  // fires after componenet did mount to the DOM
  // Also only fire once
  componentDidMount() {
    // access to our componenet in the DOm
    console.log('componenetDidMount');
    console.log(ReactDOM.findDOMNode(this));
    this.inc = setInterval(this.update, 500);
  }
  // before componenet leaves DOM
  componentWillUnmount() {
    // opportunity to clean up any running processes
    console.log('componentWillUnmount');
    clearInterval(this.inc);
  }
  render() {
    console.log('render');
    return <button onClick={this.update}>{this.state.val * this.state.m}</button>
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
