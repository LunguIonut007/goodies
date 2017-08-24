import React, { Component } from 'react'
import  { Button, Card } from 'semantic-ui-react'

export default class CardComponent extends Component {
  render () {
    const { offer } = this.props
    return (
      <Card>
            <Card.Content header={offer.title} />
              <Card.Content description={offer.description} className="text" />
              <Card.Content extra>
                {/* <Icon name='user' /> */}
               <Button>Request</Button>
          </Card.Content>
      </Card>
    )
  }
}

{/* <div className='card-offer-container'>
<div className='title'>{offer.title}</div>
<div className='description'>{offer.description}</div>
<div className='buttons'>
  <Button>request</Button>
</div>
</div> */}