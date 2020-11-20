import React from 'react';
import { StyleSheet, FlatList, Image } from 'react-native';
import ImageSouceFormat from '../utils/ImageSourceFormat';

export default function LocationImages(props) {
  const { imagesArray } = props;

  const Item = ({ item: { formats } }) => {
    const source = ImageSouceFormat(formats);
    return (
      <>
        <Image style={styles.image} source={source} />
      </>
    );
  };

  const renderItem = ({ item }) => <Item item={item} />;
  return (
    <>
      <FlatList
        data={imagesArray}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
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
    height: 350,
    width: 350,
    marginRight: 10,
  },
});
