import React, { Component } from 'react';
import Form from '../components/Form';


export default class RestyContainer extends Component {
  state = {
    url: '',
    textInput: '',
    userName: '',
    password: '',
    bearerToken: '',
    method: '',
    // fetchCalls=[],
  }

  handleChange = ({ target }) => {
    if(target.type === 'text') {
      this.setState({ [target.name]: target.value });
    } else if(target.type === 'radio') {
      this.setState({ [target.name]: target.value });
    } else if (target.type === 'textarea') {
      this.setState({ textInput: target.value });
    }
  }

  // handleSubmit = event => {
  //   event.preventDefault();

  //   this.setState()
  // }

  render() {
    const { url, method, textInput, userName, password, bearerToken
    } = this.state;
    return (
      
      <>
        <Form 
          url={url}
          textInput={textInput}
          userName={userName}
          password={password}
          method={method}
          bearerToken={bearerToken}
          onSumbit={this.handleSubmit}
          onChange={this.handleChange}  
        />
      </>
    );
  }
}
