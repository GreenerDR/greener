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
  Linking,
} from 'react-native';
// import { Card, Title, Paragraph } from 'react-native-paper';
// import Markdown from 'react-native-markdown-display';
import Markdown from 'react-native-markdown-package';
import styles from '../styles/guideSingle';

export default function GuideSingle(props) {
  const { route } = props;
  const guideDetail = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ backgroundColor: '#fff' }}>
        {/* <Image
            source={require('../../assets/backgroundGuide.png')}
            style={styles.backgroundGuides}
          /> */}
        <Image
          source={{ uri: 'https://mocah.org/uploads/posts/585324-atmosphere-bio.jpg' }}
          style={styles.backgroundGuides}
        />
        <View
          style={{
            flex: 1,
            padding: 16,
          //  backgroundColor: '#fff',
          }}
        >
          <View
            style={{
              alignItems: 'center',
              marginVertical: 50,
            }}
          >
            <View style={styles.containerGuides}>
              <View style={styles.containerTandF}>
                <Text style={styles.title}>{guideDetail.title}</Text>
                <Image
                  source={{
                    uri:
                      'https://greenerappdr.herokuapp.com' +
                      guideDetail.image[0].formats.thumbnail.url,
                  }}
                  style={styles.img}
                />
              </View>
              <Text style={styles.stepText}>{guideDetail.description}</Text>
              <View>
          <TouchableOpacity
                  onPress={() => Linking.openURL(guideDetail.referenceURL)}
                >
                  <View>
                    <Text style={styles.link}>Para ver más haz click aquí</Text>
                  </View>
                </TouchableOpacity>
              </View>
              {/* <View style={styles.stepText}>
                <Markdown style={styles.step}>
                  {guideDetail.description}
               </Markdown>
              </View> */}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
