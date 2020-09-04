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
// import styles from '../css/styles';

export default class GuideScreen extends Component {
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
              onPress={() => this.props.navigation.navigate('Main')}
            >
              <Image
                source={require('../../assets/sembrar.png')}
                style={styles.iconsGuide}
              />
              <Text style={styles.buttonText}>Sembrar</Text>
              <Feather
                name="chevron-right"
                color="#372A0B"
                size={30}
                style={styles.iconGuide}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('Main')}
            >
              <Image
                source={require('../../assets/maceta.png')}
                style={styles.iconsGuide}
              />
              <Text style={styles.buttonText}>Compostar</Text>
              <Feather
                name="chevron-right"
                color="#372A0B"
                size={30}
                style={styles.iconGuide}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('Main')}
            >
              <Image
                source={require('../../assets/water.png')}
                style={styles.iconsGuide}
              />
              <Text style={styles.buttonText}>Reciclar</Text>
              <Feather
                name="chevron-right"
                color="#372A0B"
                size={30}
                style={styles.iconGuide}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('Main')}
            >
              <Image
                source={require('../../assets/clasificar.png')}
                style={styles.iconsGuide}
              />
              <Text style={styles.buttonText}>Clasificar</Text>
              <Feather
                name="chevron-right"
                color="#372A0B"
                size={30}
                style={styles.iconGuide}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.seeAll}>Ver todo</Text>
        </View>
      </SafeAreaView>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    width: 340,
    height: 60,
    borderColor: '#3E721E',
    borderRadius: 8,
    marginTop: 20,
    borderWidth: 1.5,
  },
  buttonText: {
    color: '#372A0B',
    fontWeight: 'bold',
    marginHorizontal: 60,
    fontSize: 18,
  },
  seeAll: {
    fontSize: 18,
    textAlign: 'right',
    marginHorizontal: 30,
    color: '#CE9F20',
    marginBottom: 150,
  },
  iconsGuide: {
    width: 30,
    height: 30,
    tintColor: '#8BC63F',
    // marginTop: -30,
    marginBottom: -28,
    marginHorizontal: 15,
    marginVertical: -28,
    resizeMode: 'contain',
  },
  iconGuide: {
    width: 30,
    height: 30,
    marginBottom: -28,
    alignSelf: 'flex-end',
    marginHorizontal: 10,
    marginVertical: -28,
  },
});
