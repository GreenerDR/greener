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
import { assistToEvent, getAssistancesQuantity, deleteAssistance, userWillAssist } from '../utils/EventAssistance.utils';


export default function EventSingle(props) {

  const { route } = props;
  const eventDetail = route.params;


  const [assistancesQuantity, setAssistancesQuantity] = useState(0);
  const [assistance, setAssistance] = useState();

  function togglePress(e) {
    if (assistance) {

      deleteAssistance(assistance.id).then(getAssistances).then(() => { setAssistance(false) })
    } else {
      assistToEvent(eventDetail.id).then((assistance) => { setAssistance(assistance); }).then(getAssistances)
    }
  }

  function getAssistances() {
    return getAssistancesQuantity(eventDetail.id).then((assistancesQuantity) => { setAssistancesQuantity(assistancesQuantity) })
  }

  useEffect(() => {
    getAssistances();
    userWillAssist(eventDetail.id)
      .then(([assistance]) => {
        setAssistance(assistance);
      })
  }, []);


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
              style={assistance ? styles.buttonA : styles.buttonB}
              value={assistance}
              onPress={togglePress}>
              <Text style={styles.buttonText}>Asistir</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.buttonText}> Respuesta: Asistirán {assistancesQuantity} </Text>

          <Text style={styles.buttonText}> {assistance ? "Asistirás a este evento" : "No asistirás a este evento"} </Text>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}