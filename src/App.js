import React, {Component} from 'react';
import './App.css';
import UserList from './containers/UserList'
import UserDetails from './containers/UserDetails';

class App extends Component{

  render(){
    return (
      <div className="App">
          <div style={{ textAlign: 'center'}}>
          <h3>Book List Management </h3>
          
          <UserList />
          <UserDetails />

          </div>
       
      </div>
    );
  }
  
}

export default App;
