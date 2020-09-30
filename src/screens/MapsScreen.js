import React, { useState, useEffect, useRef, useCallback } from 'react';
import MapView from 'react-native-maps';
import { Marker, Callout } from 'react-native-maps';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import MarkerData from '../utils/MarkerData';
import MapsSearchBar from '../components/MapsSearchBar';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

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

  const renderContent = () => (
    <View
      style={{
        backgroundColor: 'white',
        padding: 16,
        height: 450,
      }}
    >
      <Text>Swipe down to close</Text>
    </View>
  );

  const sheetRef = React.useRef(null);
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

      <View style={styles.actionComponents}>
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
      <View style={styles.listButttonView}>
        <TouchableOpacity
          style={styles.listButtton}
          onPress={() => {
            sheetRef.current.snapTo(0);
          }}
        >
          <Text>Ver Lista</Text>
        </TouchableOpacity>
      </View>

      <BottomSheet
        ref={sheetRef}
        snapPoints={[450, 300, 0]}
        borderRadius={10}
        renderContent={renderContent}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    width: windowWidth,
    height: windowHeight,
  },
  mapStyle: {
    width: windowWidth,
    height: windowHeight,
  },
  actionComponents: {
    alignItems: 'center',
    position: 'absolute',
    width: windowWidth,
    height: windowHeight,
    marginTop: windowHeight * 0.1,
  },
  list: {
    position: 'absolute',
    margin: windowHeight * 0.04,
    width: '100%',
    height: '10%',
  },
  item: {
    padding: 10,
    marginRight: 10,
    marginTop: 10,
    backgroundColor: '#00BCD4',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#372a0c',
    height: windowHeight * 0.06,
  },
  listButttonView: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 50,
    alignItems: 'center',
    paddingHorizontal: 30,
    marginBottom: 20,
  },
  listButtton: {
    position: 'absolute',
    right: 10,
    backgroundColor: '#1ea1f2',
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
});
