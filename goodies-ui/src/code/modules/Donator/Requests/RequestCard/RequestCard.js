import React, { Component } from 'react'
import { Button, Card } from 'semantic-ui-react'

export default class CardComponent extends Component {
  render () {
    const { request } = this.props
    return (
      <Card>
        <Card.Content header={`Request from: ${request.organization.userName}`} />
        <Card.Content
          description={`The cause has requested the offer with the title: ${request.offer.title}`}
          className='text'
              />
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic color='green'>Approve</Button>
            <Button basic color='red'>Decline</Button>
          </div>
        </Card.Content>
      </Card>
    )
  }
}
