import React from 'react';
import Users from './users';

class SingleFriend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    const myId = this.props.match.params.userId;
    const foundUser = Users.find(user => user.id === Number(myId));
    this.setState = ({ user: foundUser });
    
    console.log(foundUser)
    console.log(this.state.user);
  }

  render() {
    const { first_name, last_name, email, gender } = this.state.user;
    return (
      <div className="friend-wrapper">
        <p>{first_name}</p>
        <p>{last_name}</p>
        <p>{email}</p>
        <p>{gender}</p>
      </div>
    );
  }
}

export default SingleFriend;