import React, { useState, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { View, Text, Button, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles/form';
import { getData } from '../utils/DataStorage';

export default function ProfileForm() {
  const [userName, setUserName] = useState('Nombre del usuario');
  const [userEmail, setUserEmail] = useState('Correo del usuario');

  useEffect(() => {
    getData().then((userData) => {
      setUserName(userData.user.name);
      setUserEmail(userData.user.email);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Tu nombre: {userName}</Text>
      <Text style={styles.label}>Tu correo: {userEmail}</Text>
    </View>
  );
}
