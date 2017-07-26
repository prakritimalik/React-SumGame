import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Quiz from './Quiz';

class App extends Component {
  constructor(props) {
    super(props);

    let riddle = {

      resultsArray : [8,9,10,11],
      field1: 5,
      field2 : 5,
      answer:10


    };
    this.state = { 
      riddle : riddle
    };
  }
  render() {
    return (
      <div className="App">
        
        <Quiz/>

      </div>
    );
  }
}

export default App;
