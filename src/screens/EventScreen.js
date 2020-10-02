import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from '../styles/buttons';

export default class EventScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, padding: 16, backgroundColor: '#fff' }}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              marginVertical: 30,
            }}
          >
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('EventList', { category: 'Siembra' })}
            >
              <Image
                source={require('../../assets/siembra.png')}
                style={styles.iconsGuide}
              />
              <Text style={styles.buttonText}>Siembra</Text>
              <Feather
                name="chevron-right"
                color="#372A0B"
                size={30}
                style={styles.iconGuide}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('EventList', { category: 'Limpiezas' })}
            >
              <Image
                source={require('../../assets/limpiezas.png')}
                style={styles.iconsGuide}
              />
              <Text style={styles.buttonText}>Limpiezas</Text>
              <Feather
                name="chevron-right"
                color="#372A0B"
                size={30}
                style={styles.iconGuide}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('EventList', { category: 'Reciclaje' })}
            >
              <Image
                source={require('../../assets/reciclaje.png')}
                style={styles.iconsGuide}
              />
              <Text style={styles.buttonText}>Reciclaje</Text>
              <Feather
                name="chevron-right"
                color="#372A0B"
                size={30}
                style={styles.iconGuide}
              />
            </TouchableOpacity>
          </View>
          {/* <Text style={styles.seeAllEvent}>Ver todo</Text> */}
        </View>
      </SafeAreaView>
    );
  }
}
