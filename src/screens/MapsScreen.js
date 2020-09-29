import React, { useState, useEffect, useRef, useCallback } from 'react';
import MapView from 'react-native-maps';
import { Marker, Callout } from 'react-native-maps';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import MarkerData from '../utils/MarkerData';
import MapsSearchBar from '../components/MapsSearchBar';
import LocationScreen from './LocationScreen';

const DATA = [
  {
    id: '0',
    title: 'Todos',
  },
  {
    id: '1',
    title: 'Centros de acopio',
  },
  {
    id: '2',
    title: 'Tiendas',
  },
  {
    id: '3',
    title: 'Contenedores',
  },
];
const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.title}>{item.title}</Text>
  </TouchableOpacity>
);

export default function MapsScreen({ navigation }) {
  const [placesData, setPlacesData] = useState([]);
  //const [selectedLocation, setSelectedLocation] = useState({});
  const [selectedItem, setSelectedItem] = useState({
    id: '0',
    title: 'Todos',
  });
  //todos
  const [selectedAllLocations, setSelectedAllLocations] = useState(0);

  const renderItem = useCallback(
    ({ item }) => {
      const backgroundColor = item.id === selectedItem.id ? '#372a0c' : '#fff';
      return (
        <Item
          item={item}
          onPress={() => {
            setSelectedItem(item);
            console.log(selectedItem.id, selectedItem.title);
          }}
          style={{ backgroundColor }}
        />
      );
    },
    [selectedItem],
  );

  useEffect(() => {
    MarkerData().then((Marker) => {
      setPlacesData(Marker);
    });
  }, []);

  useEffect(
    function () {
      if (selectedItem.title == 'Todos') {
        setSelectedAllLocations(0);
        console.log('Todos');
      }
      if (selectedItem.title == 'Centros de acopio') {
        setSelectedAllLocations(1);
        console.log('solo centros');
      }
      if (selectedItem.title == 'Contenedores') {
        setSelectedAllLocations(2);
        console.log('solo contenedores');
      }
      if (selectedItem.title == 'Tiendas') {
        setSelectedAllLocations(3);
        console.log('solo tiendas');
      }
    },
    [selectedItem],
  );
  // pasar a funcion util
  const locationCustomPin = (item) => {
    if (item.IDTipo == 1) {
      return require('../../assets/recycleT.png');
    }
    if (item.IDTipo == 2) {
      return require('../../assets/trashT.png');
    }
    if (item.IDTipo == 3) {
      return require('../../assets/recyclableT.png');
    }
  };

  const changePingLocations = useCallback(
    (state) => {
      let IDTipo;

      switch (state) {
        case 0:
          IDTipo = 0;
          break;
        case 1:
          IDTipo = 1;
          break;
        case 2:
          IDTipo = 2;
          break;
        case 3:
          IDTipo = 3;
          break;
      }

      let unfilteredArray = placesData;
      let filteredArray;

      if (IDTipo == 0) {
        filteredArray = unfilteredArray;
      } else {
        filteredArray = unfilteredArray.filter(function (item) {
          return item.IDTipo == IDTipo;
        });
      }

      return filteredArray.map((item, index) => (
        <Marker
          key={index}
          image={locationCustomPin(item)}
          coordinate={{
            latitude: item.latitude,
            longitude: item.longitude,
          }}
          onPress={() => {
            navigation.navigate('Location', item);
          }}
        />
      ));
    },
    [placesData, locationCustomPin],
  );

  const Map = useRef(null);

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
        ref={(MapView) => {
          Map.current = MapView;
        }}
      >
        {changePingLocations(selectedAllLocations)}
      </MapView>

      <View style={styles.searchBar}>
        <MapsSearchBar
          Map={Map}
          setSelectedItem={setSelectedItem}
          placesData={placesData}
        />
        <FlatList
          style={styles.list}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedItem}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
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
    top: -200,
    width: '100%',
    height: '100%',
  },
  list: {
    position: 'absolute',
    top: 200,
    width: '100%',
    height: '10%',
    marginTop: 180,
  },
  item: {
    padding: 25,
    marginRight: 15,
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: '#00BCD4',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#372a0c',
  },
});
