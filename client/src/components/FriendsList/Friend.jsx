import React from 'react';
import { Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import Form from '../Form/Form';

const Friend = (props) => {

  const handleDelete = () => {
    axios.delete(`http://localhost:5000/friends/${props.id}`)
      .then(
        res => {
          props.updateFriends(res.data);
        }
      ).catch(
        error => {
          console.log('Error Caught: ', error);
        }
      );
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
