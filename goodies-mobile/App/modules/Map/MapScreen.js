import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { MapView, Location, Permissions } from 'expo'
export default class MapScreen extends Component {
  componentWillMount () {
    this.state = {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      },
      markers: []
    }

    this.getLocationAsync()
  }

  getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION)

    if (status !== 'granted') {
      this.setState({error: 'No permission'})
    } else {
      let location = await Location.getCurrentPositionAsync({})
      this.setState({
        region: {...this.state.region, latitude: location.coords.latitude, longitude: location.coords.longitude}
        // markers: [...this.state.markers, {coords: location.coords, title: 'Me'}]
      })
    }
  }

  onRegionChange = region => {
    this.setState({region})
  }

  render () {
    const { region, markers } = this.state
    return (
      <MapView
        style={{ flex: 1 }}
        region={region}
        onRegionChange={this.onRegionChange}
        showsUserLocation>
        {markers.map((marker, index) => (
          <MapView.Marker
            key={index}
            coordinate={marker.coords}
            title={marker.title}
        />
  ))}
      </MapView>
    )
  }
}
