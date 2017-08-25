import React, { Component } from 'react'
import { Button, Card } from 'semantic-ui-react'

export default class CardComponent extends Component {
  render () {
    const { offer, entityType } = this.props
    console.log(entityType)
    return (
      <div className='card-margin'>
        <Card className={`card-offer-${entityType}`}>
          <Card.Content header={offer.title} />
          <Card.Content description={offer.description} className='text' />
          <Card.Content extra>
            {offer.requested !== undefined &&
            <Button icon={offer.requested && 'checkmark'} content='Request' size='tiny' fluid disabled={offer.requested} />}
          </Card.Content>
        </Card>
      </div>
    )
  }
}
