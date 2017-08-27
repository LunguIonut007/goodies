import React, { Component } from 'react'
import { View } from 'react-native'
import { List, ListItem } from 'react-native-elements'
import { connect } from 'react-redux'

class ChatScreen extends Component {
  avatarUrl = 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'

  render () {
    const { offers } = this.props
    return (
      <View>
        <List containerStyle={{marginBottom: 20}}>
          {
          offers.map(offer => (
            <ListItem
              roundAvatar
              avatar={{uri: this.avatarUrl}}
              key={offer.id}
              title={`${offer.user.name} | ${offer.offer.title}`}
            />
          ))
        }
        </List>
      </View>
    )
  }
}

export default connect(state => ({
  offers: state.proposal.list
}), {
})(ChatScreen)
