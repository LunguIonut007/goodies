import React, { Component } from 'react'
import { View, FlatList } from 'react-native'
import { connect } from 'react-redux'
import ProposalActions from './../../Redux/ProposalRedux'
import OfferCard from './OfferCard'
import { Colors } from './../../Themes/'

class OfferScreen extends Component {
  componentDidMount () {
    this.props.getOffers()
  }

  keyExtractor = item => item.id
  renderItem = ({item}) => <OfferCard offer={item} />

  render () {
    const { offers } = this.props
    return (
      <View style={{width: '100%', height: '100%' }}>
        <FlatList
          style={{width: '100%', height: '100%'}}
          data={offers}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
       />
      </View>
    )
  }
}

export default connect(state => ({
  offers: state.proposal.list
}), {
  getOffers: ProposalActions.getAcceptedProposalsRequest
})(OfferScreen)
