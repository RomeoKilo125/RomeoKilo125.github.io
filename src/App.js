import React, { Component } from 'react';
import './App.css';
import About from './data/about.json'
import Projects from './data/projects.json'
import Contact from './components/Contact'
import Header from './components/Header'
import Navbar from './components/Navbar'
import DisplayArea from './components/DisplayArea'

class App extends Component {
  state = {
    'items' : Projects,
    'activeItem' : About
  }
  render() {
    return (
      <div className="App">
        <Contact />
        <Header />
        <Navbar items={this.state.items} active={this.state.activeItem} about={About}/>
        <DisplayArea item={this.state.activeItem} />
      </div>
    );
  }
}

export default App;
