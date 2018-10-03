import React, { Component } from 'react';
import Main from './Main'
import Header from './Header'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header/>
          <Main />
        </header>
      </div>
    );
  }
}

export default App;
