import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import styles from './OfferStyles'
class OfferScreen extends Component {
  render () {
    const { offer } = this.props
    return (
      <View style={styles.cardContainer}>
        <Text>{offer.offer.title}</Text>
        <Text>{offer.offer.description}</Text>
        <Text>{offer.message}</Text>
      </View>
    )
  }
}

export default connect(state => ({
}), {
})(OfferScreen)
