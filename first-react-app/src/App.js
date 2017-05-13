import React from 'react';
// iterating over a dataset to create JSX

class App extends React.Component {
  constructor() {
    super();
    this.state = {items: []};
  }
  componentWillMount() {
    fetch( 'http://swapi.co/api/people/?format=json' ) // AJAX call
      .then( response => response.json() )
      .then( ({results: items}) => this.setState({items}))
  }
  filter(e) { // e is the event that triggered this function 
    this.setState({filter: e.target.value});
  }
  render() {
    let items = this.state.items;
    if(this.state.filter) {
      items = items.filter(item => item.name.toLowerCase()
                                    .includes(this.state.filter.toLowerCase()))
    }
    return (
      <div>
        <input type="text" onChange={this.filter.bind(this)} />
        {items.map(item => <Person key={item.name} person={item}/>)}
      </div>
    )
  }
}

const Person = (props) => <h4>{props.person.name}</h4>

// Export the componenet we created
export default App
