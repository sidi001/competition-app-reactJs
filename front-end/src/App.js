import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LogSansID from './components/LogSansID';
import LogAvecID from './components/LogAvecID';



class App extends Component {
  render() {
    if(true){
      return (
        <div> 
          <LogAvecID isFirst="0"/>
        </div>
      );
    }
      return (
        <div>
          <LogSansID isFirst="0"/>
        </div>
      );
    
    
  }
}

export default App;
