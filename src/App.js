import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Book from './book'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Address Book</h1>
        </header>
          <Book />
      </div>
    );
  }
}

export default App;
