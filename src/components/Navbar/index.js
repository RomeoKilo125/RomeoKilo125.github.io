import React, {Component} from 'react'
import './style.css'
import NavItem from '../NavItem'

class Navbar extends Component {
  render() {
    return (
      <div>
        {/* {this.props.items.map(e => <div>{e}</div>)} */}
        {this.props.items.map(e => <NavItem item={e} />)}
      </div>
    )
  }
}

export default Navbar
