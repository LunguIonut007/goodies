import React, { Component } from 'react'
import Avatar from 'core/Avatar/AvatarComponent'
import LikeButton from 'core/LikeButton/LikeButton'
import ContactButton from 'core/ContactButton/ContactButton'
import HelpButton from 'core/HelpButton/HelpButtons'

export default class CardComponent extends Component {
  render () {
    const {name, src, motto, shortDescription} = this.props
    return (
      <div className='card-container-cause'>
        <div style={{ display: 'flex' }}>
          <div className='card-avatar'>
            <Avatar src={src} entityType='cause' side='25vh' />
          </div>
          <div className='text'>
            <div className='name'>
              {name}
            </div>
            <div className='motto'>
              {motto}
            </div>
          </div>
        </div>
        <div className='description'>{shortDescription}</div>
        <div>Tags:de facut+butoane</div>
        <div className='buttons'>
          <LikeButton />
          <ContactButton />
          <HelpButton />
        </div>
      </div>
    )
  }
}
