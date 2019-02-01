import React, { Component } from 'react';
import './App.css';
import CardList from './CardList';
import SearchBox from './SearchBox';

class App extends Component {
  constructor() {
    super()
    this.state = {
      people: [],
      searchfield: '' 
    }
  }

  componentDidMount() {
    var i;
    for (i=1;i < 9;i++) {
       fetch('https://swapi.co/api/people/?page=' + [i])
      .then(resp=>  resp.json())
      .then(results=>  this.setState({people: this.state.people.concat(results.results)}))
    }
  }
  
  onSearchChange = (event) => {
      this.setState({ searchfield: event.target.value })
      console.log(event.target.value)
  }

  render() {
    const filterPeople = this.state.people.filter(people => {
    return people.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
  }) 
    return (
      <div className='tc'>
        <img src={require('./swlogo.png')} alt="Star Wars logo" height="200" width="350"></img>
        <h1 className='subtitle'>Knowledge base</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList people={filterPeople} />        
      </div>
    );
  }
}

export default App;
