import React, {Component} from 'react';
import './App.css';
import About from './data/about.json'
import Projects from './data/projects.json'
import Contact from './components/Contact'
import Header from './components/Header'
import Navbar from './components/Navbar'
import NavItem from './components/NavItem'

import DisplayArea from './components/DisplayArea'

class App extends Component {
  state = {
    'items': Projects,
    'activeItem': ''
  }

  componentDidMount() {
    this.setState({activeItem: About})
  }

  handleClick = (item) => {
    console.log("click")
    this.setState({activeItem: item})
  }

  render() {
    return (<div className="App">
      <Contact/>
      <Header/>
      <Navbar>
        <NavItem handleClick={this.handleClick} id="about-tag" item={About} className={About === this.state.activeItem
          ? 'nav nav-item about-item active-item'
          : 'nav nav-item about-item'}/> {
            this.state.items.map(e => <NavItem handleClick={this.handleClick} id={this.state.items.indexOf(e)} item={e} className={e === this.state.activeItem
              ? 'nav nav-item active-item'
              : 'nav nav-item'}/>)
        }
      </Navbar>
      <DisplayArea item={this.state.activeItem}/>
    </div>);
  }
}

export default App;
