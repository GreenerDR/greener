import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  Linking,
} from 'react-native';
import styles from '../styles/guideSingle';

export default function GuideSingle(props) {
  const { route } = props;
  const guideDetail = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ backgroundColor: '#fff' }}>
        <Image
          source={{
            uri: 'https://mocah.org/uploads/posts/585324-atmosphere-bio.jpg',
          }}
          style={styles.backgroundGuides}
        />
        <View
          style={{
            flex: 1,
            padding: 16,
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
                    uri: guideDetail.images[0].url,
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
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
