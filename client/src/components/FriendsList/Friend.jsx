import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const Friend = (props) => {

  // NOTE: This action is probably better abstracted out, but we haven't covered that yet
  const handleDelete = () => {
    axios.delete(`http://localhost:5000/friends/${props.id}`)
      .then(
        res => {
          console.log(res.data);
          props.updateFriends(res.data);
        },
        error => {
          console.log('Then Error: ', error);
        }
      ).catch(
        error => {
          console.log('Catch Error: ', error);
        }
      );
  }

  return (
    <div>
      <div>Name: {props.name}</div>
      <div>Age: {props.age}</div>
      <div>Email: {props.email}</div>
      <div onClick={handleDelete}>&times;</div>
      <br />
    </div>
  );
}

Friend.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  email: PropTypes.string,
  updateFriends: PropTypes.func.isRequired,
};

export default Friend;
