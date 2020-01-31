import React from 'react';
import PropTypes from 'prop-types';
import styles from '../components/Form.css';



const Form = ({ onSubmit, url, textInput, onChange, userName, password, bearerToken }) => (

  <form onSubmit={onSubmit}>
    <input type="text" className={styles.url} placeholder="URL" value={url} name="url" onChange={onChange} />
    <section className={styles.radioButtons}>
      <label><input className={styles.radio} type="radio" name="method" value="GET" onChange={onChange}></input><span>GET</span></label>
      <label><input className={styles.radio} type="radio" name="method" value="POST" onChange={onChange}></input><span>POST</span></label>
      <label><input className={styles.radio} type="radio" name="method" value="PATCH" onChange={onChange}></input><span>PATCH</span></label>
      <label><input className={styles.radio} type="radio" name="method" value="PUT" onChange={onChange}></input><span>PUT</span></label>
      <label><input className={styles.radio} type="radio" name="method" value="DELETE" onChange={onChange}></input><span>DELETE</span></label>
      <button>GO</button>
    </section>
    <section className={styles.jsonAndAuth}>
      <textarea name="textInput" type="text" value={textInput} placeholder="Raw JSON" onChange={onChange}></textarea>
      <section className={styles.justAuth}>
        <h2>Basic Authorization</h2>
        <input type="text" placeholder="Username" value={userName} name="userName" onChange={onChange} />
        <input type="text" placeholder="Password" value={password} name="password" onChange={onChange} />
        <h2>Bearer Token</h2>
        <input type="text" placeholder="Bearer Token" value={bearerToken} name="bearerToken" onChange={onChange} />
      </section>
    </section>
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
