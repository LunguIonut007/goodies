import { TabNavigator, StackNavigator } from 'react-navigation'
import React from 'react'
import { View } from 'react-native'
import LoginScreen from '../modules/Login/LoginScreen'
import OffersScreen from '../modules/Offers/OfferScreen'
import MapScreen from '../modules/Map/MapScreen'
import ChatScreen from '../modules/Chat/ChatScreen'

import styles from './Styles/NavigationStyles'
import { Colors } from './../Themes/'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  Login: { screen: LoginScreen },
  Tab: { screen: TabNavigator({
    Offers: { screen: OffersScreen },
    Chat: { screen: ChatScreen },
    Map: { screen: MapScreen }
  }, {
      // Default config for all screens
    initialRouteName: 'Offers',
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: '#fff',
      inactiveTintColor: '#b5b5b5',
      style: {
        backgroundColor: Colors.PrimaryCardColor
      }
    }
  })}
}, {
  navigationOptions: {
    headerStyle: styles.header,
    title: 'Goodies',
    headerTitleStyle: { color: '#FFF', alignSelf: 'center' },
    headerRight: <View />,
    headerLeft: <View />
  },
  initialRouteName: 'Login'
})
export default PrimaryNav
