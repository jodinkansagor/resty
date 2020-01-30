import React from 'react';
import PropTypes from 'prop-types';

const Radio = ({ onChange,  method }) => (
  <input type="radio" name="method" value={method} onChange={onChange}>{method}</input>
);

Radio.propTypes = {
  onChange: PropTypes.func.isRequired,
  method: PropTypes.string.isRequired
};

export default Radio;
