import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Dimensions, TextInput } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function MapsSearchBar(props) {
  const { Map, setSelectedItem, placesData } = props;
  const [searchData, setSearchData] = useState(null);

  const searchPlace = () => {
    placesData.map((item, index) => {
      if (item.title == searchData) {
        console.log(item.title);
        console.log(item.description);
        console.log(item.latitude, item.longitude);
        setSelectedItem({
          id: '0',
          title: 'Todos',
        });
        Map.current.animateCamera(
          {
            center: {
              latitude: item.latitude,
              longitude: item.longitude,
            },
            zoom: 17,
          },
          { duration: 1000 },
        );
      }
    });
  };
  const deletePlace = () => {
    setSearchData('');
    console.log('Borrar todo', searchData, 0 + 1);
  };

  return (
    <View style={styles.SectionStyle}>
      <View style={styles.container}>
        <SimpleLineIcons
          style={styles.iconsMagnifier}
          name="magnifier"
          size={24}
          color="black"
          onPress={searchPlace}
        />

        <TextInput
          style={styles.input}
          placeholder="Busca aquí!"
          underlineColorAndroid="transparent"
          value={searchData}
          onChange={(e) => setSearchData(e.nativeEvent.text)}
        />
        <Feather
          style={styles.iconX}
          name="x"
          size={24}
          color="brown"
          onPress={deletePlace}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  SectionStyle: {
    position: 'absolute',
    width: windowWidth * 0.9,
    borderColor: '#fff',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#372a0c',
    borderRadius: 10,
    borderWidth: 2,
    height: windowHeight * 0.06,
  },
  input: {
    fontSize: 20,
    width: windowWidth * 0.6,
  },
  iconsMagnifier: {
    width: 30,
    marginRight: windowWidth * 0.1,
    paddingLeft: 10,
  },
  iconX: {
    marginRight: windowWidth * 0.01,
    marginLeft: windowWidth * 0.01,
  },
});
