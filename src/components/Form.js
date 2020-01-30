import React from 'react';
import PropTypes from 'prop-types';



const Form = ({ onSubmit, url, textInput, onChange, userName, password, bearerToken }) => (
  
  <form onSubmit={onSubmit}>
    <input type="text" placeholder="URL" value={url} name="url" onChange={onChange} />
    <label>GET<input type="radio" name="method" value="get" onChange={onChange}></input></label>
    <label>POST<input type="radio" name="method" value="post" onChange={onChange}></input></label>
    <label>PATCH<input type="radio" name="method" value="patch" onChange={onChange}></input></label>
    <label>PUT<input type="radio" name="method" value="put" onChange={onChange}></input></label>
    <label>DELETE<input type="radio" name="method" value="delete" onChange={onChange}></input></label>
    <button>GO</button>
    <textarea name="textInput" type="text" value={textInput} onChange={onChange}></textarea>
    <h2>Basic Authorization</h2>
    <input type="text" placeholder="Username" value={userName} name="userName" onChange={onChange} />
    <input type="text" placeholder="Password" value={password} name="password" onChange={onChange} />
    <h2>Bearer Token</h2>
    <input type="text" placeholder="Bearer Token" value={bearerToken} name="bearerToken" onChange={onChange} />
  </form>
);

Form.propTypes = {
  url: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  bearerToken: PropTypes.string.isRequired,
  textInput: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Form;
