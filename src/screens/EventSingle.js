import React, { useState, useEffect, useMemo } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import moment from 'moment'
import 'moment/locale/es';
import styles from '../styles/buttons';
import styles2 from '../styles/supportS';
import { userWillAssist } from '../utils/EventAssistance.utils';


export default function EventSingle(props) {
  const { route } = props;
  const eventDetail = route.params;

  const [isPressed, setPress] = useState(false);

  function userWillAssist() {

  }

  // useEffect(() => {
  //   userWillAssist(eventDetail.id)
  //     .then((assisQuant) => {
  //       setToggleCheckBox(Boolean(assisQuant))
  //     })
  // }, []);

  function handleCheckBox(newValue) {
    console.log('Entraste a handleCheckbox');
    const willAssist = userWillAssist(eventDetail.id)
    if (newValue != willAssist) {
      return newValue ? console.log('Soy pepe') : console.log('No soy pepe')
    }
    console.log('was');
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1, padding: 16, backgroundColor: '#fff' }}>
        <View style={{ flex: 1, alignItems: 'center', marginVertical: 30 }}>
          <Text style={styles2.title}>{eventDetail.title}</Text>
          <Image
            source={{
              uri:
                'https://greenerappdr.herokuapp.com' +
                eventDetail.image[0].formats.thumbnail.url,
            }}
            style={styles.singleEventPic}
          />
          <Text style={styles2.subtitle}>{moment(eventDetail.datetime).locale('es').format('LLLL')}</Text>

          <View style={styles.eventContainer}>
            <Image
              source={require('../../assets/locationE.png')}
              style={styles.iconsGuide}
            />
            <Text style={styles.buttonText}> {eventDetail.address} </Text>
          </View>

          <View style={styles.eventContainer}>
            <Image
              source={require('../../assets/webE.png')}
              style={styles.iconsGuide}
            />
            <Text style={styles.buttonText}> Organizado por {eventDetail.eventRepresentative.name} </Text>
          </View>

          <View style={styles.eventContainer}>

            <TouchableOpacity
              style={isPressed ? styles.buttonA : styles.buttonB}
              value={isPressed}
              onPress={setPress}>
              <Text style={styles.buttonText}>Asistir</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.buttonText}> Respuesta: Asistirán {isPressed ? eventDetail.eventAssistances.length + 1 : eventDetail.eventAssistances.length} </Text>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
