import React, { Component } from 'react';
import FriendsList from './components/FriendsList/FriendsList';

class App extends Component {
  state = {
    friends: [],
  }

  componentDidMount() {
    this.setState({
      friends: [
        {
          id: 1,
          name: 'Ben',
          age: 30,
          email: 'ben@lambdaschool.com',
        },
        {
          id: 2,
          name: 'Austen',
          age: 32,
          email: 'austen@lambdaschool.com',
        },
        {
          id: 3,
          name: 'Ryan',
          age: 35,
          email: 'ryan@lambdaschool.com',
        },
        {
          id: 4,
          name: 'Sean',
          age: 35,
          email: 'sean@lambdaschool.com',
        },
        {
          id: 5,
          name: 'Michelle',
          age: 67,
          email: 'michelle@gmail.com',
        },
        {
          id: 6,
          name: 'Luis',
          age: 47,
          email: 'luis@lambdaschool.com',
        },
      ]
    })
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
