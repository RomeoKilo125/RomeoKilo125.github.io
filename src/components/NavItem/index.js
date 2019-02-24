import React, {Component} from 'react'
import './style.css'

class NavItem extends Component {
  render() {
    return (
      <div>
        {this.props.item.name}
      </div>
    )
  }
}

export default NavItem
