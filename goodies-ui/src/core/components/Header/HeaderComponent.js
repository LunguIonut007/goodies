import React, { Component } from 'react'
import SearchBar from '../SearchBar/SearchBarComponent'
import NotificationButton from '../NotificationButton/NotificationButton'
import LogoutButton from '../LogoutButton/LogoutButton'

export default class HeaderComponent extends Component {
  render () {
    return (
      <div className='header-container' data-entityType={this.props.entityType}>
        <div className='logo'><div>Goodies</div></div>
        <div className='header-utilities'>
          <SearchBar entityType={this.props.entityType} />
          <NotificationButton entityType={this.props.entityType} />
          <LogoutButton entityType={this.props.entityType} />
        </div>
      </div>
    )
  }
}
