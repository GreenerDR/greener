import React, { useState, useCallback } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
    Image,
} from 'react-native';
import { FlatList, TouchableOpacity} from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const Item = ({ item, onPress }) => {
  return(
  <TouchableOpacity onPress={onPress} style={[styles.item]}>
      <View style = {styles.listItemInfo}>
      <Image
          style={styles.image}
          source={{
            uri:
              'https://greenerappdr.herokuapp.com' +
              item.image[0].formats.thumbnail.url,
          }}
        />
      <View style={styles.titleAndAddressView}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.address}>{item.address}</Text> 
        <Text style = {[styles.address, styles.typeOfLocation]}>{item.locationType.type}</Text>     
        </View>
      </View>
    </TouchableOpacity>
);
        }


export default function LocationList(props) {

  const { placesData, navigation } = props; 

  const renderItem = ({ item }) => {  
    return (
      <Item
        item={item}
        onPress={() => {
          navigation.navigate('Location', item);
        }}
      />
    );
  };

    return (
    <View style={styles.container}>
      <FlatList
        data={placesData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth*0.95,
  },
  item: {
    marginVertical: windowWidth*0.01,
    marginHorizontal: windowWidth*0.016,
  },
  title: {
    fontSize: 20,
    color: '#8cc63f'
  },
  listItemInfo: {
    flexDirection: 'row',
    
  },
  titleAndAddressView: {
    flexDirection: 'column',
    flexShrink: 1,
    marginLeft: windowWidth*0.015,
  },

  address:{
    color:"#372a0c", 
    marginRight: 10,
    fontSize: 15,
  },
  typeOfLocation:{
    fontWeight: 'bold'
  },
  image:{
    width:150,
    height: 150,
  }
});
