import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-navigation';

export default function LocationScreen(props) {
  const { route } = props;
  const locationDetail = route.params;
  return (
    <SafeAreaView>
      <View>
        <Text>{locationDetail.title}</Text>
        <Image
          style={styles.image}
          source={require('../../assets/greenerlogo.jpg')}
        />
        <Text>{locationDetail.title}</Text>
        <Text>{locationDetail.description}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
});
