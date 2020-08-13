import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';

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
          username: result.user.givenName,
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
        <Button title="Login with Google" onPress={this.signInWithGoogle} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
