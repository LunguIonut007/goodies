import React, { Component } from 'react'

export default class AvatarComponent extends Component {
  render () {
    const { src, alt, side } = this.props
    return (
      <div className='avatar-container' style={{width: side, height: side, backgroundImage: src}}>
        <img alt={alt} className='avatar' data-entityType={this.props.entityType} style={{backgroundImage: 'url(' + src + ')'}} />
      </div>
    )
  }
}
