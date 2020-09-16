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

export default function LoginForm(props) {
  const [searchData, setSearchData] = useState(null);
  const searchPlace = () => {
    console.log(searchData);
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
          onChange={(e) => setSearchData(e.nativeEvent.text)}
        />
        <Feather 
          style = {styles.iconX}
          name="x" 
          size={24} 
          color="black" />
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
    resizeMode: 'contain',
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
