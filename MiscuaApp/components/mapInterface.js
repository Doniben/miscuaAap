import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Permissions } from 'expo-permissions'
import * as Location from 'expo-location';

export default class  Maps extends React.Component {
  state = {
    latitude:  null,
    longitude:  null
  }

  async componentDidMount() {
    const { status } = await Location.requestPermissionsAsync();
    if ( status !== 'granted') {
      const response = await Permissions.askAsync(Permissions.LOCATION)
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({
      latitude:  location.coords['latitude'],
      longitude: location.coords['longitude']
    })

    console.log(this.state);
  }

  render() {
    const { latitude, longitude } = this.state

    if (latitude) {
      return (
        <View style={styles.container}>
          <MapView  showsUserLocation={true} style={styles.mapStyle}
              initialRegion={{
                latitude,
                longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
          />
        </View>
      );
    }
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Necesitamos Permisos</Text>
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

