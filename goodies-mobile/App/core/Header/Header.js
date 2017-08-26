import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
// Styles
import styles from './HeaderStyles'

class RootContainer extends Component {
  render () {
    return (
      <View>
          <Text> Header </Text>
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
})

export default connect(null, mapDispatchToProps)(RootContainer)
