import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';
import FriendsList from './components/FriendsList/FriendsList';
import Form from './components/Form/Form';

class App extends Component {
  state = {
    friends: [],
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/friends`)
      .then(
        res => {
          this.setState({
            ...this.state,
            friends: res.data,
          });
        },
        error => {
          console.log('Error Caught: ', error);
        }
    );
  }

  updateFriends = (friends) => {
    this.setState({
      ...this.state,
      friends
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <FriendsList friends={this.state.friends} updateFriends={this.updateFriends} />
          <Form
            action="http://localhost:5000/friends"
            method="post"
            updateFriends={this.updateFriends}
            buttonText="Add Friend"
          />
        </div>
      </Router>
    );
  }
}
 
export default App;
