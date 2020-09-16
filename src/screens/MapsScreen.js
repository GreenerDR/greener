import React, { useState, useEffect } from 'react';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MarkerData from '../utils/MarkerData';
import MapsSearchBar from '../components/MapsSearchBar';

let PlacesData = MarkerData();

export default class MapsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.mapStyle}
          initialRegion={{
            latitude: 18.490622,
            longitude: -69.958738,
            latitudeDelta: 0.09,
            longitudeDelta: 0.1,
          }}
        >
          {PlacesData.map((item, index) => (
            <Marker
              key={index}
              icon={'defaut'}
              pinColor={'red'}
              coordinate={{
                latitude: item.latitude,
                longitude: item.longitude,
              }}
              title={item.title}
              description={item.description}
            />
          ))}
        </MapView>
        <View style={styles.searchBar}>
        <MapsSearchBar />
        </View>
      </View>
    );
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
    width: '100%',
    height: '100%',
  },
  searchBar: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    top: -200,
    width: '100%',
    height: '100%',
  },
});
