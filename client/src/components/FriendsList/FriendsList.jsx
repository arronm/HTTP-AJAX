import React from 'react';
import PropTypes from 'prop-types';
import Friend from './Friend';

const FriendsList = (props) => {
  return (
    <div>
      <h1>Friends List</h1>
      {
        props.friends.map(friend => <Friend key={friend.id} {...friend} updateFriends={props.updateFriends} />)
      }
    </div>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
    email: PropTypes.string,
  })).isRequired,
  updateFriends: PropTypes.func.isRequired,
};

export default FriendsList;
