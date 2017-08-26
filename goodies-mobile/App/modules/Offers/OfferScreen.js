import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import ProposalActions from './../../Redux/ProposalRedux'

class OfferScreen extends Component {
  componentDidMount () {
    this.props.getOffers()
  }
  render () {
    const { offers } = this.props
    return (
      <View>
        {offers.map(offer => <Text key={offer.id}> {offer.message}</Text>)}
      </View>
    )
  }
}

export default connect(state => ({
  offers: state.proposal.list
}), {
  getOffers: ProposalActions.getAcceptedProposalsRequest
})(OfferScreen)
