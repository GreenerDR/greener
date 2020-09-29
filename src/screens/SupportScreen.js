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
import { Linking } from 'react-native';
import SupportForm from '../components/SupportForm';

export default function SupportScreen() {
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
          <Text style={styles.title}>Soporte</Text>
          <Text style={styles.subtitle}>
            Tienes alguna pregunta o duda, escríbenos
          </Text>
          <SupportForm />
          <View style={styles.contactContainer}>
            <Text style={styles.contact}>Contáctanos</Text>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  'mailto:greener@gmail.com?subject=Servicio de asistencia&body=Descripción',
                )
              }
            >
              <View>
                {
                  <MaterialCommunityIcons
                    name="email-outline"
                    color="#6E9F7F"
                    size={30}
                  />
                }
                <Text style={styles.contactEmail}>greener@gmail.com</Text>
                {/* {'greener@gmail.com'} */}
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('Main')}
            >
              <Text style={styles.buttonText}>Manual de usuario</Text>
              <Feather
                name="chevron-right"
                color="#372A0B"
                size={30}
                style={styles.iconGuide}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
