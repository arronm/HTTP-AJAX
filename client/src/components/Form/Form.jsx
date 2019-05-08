import React from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: null,
      email: '',
    }
  }

  handleOnSubmit(event) {
    event.preventDefault();
  }

  render() { 
    return (
      <form onSubmit={this.handleOnSubmit}>
        abc
      </form>
    );
  }
}

Form.propTypes = {
  action: PropTypes.string.isRequired,
}
 
export default Form;