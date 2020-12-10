import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './App.css';
import { render } from '@testing-library/react';

class App extends Component {



  state = {
    user: [
      { userName: 'Ron' },
      { userName: 'Elon' }
  ]
  }
  
  switchNameHandler = (event) => {
    this.setState({
      user: [
        { userName: 'Rony' },
        { userName: event.target.value }
      ]
    })
  };

  render() {
    const style = {
      border: '1px solid #eee',
      padding: '8px',
      cursor: 'pointer',
      width: '60%',
      margin: '16px auto',
      boxShadow: '0 2px 3px #ccc',
      textAlign: 'center',
      font: 'inherit'
    }
  return (
    <div className="App">
      <p style={style}>Good Morning!</p>
      <UserInput
        name = {this.state.user[1].userName}
        changeName = {this.switchNameHandler}
      ></UserInput>
      <br />
      <UserOutput       
        name={this.state.user[0].userName}
      ></UserOutput>

      <UserOutput
        name = {this.state.user[1].userName}
      ></UserOutput>
    </div>
  );
}
}

export default App;
