import { TabNavigator, StackNavigator } from 'react-navigation'
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
    headerMode: 'none',
    initialRouteName: 'Offers',
    navigationOptions: {
      headerStyle: styles.header
    },
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
  headerMode: 'none',
  initialRouteName: 'Login'
})
export default PrimaryNav
