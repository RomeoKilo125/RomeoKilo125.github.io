import React from 'react'
import './style.css'

function DisplayArea(props) {
  let item = props.item
  return (
    item.name === 'About'
    ? <div className='display display-about'>
      Bio: {item.bio}
    </div>
    : <div className='display display-project'>
      <div className='project-name'>{item.name}</div>
      <div className='project-thumbnail'><iframe title={item.name} width='560' height='315' src={item.thumbnail} frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>
      <div className='project-description'>{item.description}</div>
      <div className='project-link'>Code: <a href={item.codeLink} > {item.codeLink}</a></div>
      {item.liveLink !== "" ? <div className='project-link'>Live: <a href={item.liveLink} > {item.liveLink}</a></div> :''}
    </div>)
}

export default DisplayArea
