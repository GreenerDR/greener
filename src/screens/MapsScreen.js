import React, { useState, useEffect, Component } from 'react';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, KeyboardAvoidingView, Button } from 'react-native';
import MarkerData from '../utils/MarkerData';
import MapsSearchBar from '../components/MapsSearchBar';
import LocationScreen from './LocationScreen';

export default function MapsScreen() {
 
  let PlacesData = MarkerData();
  const [selectedLocation, setSelectedLocation ] = useState(null);
  const [userLocation, setUserLocation ] = useState(null);

  const locationCustomPin = (item) => {
    if(item.IDTipo == 1){
      return (require('../../assets/recycleT.png'))
    }
    if(item.IDTipo == 2){
      return (require('../../assets/trashT.png'))
    }
    if(item.IDTipo == 3){
      return (require('../../assets/recyclableT.png'))
    }
  }
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
              image = {locationCustomPin(item)}
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
          <MapsSearchBar
          setSelectedLocation = {setSelectedLocation}
          />
        </View>
      </View>
    );
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
