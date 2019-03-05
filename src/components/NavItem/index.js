import React from 'react'
import './style.css'

function NavItem(props) {
    return (
      <div className={props.className} onClick={() => {props.handleClick(props.item)}}>
          {props.item.name}
      </div>
    )
}

export default NavItem
