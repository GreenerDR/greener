import React, { Component } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
// import { SupportStack } from '../components/StacksH';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import styles from '../styles/supportS';
import { Linking } from 'react-native';
// import SupportForm from '../components/SupportForm';

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
          <TouchableOpacity
            style={styles.buttonS}
            onPress={() =>
              Linking.openURL('https://greener-support.netlify.app/')
            }
          >
            <Text style={styles.buttonTextS}>Soporte Greener</Text>
          </TouchableOpacity>
          {/* <SupportForm /> */}
          <View style={styles.contactContainer}>
            <Text style={styles.contact}>Contáctanos</Text>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  'mailto:greenerappdr@gmail.com?subject=Servicio de asistencia&body=Descripción',
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
                <Text style={styles.contactEmail}>greenerappdr@gmail.com</Text>
              </View>
            </TouchableOpacity>
            <Text></Text>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL('tel:8292769743');
              }}
            >
              <View>
                {
                  <MaterialCommunityIcons
                    name="phone"
                    color="#6E9F7F"
                    size={30}
                  />
                }
                <Text style={styles.contactEmail}>(829) 276-9743</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                Linking.openURL('https://github.com/GreenerDR/greener/wiki')
              }
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
