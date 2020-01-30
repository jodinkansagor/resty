import React, { Component } from 'react';
import Form from '../components/Form';
import HistoryList from '../components/HistoryList';


export default class RestyContainer extends Component {
  state = {
    url: '',
    textInput: '',
    userName: '',
    password: '',
    bearerToken: '',
    method: '',
    historyList: [],
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

  handleSubmit = event => {
    event.preventDefault();

    this.setState(state => ({
      historyList: [
        ...state.historyList, {
          method: state.method,
          url: state.url
        }
      ]
    }));
  }

  render() {
    const { url, method, textInput, userName, password, bearerToken, historyList
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
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}  
        />
        <HistoryList historyList={historyList}/>
      </>
    );
  }
}
