import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onSubmit, buttonName}) => (
<button onSubmit={onSubmit}>{buttonName}</button>
);

Button.PropTypes = {
  onSubmit: PropTypes.func.isRequired,
  button
}