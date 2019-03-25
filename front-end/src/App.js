import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LogSansID from './components/LogSansID';



class App extends Component {
  render() {
    return (
      <div > 
        <LogSansID isFirst="0"/>
      </div>
    );
  }
}

export default App;
