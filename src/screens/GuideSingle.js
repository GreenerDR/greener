import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
//import moment from 'moment'
//import 'moment/locale/es';

import { Feather } from '@expo/vector-icons';
// import styles from '../styles/buttons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function GuideSingle(props) {
  const { route } = props;
  const guideDetail = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ backgroundColor: '#fff' }}>
        <View style={{ flex: 1, padding: 16, backgroundColor: '#fff' }}>
          <View
            style={{
              // flex: 1,
              alignItems: 'center',
              marginVertical: 50,
            }}
          >
            <View style={styles.containerGuides}>
            <Text style={styles.title}>{guideDetail.title}</Text>
            <Image
            source={{
              uri:
                'https://greenerappdr.herokuapp.com' +
                guideDetail.image[0].formats.thumbnail.url,
            }}
            style={styles.img}
          />
          
            <Text style={styles.stepText}> {guideDetail.description} </Text>

            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({


  singleGuidePic: {
    justifyContent: 'center',
    width: 350,
    height: 200,
    borderColor: '#3E721E',
    borderRadius: 8,
    marginVertical: 15,
    borderWidth: 1.5,
    marginBottom: -40,
  },

  title: {
    // flex: 1,
    marginTop: -30,
    //marginStart: 10,
    marginVertical: 15,
    textAlign: 'justify',
    fontWeight: 'bold',
    fontSize: 23,
    color: '#372A0B',
    alignSelf: 'center',
  },
  img: {
    width: 300,
    height: 200,
    marginTop: 30,
    borderRadius: 8,
    borderColor: '#3E721E',
    borderWidth: 4,
  },
  containerGuides: {
    paddingStart: 30,
    paddingEnd: 30,
  },
  step: {
    marginTop: 30,
    marginHorizontal: 10,
    fontWeight: 'bold',
    fontSize: 23,
    color: '#8AC53E',
    alignSelf: 'flex-start',
  },
  stepText: {
    marginTop: 25,
    marginHorizontal: -15,
    fontSize: 18,
    color: '#372A0B',
    alignSelf: 'center',
    textAlign: 'justify',
    // borderRadius: 5,
    // borderColor: '#3E721E',
  },
});
