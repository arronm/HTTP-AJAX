import React from 'react';
import PropTypes from 'prop-types';

const Friend = (props) => {
  console.log(props);
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}

Friend.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  email: PropTypes.string,
};

export default Friend;
