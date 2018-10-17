import React from "react";
import Users from "./users";
import { Link } from "react-router-dom";

class Friends extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: Users
    };
  }

  render() {
    return (
      <div>
        <h3>I am your friend</h3>
        <p>Here are all your other friends tho</p>
        {this.state.users.map(user => (
          <p>
            <Link key={user.id} to={`/friends/${user.id}`}>
              {user.first_name} {user.last_name}
            </Link>
          </p>
        ))}
      </div>
    );
  }
}

export default Friends;
