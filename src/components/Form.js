import React from 'react';
import PropTypes from 'prop-types';



const Form = ({ onSubmit, url, textInput, onChange  }) => (
  <form onSubmit={onSubmit}>
    <input type="text" placeholder="URL" value={url} name="url" onChange={onChange} />
    <input type="radio" name="method" value="get" onChange={onChange}>Get</input>
    <input type="radio" name="method" value="post" onChange={onChange}>Post</input>
    <input type="radio" name="method" value="patch" onChange={onChange}>Patch</input>
    <input type="radio" name="method" value="put" onChange={onChange}>Put</input>
    <input type="radio" name="method" value="delete" onChange={onChange}>Delete</input>
    <button></button>
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
