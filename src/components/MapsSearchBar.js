import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import MarkerData from "../utils/MarkerData";
import { initialWindowMetrics } from 'react-native-safe-area-context';

export default function MapsSearchBar() {
  
  const [searchData, setSearchData] = useState(null);
  
  const searchPlace = () => {
    let PlacesData = MarkerData();
    PlacesData.map((item, index) => {
      if(item.title == searchData)
      {
        console.log(item.title);
        console.log(item.description);
        console.log(item.latitude, item.longitude);
      }
    })
  };
  const deletePlace = () => {
    setSearchData('');
    console.log("Borrar todo", searchData, 0+1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.SectionStyle}>
        <SimpleLineIcons
          style={styles.iconsMagnifier}
          name="magnifier"
          size={24}
          color="black"
          onPress={searchPlace}
        />

        <TextInput
          style={[{ flex: 1 }]}
          placeholder="Entra el nombre de la locacion"
          underlineColorAndroid="transparent"
          value = {searchData}
          onChange={(e) => setSearchData(e.nativeEvent.text)}
        />
        <Feather 
          style = {styles.iconX}
          name="x" 
          size={24} 
          color="black" 
          onPress={deletePlace}
          />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 40,
    borderRadius: 10,
    margin: 10,
  },
  iconsMagnifier: {
    width: 30,
    height: 30,
    marginTop:-23,
    marginBottom: -28,
    marginHorizontal: 15,
    marginVertical: -28,
  },
  iconX: {
    width: 30,
    height: 30,
    marginBottom: 2,
    alignSelf: 'flex-end',
    marginHorizontal: 10,
    marginVertical: -28,
  },
});