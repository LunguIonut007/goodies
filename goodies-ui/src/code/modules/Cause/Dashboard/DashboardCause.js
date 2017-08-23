import React, { Component } from 'react'
import PageHeader from '../../../core/PageHeader/PageHeader'
import { connect } from 'react-redux'
import OfferActions from 'modules/Offer/OfferRedux'
import CardOffer from './../CardOffer/CardOffer'

class DashboardComponent extends Component {

  offers = [{title: 'dddd', description: 'Lorem ipsum.', id: 1}, { id:3, title: 'Lorem ipsum dolor.', description: 'Lorem ipsum dolor sit amet.' }]

  componentDidMount() {
    this.props.getOffers()
  }

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

export default connect(
  state => ({
    offers: state.offers.list
  }),
  {
    getOffers: OfferActions.getOffersRequest
  }
)(DashboardComponent)