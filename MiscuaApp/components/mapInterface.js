import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Permissions } from 'expo-permissions'
import * as Location from 'expo-location';
import { showMarkers } from './apiRequest'

export let location = async () => await Location.getCurrentPositionAsync({});

export default class Maps extends React.Component {
  state = {
    latitude: null,
    longitude: null,
    locations: [],
  }

  async componentDidMount() {
    const { status } = await Location.requestPermissionsAsync();
    if (status !== 'granted') {
      const response = await Permissions.askAsync(Permissions.LOCATION)
    }

    location = await Location.getCurrentPositionAsync({});
    const place = await showMarkers()
    this.setState({
      latitude: location.coords['latitude'],
      longitude: location.coords['longitude'],
      locations: place.places
    })

  }

  render() {
    const { latitude, longitude } = this.state
    if (latitude) {
      return (
        <View style={styles.container}>
          <MapView showsUserLocation={true} style={styles.mapStyle}
            draggable
            initialRegion={{
              latitude,
              longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}>
          </MapView>
        </View>
      );
    }
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <MapView style={styles.mapStyle}
          initialRegion={{
            latitude: 4.5946229,
            longitude: -74.106,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
    )

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

