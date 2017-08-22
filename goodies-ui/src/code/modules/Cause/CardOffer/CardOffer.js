import React, { Component } from 'react'
import  { Button } from 'semantic-ui-react'

export default class CardComponent extends Component {
  render () {
    const { offer } = this.props
    return (
      <div className='card-offer-container'>
      <div className='title'>{offer.title}</div>
      <div className='description'>{offer.description}</div>
      <div className='buttons'>
        <Button>request</Button>
      </div>
      </div>
    )
  }
}
