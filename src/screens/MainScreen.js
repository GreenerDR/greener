import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';

export default class MainScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Main Screen</Text>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
          Welcome, {this.props.navigation.getParam('username')}
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Guide')}
        >
          <Text>Ir a Guías Ecólogicas</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Event')}
        >
          <Text>Ir a Eventos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Login')}
        >
          <Text>Cerrar sesión</Text>
        </TouchableOpacity>
        {/* <Button
          title="Sign Out"
          onPress={() => this.props.navigation.navigate('Login')}
        /> */}
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
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
});
