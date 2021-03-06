import React, { Component } from 'react';
import axios from 'axios';

class User extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: ''
      }
    }
    this.fetchUsers = this.fetchUsers.bind(this);
  }

  fetchUsers() {
    axios.get('/users')
      .then( (response) => {
        this.setState({
          user: response.data
        });
      })
      .catch( (error) => {
        console.log(error);
      });
  }

  componentWillMount() {
    this.fetchUsers();
    setInterval(this.fetchUsers, 1000);
  }

  render() {
    return (
      <div className="user">
        <h1>Hello {this.state.user.name}</h1>
      </div>
    );
  }
}

export default User;
