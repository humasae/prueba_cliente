import React, { Component } from 'react';
import MainRouter from './MainRouter'
import Header from './Header'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header/>
          <MainRouter />
        </header>
      </div>
    );
  }
}

export default App;
