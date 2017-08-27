import { StyleSheet } from 'react-native'
import { Colors } from './../../Themes/'

export default StyleSheet.create({
  cardContainer: {
    margin: 10,
    width: '95%',
    minHeight: 80,
    elevation: 1,
    backgroundColor: '#FFF'
  },
  padding: {
    padding: 20
  },
  title: {
    fontSize: 20
  },
  description: {
    color: 'gray',
    paddingTop: 10,
    paddingBottom: 5
  },
  message: {
    color: 'grey'
  }
})
