import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onSubmit, buttonName}) => (
<button onSubmit={onSubmit}>{buttonName}</button>
);

Button.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  buttonName: PropTypes.string.isRequired
};

export default Button;
