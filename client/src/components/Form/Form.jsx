import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '', // DEBUG: This will pass in as a string from input, need to coerce to number
      email: '',
    }
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    axios[this.props.method](this.props.action, {
      name: this.state.name,
      age: parseInt(this.state.age, 10),
      email: this.state.email,
    }).then(
      res => {
        this.props.updateFriends(res.data);
        this.setState({
          ...this.state,
          name: '',
          age: '',
          email: '',
        }); 
        if (this.props.destination) {
          this.props.history.push(this.props.destination)
        }
      }
    ).catch(error => {
      console.log(error);
    });
  }

  handleOnChange = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  }

  render() { 
    return (
      <form onSubmit={this.handleOnSubmit}>
        <input type="text" value={this.state.name} name="name" onChange={this.handleOnChange} />
        <input type="text" value={this.state.age} name="age" onChange={this.handleOnChange} />
        <input type="text" value={this.state.email} name="email" onChange={this.handleOnChange} />
        <input type="submit" value={this.props.buttonText} />
      </form>
    );
  }
}

Form.propTypes = {
  action: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  updateFriends: PropTypes.func.isRequired,
  destination: PropTypes.string,
}
 
export default Form;
