import React, { Component } from 'react'
import Avatar from '../Avatar/AvatarComponent'
import Menu from '../Menu/MenuComponent'

export default class SidebarComponent extends Component {
  render () {
    return (
      <div className='sidebar' data-entityType={this.props.entityType}>
        <Avatar src='http://lorempixel.com/400/800/' entityType={this.props.entityType} side='25vh' />
        <div className='user-name'>
                  Best Donator Ever cu nume lung de german
                </div>
        <Menu menuItems={[{ name: 'Dashboard' }, { name: 'Profile' }, {name: 'donations'}]} pathname='dashboard' entityType={this.props.entityType} />
      </div>
    )
  }
}
