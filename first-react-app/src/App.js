import React from 'react';
// extend functionality of children components
class App extends React.Component {
  render() {
    return (
      <Buttons>
        <button value="A">A</button>
        <button value="B">B</button>
        <button value="C">C</button>
      </Buttons>
    )
  }
}

class Buttons extends React.Component {
  constructor() {
    super();
    this.state = {selected: 'None'}
  }
  selectItem(selected) {
    this.setState({selected});
  }
  render() {
    // this.props.children isn't the actual DOM object, its a descriptor
    // So we can't change props like child.props.... you can only read
    // So we simply create new elements
    let fn = child =>
      React.cloneElement(child, {
        onClick: this.selectItem.bind(this, child.props.value)
      })
    let items = React.Children.map(this.props.children, fn);
    return (
      <div>
        <h2>You have Selected: {this.state.selected}</h2>
        {items}
      </div>
    )
  }
}

export default App
