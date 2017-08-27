import {StyleSheet} from 'react-native'
import { Colors } from './../Themes/'
export default StyleSheet.create({
  applicationView: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.LightBackground
  },
  container: {
    width: '100%',
    height: '100%'
  },
  header: {
    height: '15%',
    width: '100%',
    left: 0,
    top: 0,
    position: 'absolute',
    backgroundColor: Colors.PrimaryCardColor
  }
})
