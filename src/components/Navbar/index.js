import React, {Component} from 'react'
import './style.css'
import NavItem from '../NavItem'

class Navbar extends Component {
  render() {
    return (
      <div>
        <NavItem item={this.props.active} />
        {this.props.items.map(e => <NavItem item={e} />)}
      </div>
    )
  }
}

export default Navbar
