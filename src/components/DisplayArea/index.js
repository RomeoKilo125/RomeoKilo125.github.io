import React, {Component} from 'react'
import ReactPlayer from 'react-player'
import './style.css'

class DisplayArea extends Component {

  render() {
    return (
      this.props.item.name === 'About'
      ? <div className='display display-about'>
        <div className='profilePic'>
          <img className='about-img' alt='Profile Pic' src={process.env.PUBLIC_URL + this.props.item.pic}/>
        </div>
        <div className='bio'>{this.props.item.bio}</div>
      </div>
      : <div className='display display-project'>
        <div className='project-name'>{this.props.item.name}</div>
        <div className='project-thumbnail'>
          <ReactPlayer className='embedded-video' url={this.props.item.thumbnail} controls="controls" width='auto' height='auto'/>
        </div>
        <div className='project-description'>{this.props.item.description}</div>
        <div className='project-link'>
          Code: <a href={this.props.item.codeLink}>{this.props.item.codeLink}</a>
        </div>
        {
          this.props.item.liveLink !== ""
            ? <div className='project-link'>Live:
              <a href={this.props.item.liveLink}>{this.props.item.liveLink}</a>
            </div>
            : ''
        }
      </div>)

  }
}

export default DisplayArea
