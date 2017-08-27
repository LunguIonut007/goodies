import React, { Component } from 'react'
import { connect } from 'react-redux'
import { MapView, Location, Permissions } from 'expo'
import privateKeys from './../../Config/privateKeys'

class MapScreen extends Component {
  componentWillMount () {
    Location.setApiKey(privateKeys.googleMaps)
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
    this.setMarkers(this.props.offers)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.offers !== this.props.offers) {
      this.setMarkers(nextProps.offers)
    }
  }

  setMarkers = (offers) => {
    this.setState({ markers: offers.map(
      offer => ({
        coords: { latitude: offer.latitude, longitude: offer.longitude },
        title: offer.user.name
      })
  )})
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
    console.log('region', region)
    return (
      <MapView
        style={{ flex: 1 }}
        region={region}
        initialRegion={region}
        onRegionChange={this.onRegionChange}
        showsMyLocationButton
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

export default connect(state => ({
  offers: state.proposal.list
}), {
})(MapScreen)
