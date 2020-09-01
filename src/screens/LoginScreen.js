import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

import * as Google from 'expo-google-app-auth';

const IOS_CLIENT_ID =
  '689620397216-uittnoqmbtteqaqud3v4ll1ngojcubqn.apps.googleusercontent.com';
const ANDROID_CLIENT_ID =
  '689620397216-06l66tn5g3vh60tb5rfdcghnql64tfdd.apps.googleusercontent.com';

export default class LoginScreen extends Component {
  signInWithGoogle = async () => {
    try {
      const result = await Google.logInAsync({
        iosClientId: IOS_CLIENT_ID,
        androidClientId: ANDROID_CLIENT_ID,
        success: ['profile', 'email'],
      });

      if (result.type === 'success') {
        console.log('LoginScreen.js', result.user.givenName);
        this.props.navigation.navigate('Main', {
          username: result.user.name,
        }); // After Google Login redirect to Main screen
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (error) {
      console.log('LoginScreen.js', error);
      return { error: true };
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image
            source={require('../../assets/logo1.jpg')}
            style={styles.ImageLogoStyle}
          />
          <Text style={styles.mainTitle}>{'¡Bienvenido a\n Greener!'}</Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.googleStyle}
            activeOpacity={0.5}
            onPress={this.signInWithGoogle}
          >
            <Image
              source={require('../../assets/googlebutton.png')}
              style={styles.ImageIconStyle}
            />
            <Text style={styles.textGoogle}>Iniciar Sesión con Google</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#372a0c',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  mainTitle: {
    flexDirection: 'row',
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 35,
  },

  googleStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 50,
    width: 260,
    borderRadius: 5,
    margin: 0,
  },

  ImageIconStyle: {
    padding: 10,
    margin: -5,
    height: 60,
    width: 60,
    resizeMode: 'stretch',
  },

  ImageLogoStyle: {
    padding: 10,
    margin: 5,
    height: 200,
    width: 200,
    resizeMode: 'stretch',
    overflow: 'hidden',
    borderColor: '#372a0c',
  },

  textGoogle: {
    marginHorizontal: 20,
  },
});
