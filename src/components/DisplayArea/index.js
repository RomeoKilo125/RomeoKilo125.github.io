import React, {Component} from 'react'
import './style.css'
import Navbar from '../Navbar'
import Projects from '../../projects.json'

class DisplayArea extends Component {
  state = {
    'items' : Projects,
    'activeItem' : 'Hangman'
  }
render() {
  return (
    <Navbar items={this.state.items.filter( e => e.name !== this.state.activeItem.name)} />
  )
}
}

export default DisplayArea
