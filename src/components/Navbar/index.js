import React, {Component} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'

import './style.css'

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: 'off'
    }
  }

  navToggle = () => {
    this.setState({
      visible: this.state.visible === 'on'
        ? 'off'
        : 'on'
    })
  }

  render() {
    let nav_class = `navbar ${this.state.visible}`
    return (<div>
      <div className='nav-icon' onClick={this.navToggle}><FontAwesomeIcon icon={faBars}/></div>
      <div className={nav_class} onClick={this.navToggle}>{this.props.children}</div>
    </div>)
  }
}

export default Navbar
