import React, { useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView
} from 'react-native';
import moment from 'moment'
import 'moment/locale/es';
import CheckBox from '@react-native-community/checkbox';
import styles from '../styles/buttons';
import styles2 from '../styles/supportS';

export default function EventSingle(props) {
  const { route } = props;
  const eventDetail = route.params;

  const [toggleCheckBox, setToggleCheckBox] = useState(false);

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
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={(newValue) => setToggleCheckBox(newValue)}
              style={styles.iconsGuide}
            />
            <Text style={styles.buttonText}> Asistir </Text>
          </View>

          <Text style={styles.buttonText}> Respuesta: Asistirán {toggleCheckBox ? eventDetail.eventAssistances.length + 1 : eventDetail.eventAssistances.length} </Text>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
