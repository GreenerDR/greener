import React, { useState, useEffect, useRef, useCallback } from 'react';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import {
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Keyboard,
} from 'react-native';
import styles from '../styles/mapsS';
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
  const sheetRef = React.useRef(null);
  const fall = new Animated.Value(1);
  const Map = useRef(null);
  const [isConected, setIsConected] = useState();
  const [placesData, setPlacesData] = useState([]);
  const [selectedItem, setSelectedItem] = useState({
    id: '0',
    title: 'Todos',
  });
  const [selectedAllLocations, setSelectedAllLocations] = useState(0);
  const [keyboardIsOpen, setKeyboardIsOpen] = useState(false);
  const [bottomSheetIsOpen, setBottomSheetIsOpen] = useState(false);

  Keyboard.addListener('keyboardDidShow', () => {
    setKeyboardIsOpen(true);
    sheetRef.current.snapTo(1);
  });
  Keyboard.addListener('keyboardDidHide', () => {
    setKeyboardIsOpen(false);
  });

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
          }}
          style={{ backgroundColor }}
        />
      );
    },
    [selectedItem],
  );

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      MarkerData().then((Marker) => {
        setPlacesData(Marker);
      });
    }
    return () => (mounted = false);
  }, []);

  useEffect(
    function () {
      let mounted = true;
      if (mounted) {
        if (selectedItem.title === 'Todos') {
          setSelectedAllLocations(0);
        } else if (selectedItem.title === 'Centros de acopio') {
          setSelectedAllLocations(1);
        } else if (selectedItem.title === 'Tiendas') {
          setSelectedAllLocations(2);
        } else if (selectedItem.title === 'Contenedores') {
          setSelectedAllLocations(3);
        }
      }
      return () => (mounted = false);
    },
    [selectedItem],
  );

  const locationCustomPin = (item) => {
    if (item.locationType.id === 1) {
      return require('../../assets/centroAcopio.png');
    }
    if (item.locationType.id === 2) {
      return require('../../assets/tiendaEco.png');
    }
    if (item.locationType.id === 3) {
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

      if (IDTipo === 0) {
        filteredArray = unfilteredArray;
      } else {
        filteredArray = unfilteredArray.filter(function (item) {
          return item.locationType.id === IDTipo;
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
    [placesData, navigation],
  );
  const renderBottomSheetContent = () => (
    <View style={styles.bottomSheet}>
      <View style={styles.burgerIconView}>
        <Touchable
          onPress={() => {
            sheetRef.current.snapTo(1);
            setBottomSheetIsOpen(false);
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

  if (isConected === false) {
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
              setBottomSheetIsOpen(true);
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
          callbackNode={fall}
          initialSnap={1}
          enabledGestureInteraction={true}
        />
      </View>
    );
  }
}
