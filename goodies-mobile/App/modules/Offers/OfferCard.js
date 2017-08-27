import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import styles from './OfferStyles'
import { Divider } from 'react-native-elements'

class OfferScreen extends Component {
  render () {
    const { offer } = this.props
    return (
      <View style={styles.cardContainer}>
        <View style={styles.padding}>
          <Text style={styles.title}>{offer.offer.title}</Text>
          <Text style={styles.description} numberOfLines={1}>{offer.offer.description}</Text>
          <Divider style={{ backgroundColor: 'orange' }} />
          <Text>
            <Text style={styles.message}>Message: </Text>{offer.message}
          </Text>
        </View>
      </View>
    )
  }
}

export default connect(state => ({
}), {
})(OfferScreen)
