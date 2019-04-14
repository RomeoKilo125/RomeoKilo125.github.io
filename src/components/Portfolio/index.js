import React, {Component} from 'react';
import './style.css';
import About from '../../data/about.json'
import Projects from '../../data/projects.json'
import Contact from '../Contact'
import Header from '../Header'
import Navbar from '../Navbar'
import NavItem from '../NavItem'
import DisplayArea from '../DisplayArea'

class Portfolio extends Component {
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
    return (<div className="Portfolio">
      <Contact/>
      <Header/>
      <Navbar>
        <NavItem handleClick={this.handleClick} id="about-tag" item={About} className={About === this.state.activeItem
          ? 'nav-item about-item active-item'
          : 'nav-item about-item'}/> {
            this.state.items.map(e => <NavItem handleClick={this.handleClick} key={this.state.items.indexOf(e)} item={e} className={e === this.state.activeItem
              ? 'nav-item active-item'
              : 'nav-item'}/>)
        }
      </Navbar>
      <DisplayArea item={this.state.activeItem}/>
    </div>);
  }
}

export default Portfolio;
