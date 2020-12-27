import React, { Component } from 'react';
import './App.css';
import List from './components/List';
import ListUsersSelected from './components/ListUsersSelected'
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
    //const apiUrl = `https://randomuser.me/api/?results=10&seed=a30fc14314ff6e77`;
    const apiUrl = `https://randomuser.me/api/?results=100`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        this.setState({users : data.results})
      });
  }

  handleInput = (e) => {
      if(e.target.value !== ""){
        document.getElementById("userList").classList.remove("d-none")
        this.setState({ searchTerm: e.target.value });
      }else {
        
    document.getElementById("userList").classList.add("d-none");
      }

  }

  handleClick = (e, name) => {
    let uid = e.target.id
    let userSelected;
    if(this.state.usersSelected) {
      userSelected = this.state.usersSelected.find((user)=>{
        return user.login.uuid === uid;
      })
      if (userSelected) return;
    }

    userSelected = this.state.users.find((user)=>{
      return user.login.uuid === uid;
    })
    
    let usersSelected = this.state.usersSelected
    usersSelected.push(userSelected)
    this.setState({usersSelected:usersSelected})

  }

  handleOnBlur = (e) => {
    console.log("ola")
  }

  removeUser = (e) => {
    let uid  = e.target.id;
    let userToRemove = this.state.usersSelected.find((user)=>{
      return user.login.uuid === uid;
    })
    

    let usersSelected = this.state.usersSelected;


    const index = usersSelected.indexOf(userToRemove)

    usersSelected.splice(index,1);
    this.setState({usersSelected : usersSelected})
  }

  render() {
    let filteredUsers = this.state.users.filter((user)=>{
        return user.name.first.toLowerCase().includes(this.state.searchTerm.toLocaleLowerCase()) || 
                user.name.last.toLowerCase().includes(this.state.searchTerm.toLocaleLowerCase())
    })
    return (
        <div className="container">
        <div className="row">
            <div className="col-md-6">
              <Searchbox handleInput= {this.handleInput} handleOnBlur={this.handleOnBlur}/>
              <div className="d-none" id="userList">
                <List users={filteredUsers} handleClick={this.handleClick} 
                usersSelected = {this.state.usersSelected}   />

              </div>
            </div>
            <div className="col-md-6">
              Users selected:
              <ListUsersSelected usersSelected={this.state.usersSelected} handleClick={this.removeUser} />

            </div>
        </div>
        </div>
    )
  }
  
}
export default App;