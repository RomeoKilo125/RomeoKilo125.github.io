import React, {Component} from 'react'
import './style.css'

class DisplayArea extends Component {
render() {
  return (
    <div className='display'>{JSON.stringify(this.props.item)}</div>
  )
}
}

export default DisplayArea
