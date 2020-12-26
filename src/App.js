import React, { Component } from 'react';
import './App.css';
import List from './components/List';
import Searchbox from './components/Searchbox'
class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          loading: false,
          users: [],
          searchTerm: '',
          usersSelected: [],
      }
  }

  componentDidMount(){
    const apiUrl = `https://randomuser.me/api/?results=10&seed=a30fc14314ff6e77`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        this.setState({users : data.results})
      });
  }

  handleInput = (e) => {
      if(e.target.value != ""){
        this.setState({ searchTerm: e.target.value });
      }
  }

  handleClick = (e, name) => {
    let userSelected = this.state.users.find((user)=>{
      return user.login.uuid === e.target.id
    })
    let usersSelected = this.state.usersSelected
    usersSelected.push(userSelected)
    this.setState({usersSelected:usersSelected})

  }

  render() {
    let filteredUsers = this.state.users.filter((user)=>{
        return user.name.first.toLowerCase().includes(this.state.searchTerm.toLocaleLowerCase()) || 
                user.name.last.toLowerCase().includes(this.state.searchTerm.toLocaleLowerCase())
    })
    return (
        <div>
            hola
            <Searchbox handleInput= {this.handleInput}/>
            <List users={filteredUsers} handleClick={this.handleClick} />
            Users selected:
            <List users={this.state.usersSelected} handleClick={this.handleClick} />
        </div>
    )
  }
  
}
export default App;