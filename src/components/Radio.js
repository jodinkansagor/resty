import React from 'react';
import PropTypes from 'prop-types';

const Radio = ({ onSubmit, radioName}) => (
<button onSubmit={onSubmit}>{radioName}</button>
);

Radio.PropTypes = {
  onSubmit: PropTypes.func.isRequired,
  radioName: PropTypes.string.isRequired
};

export default Radio;
