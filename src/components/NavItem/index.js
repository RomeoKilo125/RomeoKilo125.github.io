import React, {Component} from 'react'
import './style.css'

class NavItem extends Component {

  render() {
    return (
      <div className={this.props.className}>
        {this.props.item.name}
      </div>
    )
  }
}

export default NavItem
