import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import styles from '../styles/supportS';
import ProfileForm from '../components/ProfileForm';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16, backgroundColor: '#fff' }}>
        <View
          style={{
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
