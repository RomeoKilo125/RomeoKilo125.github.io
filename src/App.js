import React, { Component } from 'react';
import './App.css';
import Contact from './components/Contact'
import Header from './components/Header'
import DisplayArea from './components/DisplayArea'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Contact />
        <Header />
        <DisplayArea />
      </div>
    );
  }
}

export default App;
