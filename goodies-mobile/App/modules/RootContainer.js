import React, { Component } from 'react'
import { View, StatusBar, Text } from 'react-native'
import ReduxNavigation from '../Navigation/ReduxNavigation'
import { connect } from 'react-redux'
import StartupActions from '../Redux/StartupRedux'
import ReduxPersist from '../Config/ReduxPersist'
import { Header } from 'react-native-elements'
// Styles
import styles from './RootContainerStyles'

class RootContainer extends Component {
  componentDidMount () {
    // if redux persist is not active fire startup action
    if (!ReduxPersist.active) {
      this.props.startup()
    }
  }

  LeftComponent = props =>
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: 'red'}}>left</Text>
    </View>

  CenterComponent = props =>
    <View>
      <Text>center</Text>
    </View>

  RightComponent = props =>
    <View>
      <Text>left</Text>
    </View>

  render () {
    const { LeftComponent, RightComponent, CenterComponent } = this
    return (
      <View style={styles.applicationView}>
        <StatusBar barStyle='light-content' translucent backgroundColor='transparent' />
        <Header
          innerContainerStyles={{ alignItems: 'center', justifyContent: 'space-between' }}
          style={styles.header}
          leftComponent={<LeftComponent />}
          centerComponent={<CenterComponent />}
          rightComponent={<RightComponent />}
        />
        <View style={styles.container}>
          <ReduxNavigation />
        </View>
      </View>
    )
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup())
})

export default connect(null, mapDispatchToProps)(RootContainer)
