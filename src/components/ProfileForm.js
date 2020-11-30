import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
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
      <Image
        source={require('../../assets/profile.png')}
        style={styles.Profileimage}
      />
      <Text style={styles.label}>Nombre: {userName}</Text>
      <Text style={styles.label}>Correo: {userEmail}</Text>
    </View>
  );
}
