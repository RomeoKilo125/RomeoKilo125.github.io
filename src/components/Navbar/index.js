import React, {Component} from 'react'
import './style.css'
import NavItem from '../NavItem'

class Navbar extends Component {
  render() {
    return (
      <div className='nav navbar'>
        <NavItem item={this.props.about} className='nav nav-item about-item' />
        {this.props.items.map(e => <NavItem item={e} className='nav nav-item' />)}
      </div>
    )
  }
}

export default Navbar
