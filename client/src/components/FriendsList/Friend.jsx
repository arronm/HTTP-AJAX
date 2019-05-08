import React from 'react';
import { Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import Form from '../Form/Form';

const Friend = (props) => {

  // NOTE: This action is probably better abstracted out, but we haven't covered that yet
  const handleDelete = () => {
    axios.delete(`http://localhost:5000/friends/${props.id}`)
      .then(
        res => {
          console.log(res.data);
          props.updateFriends(res.data);
        }
      ).catch(
        error => {
          console.log('Catch Error: ', error);
        }
      );
  }

  const handleEdit = () => {
    
  }

  return (
    <div>
      <div>Name: {props.name}</div>
      <div>Age: {props.age}</div>
      <div>Email: {props.email}</div>
      <div onClick={handleDelete}>&times;</div>
      <Link to={`/edit/${props.id}`}>Edit</Link>
      <Route
        path={`/edit/${props.id}`}
        render={(routeProps) => (
          <Form
            action={`http://localhost:5000/friends/${props.id}`}
            method="put"
            buttonText="Edit"
            updateFriends={props.updateFriends}
            destination="/"
            {...routeProps}
          />
        )}
      />
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
