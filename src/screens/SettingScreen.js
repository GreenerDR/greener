import React, { Component } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from '../styles/buttons';
import { navigate } from '../utils/RootNavigation';
import { deleteData } from '../utils/DataStorage';

export default class SettingScreen extends Component {
  signOut = () => {
    deleteData().then(() => {
      navigate('Login');
    });
  };
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
              onPress={() =>
                this.props.navigation.navigate('Profile', {
                  screen: 'Setting',
                })
              }
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
              onPress={() =>
                this.props.navigation.navigate('Support', {
                  screen: 'Setting',
                })
              }
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
              onPress={this.signOut}
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
