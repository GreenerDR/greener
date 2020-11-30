import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  PixelRatio,
  ScrollView,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Linking from 'expo-linking';
import LocationImages from '../components/LocationImages';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function LocationScreen(props) {
  const { route } = props;
  const locationDetail = route.params;
  const imagesArray = locationDetail.images;

  function imagesForm() {
    if (imagesArray.length > 1) {
      return <LocationImages imagesArray={imagesArray} />;
    } else {
      return (
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: imagesArray[0].url }} />
        </View>
      );
    }
  }

  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.viewContainer}>
        <Text style={styles.mainTitle}>{locationDetail.title}</Text>
        {imagesForm()}
        <Text style={styles.secondTitle}>{locationDetail.title}</Text>
        <Text style={styles.description}>{locationDetail.description}</Text>
        <View style={styles.section}>
          <View style={styles.detailsSection}>
            <FontAwesome5
              style={styles.sectionIcon}
              name="map-marker-alt"
              size={25}
              color="green"
            />
            <Text
              style={styles.redirectText}
              onPress={() => {
                Linking.openURL(
                  `https://maps.google.com/?q=${locationDetail.latitude},${locationDetail.longitude}`,
                );
              }}
            >
              {locationDetail.address}
            </Text>
          </View>
          <View style={styles.detailsSection}>
            <Feather
              style={styles.sectionIcon}
              name="phone"
              size={25}
              color="green"
            />
            <Text
              style={styles.redirectText}
              onPress={() => {
                Linking.openURL(`tel:${locationDetail.phone}`);
              }}
            >
              {locationDetail.phone}
            </Text>
          </View>
          <View style={styles.detailsSection}>
            <MaterialCommunityIcons
              style={styles.sectionIcon}
              name="web"
              size={25}
              color="green"
            />
            <Text
              style={styles.redirectText}
              onPress={() => {
                Linking.openURL(`${locationDetail.url}`);
              }}
            >
              {locationDetail.url}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
    flex: 1,
  },
  mainTitle: {
    color: '#372a0c',
    fontSize: 30,
    marginTop: windowHeight * 0.025,
    padding: windowWidth * 0.02,
    paddingBottom: windowHeight * 0.03,
  },
  secondTitle: {
    paddingTop: windowHeight * 0.02,
    color: '#372a0c',
    fontSize: 20,
    paddingLeft: windowWidth * 0.03,
  },
  description: {
    color: '#6da14b',
    marginRight: windowWidth * 0.01,
    fontSize: 15,
    padding: windowWidth * 0.03,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: windowWidth * 0.8,
    height: windowWidth * 0.8,
  },
  section: {
    marginTop: windowHeight * 0.02,
  },
  detailsSection: {
    flexDirection: 'row',
    alignItems: 'center',
    width: windowWidth,
  },
  redirectText: {
    color: 'blue',
    padding: windowWidth * 0.02,
    marginLeft: windowWidth * 0.01,
    fontSize: 15,
    marginRight: windowWidth * 0.1,
  },
  sectionIcon: {
    width: windowWidth * 0.09,
    marginLeft: windowWidth * 0.02,
  },
});
