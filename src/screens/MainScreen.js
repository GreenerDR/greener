import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Feather, SimpleLineIcons } from '@expo/vector-icons';
import CarouselMain from '../components/CarouselMain';
import styles from '../styles/main';

const Filter = [
  {
    id: '2',
    title: 'Tiendas',
  },
];
export default class MainScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Explora lo que tenemos para ti</Text>
        <Text style={styles.subtitle}>
          Aprende con nuestras guías ecólogicas
        </Text>
        <CarouselMain />
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Event')}
        >
          <Image
            source={require('../../assets/calendarH.png')}
            style={styles.iconsGuide}
          />
          <Text
            onPress={() =>
              this.props.navigation.navigate('EventList', {
                category: 'Todos',
              })
            }
            style={styles.buttonText}
          >
            Todos los eventos
          </Text>
          <Feather
            name="chevron-right"
            color="#fff"
            size={30}
            style={styles.iconGuide}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cardView}
          onPress={() => this.props.navigation.navigate('Maps', Filter)}
        >
          <Image
            source={require('../../assets/ecoShop.jpg')}
            style={styles.image}
          />
          <SimpleLineIcons
            name="location-pin"
            color="#fff"
            size={30}
            style={styles.icon}
          />
          <Text style={styles.ImageText}>Puntos Ecofriendly</Text>
          <Feather
            name="chevron-right"
            color="#fff"
            size={30}
            style={styles.iconGuide}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
