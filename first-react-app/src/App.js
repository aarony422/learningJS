import React from 'react';
import ReactDOM from 'react-dom';
// updating lifecyle methods
class App extends React.Component {
  constructor() {
    super();
    this.state = {increasing: false};
  }
  render() {
    console.log(this.state.increasing);
    return (
      <button onClick={this.update.bind(this)}>
        {this.props.val}
      </button>
    )
  }
  update() {
    ReactDOM.render(
      <App val={this.props.val+1}/>,
      document.getElementById('root'));
  }
  // new props are coming in
  componentWillReceiveProps(nextProps) {
    this.setState({increasing: nextProps.val > this.props.val});
  }
  // takes in nextProp and nextState
  // component will only update if function returns true
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.val % 5 === 0;
  }
  // takes in prevProps and prevState
  componentDidUpdate(prevProps, prevState) {
    console.log(`prevProps: ${prevProps.val}`)
  }
}

App.defaultProps = {val:0};

// Export the componenet we created
export default App
