import React, { Component } from 'react'
import PageHeader from '../../../core/PageHeader/PageHeader'
import { connect } from 'react-redux'
import OfferActions from 'modules/Offer/OfferRedux'
import CardOffer from 'modules/Offer/CardOffer/CardOffer'
import { I18n } from 'react-redux-i18n'

class Page extends Component {
  componentDidMount () {
    this.props.getOwnOffers()
  }

  render () {
    const { offers, entityType } = this.props

    return (
      <div className='container' style={{minHeight: '90vh'}}>
        <div className='basic-container'>
          <div style={{paddingBottom: 40}}>
            <PageHeader title={I18n.t('headers.myOffers')} />
          </div>
          <div className='card-container-layout'>
            {offers.map(offer => <CardOffer offer={offer} entityType={entityType} key={offer.id} />)}
          </div>
        </div>
      </div>

    )
  }

  componentWillUnmount () {
    this.props.reset()
  }
}

export default connect(
  state => ({
    offers: state.offers.list,
    entityType: state.login.entityType
  }), {
    getOwnOffers: OfferActions.getOwnOffersRequest,
    reset: OfferActions.reset
  }
)(Page)
