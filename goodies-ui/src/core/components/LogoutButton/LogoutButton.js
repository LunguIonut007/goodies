import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

export default class LogoutButton extends Component {
  render () {
    return (
      <div className='logoutButton-container' data-entityType={this.props.entityType}>
        <Button circular icon='log out' />
      </div>
    )
  }
}
