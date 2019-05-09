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
    <div className="Friend">
      <div className="Friend__name"><strong>{props.name}</strong></div>
      <div className="Friend__age">{props.age} years old</div>
      <div className="Friend__email">{props.email}</div>
      <div className="Friend__delete" onClick={handleDelete}>&times;</div>
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
