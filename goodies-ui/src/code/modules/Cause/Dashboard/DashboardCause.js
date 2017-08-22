import React, { Component } from 'react'
import PageHeader from '../../../core/PageHeader/PageHeader'
import CardOffer from './../CardOffer/CardOffer'

export default class DashboardComponent extends Component {

  offers = [{title: 'dddd', description: 'Lorem ipsum.', id: 1}, { id:3, title: 'Lorem ipsum dolor.', description: 'Lorem ipsum dolor sit amet.' }]

  render() {
    return (
      <div className='container' style={{minHeight: '90vh'}}>
        <div className='basic-container'>
          <div style={{paddingBottom: 40}}>
          <PageHeader title='Dashboard' />
          </div>

          <div className='card-container'>
            {this.offers.map( offer => <CardOffer offer={offer} key={offer.id} />)}
          </div>
        </div>
      </div>

    )
  }
}
