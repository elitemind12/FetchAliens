import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component.jsx'

class fetchAliens extends Component {
constructor() {
    super();
    this.state = {
      aliens: [],
      searchField: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(users => this.setState({ aliens: users }))
}  

handleChange(e){
  this.setState({ searchField: e.target.value });
}
  
render() {
    const { aliens, searchField } = this.state;
    const filteredAliens = aliens.filter(alien => 
    alien.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
    <div className="App">
      <SearchBox 
       placeholder='search aliens'
       handleChange={this.handleChange}
      />
      <CardList aliens={filteredAliens}/>
    </div>
  );
}
}


export default fetchAliens;
