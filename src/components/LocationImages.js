import React from 'react';
import { StyleSheet, FlatList, Image, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function LocationImages(props) {
  const { imagesArray } = props;

  const Item = (item) => {
    const source = item.item.url;
    return (
      <>
        <Image style={styles.image} source={{ uri: source }} />
      </>
    );
  };

  const renderItem = ({ item }) => <Item item={item} />;
  return (
    <>
      <FlatList
        data={imagesArray}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={true}
      />
    </>
  );
}
const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  image: {
    width: windowWidth * 0.8,
    height: windowWidth * 0.8,
    marginRight: 10,
  },
});
