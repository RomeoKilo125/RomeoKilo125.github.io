import React, {Component} from 'react'
import './style.css'

class Navbar extends Component {
  render() {
    return (
      <div className='nav navbar'>{this.props.children}</div>)
  }
}

export default Navbar
