import React, { Component } from 'react'
import {Button} from 'semantic-ui-react'

export default class NotificationButton extends Component {
  render () {
    return (
      <div className='notificationButton-container' data-entityType={this.props.entityType}>
        <Button circular icon='bell outline' />
      </div>
    )
  }
}
