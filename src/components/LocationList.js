import React, { useState, useCallback } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  FlatList,
  Image,ScrollView
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const Item = ({ item, onPress }) => {
  return(
  <TouchableOpacity onPress={onPress} style={[styles.item]}>
      <View style={styles.titleAndDescriptionView}>
      <Image
          style={styles.image}
          source={{
            uri:
              'https://greenerappdr.herokuapp.com' +
              item.image[0].formats.thumbnail.url,
          }}
        />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      <Text style={styles.title}>{item.address}</Text>
    </TouchableOpacity>
);
        }

const renderItem = ({ item }) => {  
  return (
    <Item
      item={item}
      onPress={() => {
      console.log('queso');
      }}
    />
  );
};
export default function LocationList(props) {

  const { placesData } = props; 

    return (
    <ScrollView style={styles.container}>
      <FlatList
        data={placesData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 12,
  },
  titleAndDescriptionView: {
    flexDirection: 'row',
  },
  description:{
    marginLeft: 10,
    fontSize: 10
  }
});
