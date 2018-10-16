import React, { Component } from 'react';
import './App.css';
import Friends from './Friends';
import Home from './Home';
import { Route, Link } from 'react-router-dom';

class App extends Component {
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
