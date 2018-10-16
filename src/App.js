import React, { Component } from 'react';
import './App.css';
import Friends from './Friends';
import Home from './Home';
import { Route, Link } from 'react-router-dom';
import Users from './users';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Users: Users
    }
  }

  render() {
    return (
      <div className="App">
        <Link className='bruh' to='/'>Home</Link>
        <Link className='bruh' to='/friends'>Friends</Link>
        <Route exact path='/' component={Home}/>
        <Route path='/friends' component={Friends}/>
      </div>
    );
  }
}

export default App;
