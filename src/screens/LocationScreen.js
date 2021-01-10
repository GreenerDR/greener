import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Linking from 'expo-linking';
import LocationImages from '../components/LocationImages';
import styles from '../styles/locationS';

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
        <Text style={styles.type}>{locationDetail.locationType.type}</Text>
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
