import React, { Component } from 'react'
import Avatar from '../Avatar/AvatarComponent'
import Menu from '../Menu/MenuComponent'

export default class SidebarComponent extends Component {

  donorMenu = [{ name: 'Dashboard' }, { name: 'My Offers' }, {name: 'Requests'}]
  causeMenu = [{ name: 'Dashboard' }, { name: 'My Proposals' }, {name: 'My Users'}]

  render () {
    const { entityType } = this.props
    return (
      <div className='sidebar' data-entityType={entityType}>
        <Avatar src='http://lorempixel.com/400/800/' entityType={entityType} side='25vh' />
        <div className='user-name'>
                  Best Donator Ever cu nume lung de german
                </div>
        <Menu menuItems={entityType === 'cause' ? this.causeMenu : this.donorMenu} pathname='dashboard' entityType={entityType} />
      </div>
    )
  }
}
