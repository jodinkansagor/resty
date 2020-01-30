import React from 'react';
import PropTypes from 'prop-types';
import Radio from '../components/Radio';
import Button from '../components/Button';


const Form = ({ onSubmit, url, textInput, onChange }) => (
  <form onSubmit={onSubmit}>
    <input type="text" placeholder="URL" value={url} name="url" onChange={onChange} />
    <Radio />
    <Radio />
    <Radio />
    <Radio />
    <Radio />
    <Button />
    <textarea name="textInput" type="text" value={textInput} onChange={onChange}></textarea>
  </form>
);

Form.propTypes = {
  url: PropTypes.string.isRequired,
  textInput: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Form;
