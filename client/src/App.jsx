import React, { Component } from 'react';
import FriendsList from './components/FriendsList/FriendsList';
import axios from 'axios';

class App extends Component {
  state = {
    friends: [],
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/friends`)
      .then(res => {
        this.setState({
          ...this.state,
          friends: res.data,
      });
    });
  }

  render() {
    return (
      <div className="App">
        <FriendsList friends={this.state.friends} />
      </div>
    );
  }
}
 
export default App;

// function App() {
//   const componentDidMount = () => {

//   }
//   return (
//     <div className="App">
//       <FriendsList />
//     </div>
//   );
// }

// export default App;
