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
      <div className='project-thumbnail'>
        <video controls>
          <source src={process.env.PUBLIC_URL + '/' + item.thumbnail} type='video/mp4'></source>
        </video>
      </div>
      <div className='project-description'>{item.description}</div>
      <div className='project-link'>Code:
        <a href={item.codeLink}>
          {item.codeLink}</a>
      </div>
      {
        item.liveLink !== ""
          ? <div className='project-link'>Live:
              <a href={item.liveLink}>
                {item.liveLink}</a>
            </div>
          : ''
      }
    </div>)
}

export default DisplayArea
