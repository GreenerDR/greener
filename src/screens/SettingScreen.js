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

export default class SettingScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, padding: 16, backgroundColor: '#fff' }}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              marginVertical: 50,
            }}
          >
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('Main')}
            >
              <Image
                source={require('../../assets/perfil.png')}
                style={styles.iconsGuide}
              />
              <Text style={styles.buttonText}>Perfil</Text>
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
                source={require('../../assets/soporte.png')}
                style={styles.iconsGuide}
              />
              <Text style={styles.buttonText}>Soporte</Text>
              <Feather
                name="chevron-right"
                color="#372A0B"
                size={30}
                style={styles.iconGuide}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.containerButton}
              onPress={() => this.props.navigation.navigate('Login')}
            >
              <Image
                source={require('../../assets/cerrarS.png')}
                style={styles.iconsGuide1}
              />
              <Text style={styles.logout}>Cerrar sesión</Text>
            </TouchableOpacity>
          </View>
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
  containerButton: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    width: 340,
    height: 60,
    marginTop: 20,
  },
  buttonText: {
    color: '#372A0B',
    fontWeight: 'bold',
    marginHorizontal: 60,
    fontSize: 18,
  },
  logout: {
    fontSize: 18,
    marginHorizontal: 60,
    fontWeight: 'bold',
    color: '#CE9F20',
  },
  iconsGuide: {
    width: 30,
    height: 30,
    tintColor: '#8BC63F',
    marginBottom: -28,
    marginHorizontal: 10,
    marginVertical: -28,
  },
  iconGuide: {
    alignSelf: 'flex-end',
    marginHorizontal: 10,
    marginVertical: -28,
  },
  iconsGuide1: {
    tintColor: '#CE9F20',
    width: 40,
    height: 40,
    marginBottom: -33,
    marginHorizontal: 10,
    marginVertical: -30,
    resizeMode: 'contain',
  },
});
