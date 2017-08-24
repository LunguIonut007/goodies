import React, { Component } from 'react'
import PageHeader from '../../../core/PageHeader/PageHeader'
import { connect } from 'react-redux'
import OfferActions from 'modules/Offer/OfferRedux'
import CardOffer from './../CardOffer/CardOffer'

class DashboardComponent extends Component {

  componentDidMount() {
    this.props.getOffers()
  }

  render() {
    const { offers } = this.props
    return (
      <div className='container' style={{minHeight: '90vh'}}>
        <div className='basic-container'>
          <div style={{paddingBottom: 40}}>
          <PageHeader title='Dashboard' />
          </div>

          <div className='card-offer-container'>
            {offers.map( offer => <CardOffer offer={offer} key={offer.id} />)}
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