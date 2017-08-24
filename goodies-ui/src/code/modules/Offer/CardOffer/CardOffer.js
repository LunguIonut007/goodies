import React, { Component } from 'react'
import { Button, Card } from 'semantic-ui-react'

export default class CardComponent extends Component {
  render () {
    const { offer } = this.props
    return (
      <Card>
        <Card.Content header={offer.title} />
        <Card.Content description={offer.description} className='text' />
        <Card.Content extra>
          {offer.requested !== undefined &&
          <Button icon={offer.requested && 'checkmark'} content='Request' disabled={offer.requested} />}
        </Card.Content>
      </Card>
    )
  }
}
