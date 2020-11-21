import React, { useState, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { View, Text, Button, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles/form';
import { getData } from '../utils/DataStorage';

export default function ProfileForm() {
  const [userData, setUserData] = useState();
  useEffect(() => {
    getData().then((userData) => {
      //console.log(userData);
      setUserData(userData);
    });
  }, []);

  return(
    <View style={styles.container}>
      <Text style={styles.label}>{userData.user.email}</Text>
    </View>
  );
}
