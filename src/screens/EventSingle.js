import React, { Component, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import EventData from '../utils/EventData';
import styles from '../styles/buttons';
import styles2 from '../styles/supportS';

export default function EventSingle(props) {
  const { route } = props;
  const eventName = route.params.name;
  const eventDate = route.params.date;
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  let asistencia = 1;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16, backgroundColor: '#fff' }}>
        <View style={{ flex: 1, alignItems: 'center', marginVertical: 30 }}>
          <Text style={styles2.title}>{eventName}</Text>
          <Image
            source={require('../../assets/limpiezadeplaya.jpg')}
            style={styles.singleEventPic}
          />
          <Text style={styles2.subtitle}>{eventDate}</Text>

          <View style={styles.eventContainer}>
            <Image
              source={require('../../assets/locationE.png')}
              style={styles.iconsGuide}
            />
            <Text style={styles.buttonText}> Playa Guibia </Text>
          </View>

          <View style={styles.eventContainer}>
            <Image
              source={require('../../assets/webE.png')}
              style={styles.iconsGuide}
            />
            <Text style={styles.buttonText}> Organizado por Corona </Text>
          </View>

<<<<<<< HEAD
                    <View style={styles.eventContainer}>
                        <CheckBox
                            disabled={false}
                            value={toggleCheckBox}
                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
                            style={styles.iconsGuide}
                        />
                        <Text style={styles.buttonText}> Asistir </Text>
                    </View>

                    <Text style={styles.buttonText}> Respuesta: Asistirán {toggleCheckBox ? "1" : "0"}. </Text>

                </View>
            </View>
        </SafeAreaView>
    );
=======
          <View style={styles.eventContainer}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={(newValue) => setToggleCheckBox(newValue)}
              style={styles.iconsGuide}
            />
            <Text style={styles.buttonText}> Asistir </Text>
          </View>
          <Text style={styles.buttonText}>
            {' '}
            Respuesta: Asistirán {toggleCheckBox ? '1' : '0'}.{' '}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
>>>>>>> c44dcc5a0a0f39cb2d9b5eaa66dc8a5525ba47d1
}
