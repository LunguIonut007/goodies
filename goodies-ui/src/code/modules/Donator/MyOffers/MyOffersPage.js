import React, { Component } from 'react'
import PageHeader from '../../../core/PageHeader/PageHeader'
import { connect } from 'react-redux'
import OfferActions from 'modules/Offer/OfferRedux'
import CardOffer from 'modules/Offer/CardOffer/CardOffer'
class Page extends Component {
  componentDidMount () {
    this.props.getOwnOffers()
  }

  render () {
    const { offers } = this.props

    return (
      <div className='container' style={{minHeight: '90vh'}}>
        <div className='basic-container'>
          <div style={{paddingBottom: 40}}>
            <PageHeader title='My offers' />
          </div>
          <div className='card-offer-container'>
            {offers.map(offer => <CardOffer offer={offer} key={offer.id} />)}
          </div>
        </div>
      </div>

    )
  }
}

export default connect(
  state => ({
    offers: state.offers.list
  }), {
    getOwnOffers: OfferActions.getOwnOffersRequest
  }
)(Page)
