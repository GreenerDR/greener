import React, { useState, useEffect, useRef, useCallback } from 'react';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import MarkerData from '../utils/MarkerData';
import MapsSearchBar from '../components/MapsSearchBar';
import LocationList from '../components/LocationList';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import NetInfo from '@react-native-community/netinfo';
import {
  ScrollView,
  FlatList,
  TouchableOpacity as Touchable,
} from 'react-native-gesture-handler';

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

export default function MapsScreen({ navigation }) {
  const [isConected, setIsConected] = useState();
  const [placesData, setPlacesData] = useState([]);
  const [selectedItem, setSelectedItem] = useState({
    id: '0',
    title: 'Todos',
  });
  const [selectedAllLocations, setSelectedAllLocations] = useState(0);

  NetInfo.fetch().then((state) => {
    setIsConected(state.isConnected);
  });

  const Item = ({ item, onPress, style }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
      <Text
        style={
          item.id === selectedItem.id
            ? styles.selectedOption
            : styles.notSelectedOption
        }
      >
        {item.title}
      </Text>
    </TouchableOpacity>
  );

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
      if (selectedItem.title == 'Tiendas') {
        setSelectedAllLocations(2);
        console.log('solo tiendas');
      }
      if (selectedItem.title == 'Contenedores') {
        setSelectedAllLocations(3);
        console.log('solo contenedores');
      }
    },
    [selectedItem],
  );
  // pasar a funcion util
  const locationCustomPin = (item) => {
    if (item.locationType.id == 1) {
      return require('../../assets/centroAcopio.png');
    }
    if (item.locationType.id == 2) {
      return require('../../assets/tiendaEco.png');
    }
    if (item.locationType.id == 3) {
      return require('../../assets/contenedor.png');
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
          return item.locationType.id == IDTipo;
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

  const sheetRef = React.useRef(null);
  const Map = useRef(null);

  const renderBottomSheetContent = () => (
    <View style={styles.bottomSheet}>
      <View style={styles.burgerIconView}>
        <Touchable
          onPress={() => {
            sheetRef.current.snapTo(1);
          }}
        >
          <SimpleLineIcons
            style={styles.imgCloseMenuList}
            name="menu"
            size={30}
            color="green"
          />
        </Touchable>
      </View>
      <LocationList placesData={placesData} navigation={navigation} />
    </View>
  );

  if (isConected == false) {
    return (
      <View style={styles.noInternetScreen}>
        <View style={styles.noInternetContainer}>
          <MaterialIcons
            name="signal-cellular-connected-no-internet-4-bar"
            size={60}
            color="green"
          />
          <Text>Sin internet</Text>
        </View>
      </View>
    );
  } else {
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
            <View style={styles.touchableView}>
              <SimpleLineIcons
                style={styles.imgMenuList}
                name="menu"
                size={20}
                color="black"
              />
              <Text>Ver locaciones</Text>
            </View>
          </TouchableOpacity>
        </View>
        <BottomSheet
          ref={sheetRef}
          snapPoints={[windowHeight * 0.4, 0]}
          borderRadius={15}
          renderContent={renderBottomSheetContent}
          initialSnap={1}
        />
      </View>
    );
  }
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
    margin: windowHeight * 0.055,
    width: '100%',
  },
  item: {
    padding: 10,
    marginRight: windowWidth * 0.01,
    marginTop: windowHeight * 0.015,
    backgroundColor: '#00BCD4',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#372a0c',
    height: windowHeight * 0.06,
    marginLeft: windowWidth * 0.01,
  },
  listButttonView: {
    alignItems: 'center',
    position: 'absolute',
    bottom: windowHeight * 0.005,
    height: windowWidth * 0.15,
    left: windowWidth * 0.48,
  },
  touchableView: {
    flexDirection: 'row',
  },
  imgMenuList: {
    marginRight: windowWidth * 0.03,
  },
  listButtton: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderWidth: 2,
    borderColor: '#372a0c',
    borderRadius: 15,
  },
  selectedOption: { color: '#fff' },
  notSelectedOption: { color: '#000000' },
  noInternetScreen: {
    width: windowWidth,
    height: windowHeight,
    alignItems: 'center',
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  noInternetContainer: {
    marginTop: windowHeight * 0.35,
    marginBottom: windowHeight * 0.35,
    marginRight: windowWidth * 0.05,
    marginLeft: windowWidth * 0.05,
  },
  bottomSheet: {
    backgroundColor: 'white',
    width: windowWidth,
    height: windowHeight * 0.4,
    padding: windowWidth * 0.016,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgCloseMenuList: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  burgerIconView: {
    minHeight: windowHeight * 0.002,
  },
});
