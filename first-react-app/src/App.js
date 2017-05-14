import React from 'react';
// iterate over children of component
// if there's only 1 child, we can't map over the children
// to solve that, React has React.Children
class App extends React.Component {
  render() {
    return (
      <Parent>
        <div className="childA"></div>
      </Parent>
    )
  }
}

class Parent extends React.Component {
  render() {
    // let items = React.Children
    //             .forEach(this.props.children,
    //               child => console.log(child.props.className));
    //let items = React.Children.toArray(this.props.children);
    let items = React.Children.only(this.props.children) // expect only 1 child
    console.log(items);
    return null
  }
}

// Export the componenet we created
export default App
