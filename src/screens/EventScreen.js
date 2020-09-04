import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export default class EventScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Eventos piola</Text>
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
