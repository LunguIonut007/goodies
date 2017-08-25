import React, { Component } from 'react'
import { Button, Card } from 'semantic-ui-react'
import RequestAcceptModal from './../RequestAcceptModal'

export default class CardComponent extends Component {
  onClick = () => {
    this.setState({open: !this.state.open})
  }

  componentWillMount () {
    this.state = { open: false }
  }
  render () {
    const { request } = this.props
    return (
      <div className='card-margin'>
        <Card className='request-card'>
          <RequestAcceptModal open={this.state.open} onClick={this.onClick} />
          <Card.Content header={`Request from: ${request.organization.userName}`} />
          <Card.Content
            description={`The cause has requested the offer with the title: ${request.offer.title}`}
            className='text'
                />
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button color='green' onClick={this.onClick}>Approve</Button>
              <Button color='red'>Decline</Button>
            </div>
          </Card.Content>
        </Card>
      </div>
    )
  }
}
