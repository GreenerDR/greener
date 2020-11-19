import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

import * as Google from 'expo-google-app-auth';
import * as Facebook from 'expo-facebook';
import { logIn } from '../utils/SignIn';

const IOS_CLIENT_ID =
  '689620397216-uittnoqmbtteqaqud3v4ll1ngojcubqn.apps.googleusercontent.com';
const ANDROID_CLIENT_ID =
  '689620397216-06l66tn5g3vh60tb5rfdcghnql64tfdd.apps.googleusercontent.com';
const APP_ID = '1652493498261994';

export default class LoginScreen extends Component {
  storeSession = async (userData) => {
    await logIn(userData);
    this.props.navigation.navigate('Menu');
  };

  signInWithGoogle = async () => {
    try {
      const response = await Google.logInAsync({
        iosClientId: IOS_CLIENT_ID,
        androidClientId: ANDROID_CLIENT_ID,
        success: ['profile', 'email'],
      });
      if (response.type === 'success') {
        const userData = {
          email: response.user.email,
          name: response.user.name,
        };
        this.storeSession(userData);
      } else {
        return { cancelled: true };
      }
    } catch (error) {
      console.log(error);
      return { error: true };
    }
  };

  signInWithFacebook = async () => {
    try {
      await Facebook.initializeAsync(APP_ID);
      const { type, token } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile', 'email'],
      });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(
          `https://graph.facebook.com/me?fields=id,name,email&access_token=${token}`,
        );
        const userData = await response.json();
        this.storeSession(userData);
      } else {
        return { cancelled: true };
      }
    } catch (error) {
      console.log(error);
      return { error: true };
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image
            source={require('../../assets/greenerlogo.jpg')}
            style={styles.greenerLogo}
          />
          <Text style={styles.mainTitle}>{'¡Bienvenido a\n Greener!'}</Text>
        </View>
        <View>
          <View>
            <TouchableOpacity
              style={styles.googleButton}
              activeOpacity={0.5}
              onPress={this.signInWithGoogle}
            >
              <Image
                source={require('../../assets/googlebutton.png')}
                style={styles.googleIcon}
              />
              <Text style={styles.textGoogle}>Iniciar Sesión con Google</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={styles.facebookButton}
              activeOpacity={0.5}
              onPress={this.signInWithFacebook}
            >
              <Image
                source={require('../../assets/fblogo.jpg')}
                style={styles.facebookIcon}
              />
              <Text style={styles.textFacebook}>
                Iniciar Sesión con Facebook
              </Text>
            </TouchableOpacity>
          </View>
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

  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 50,
    width: 260,
    borderRadius: 5,
    margin: 10,
  },

  facebookButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3b5998',
    color: '#fff',
    borderWidth: 0.5,
    borderColor: '#3b5998',
    height: 50,
    width: 260,
    borderRadius: 5,
    margin: 10,
  },

  googleIcon: {
    margin: 5,
    height: 35,
    width: 35,
    resizeMode: 'stretch',
  },

  facebookIcon: {
    height: 35,
    width: 35,
    resizeMode: 'stretch',
  },

  greenerLogo: {
    padding: 10,
    margin: 5,
    height: 200,
    width: 200,
    resizeMode: 'stretch',
    overflow: 'hidden',
    borderColor: '#372a0c',
  },

  textGoogle: {
    marginHorizontal: 5,
  },

  textFacebook: {
    marginHorizontal: 15,
    color: '#ffffff',
  },
});
