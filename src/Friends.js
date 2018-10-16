import React from 'react';
import Users from './users';
import SingleFriend from './SingleFriend';


class Friends extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      Users: Users
    }
  }

  render() {
    return (
      <div>
        <h3>I am your friend bruh</h3>
        <p>Here are all your other friends tho, bruh</p>
        {this.state.Users.map (user => <h3>{user.first_name} {user.last_name}</h3>)}
        {/* {this.state.Users.map (user => <SingleFriend />)} */}
      </div>
    );
  }
}
 

export default Friends;