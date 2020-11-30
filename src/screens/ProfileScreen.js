import React, { Component } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
// import { SupportStack } from '../components/StacksH';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import styles from '../styles/supportS';
import ProfileForm from '../components/ProfileForm';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16, backgroundColor: '#fff' }}>
        <View
          style={{
            // flex: 1,
            alignItems: 'center',
            marginVertical: 50,
          }}
        >
          <Text style={styles.title}>Perfil</Text>
          <ProfileForm />
        </View>
      </View>
    </SafeAreaView>
  );
}
