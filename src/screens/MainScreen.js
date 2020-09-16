import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';

export default class MainScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Vista General</Text>
        {/* <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
          Welcome, {this.props.navigation.getParam('username')}
        </Text> */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Guide')}
        >
          <Text style={styles.buttonText}>Ir a Guías Ecólogicas</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Event')}
        >
          <Text style={styles.buttonText}>Ir a Eventos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Setting')}
        >
          <Text style={styles.buttonText}>Ir a Ajustes</Text>
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
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
    marginVertical: -150,
    color: '#CE9F20',
  },
  // button: {
  //   alignItems: 'center',
  //   backgroundColor: '#DDDDDD',
  //   padding: 10,
  //   width: 300,
  //   marginTop: 16,
  // },
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
    marginHorizontal: 30,
    // textAlign: 'center',
    fontSize: 18,
  },
});
