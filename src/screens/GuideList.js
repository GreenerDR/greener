import React, { useEffect, useState, useMemo } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
  ScrollView,
} from 'react-native';
import GuidesData from '../utils/GuidesData';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Item = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button]}>
      <View style={styles.listItemInfo}>
        <Image
          style={styles.iconsGuide}
          source={{
            uri: item.images[0].url,
          }}
        />
        <View style={styles.titleAndAddressView}>
          <Text style={styles.buttonText}>{item.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default function GuideList({ navigation, route }) {
  const cat = route.params.category;

  const renderItem = ({ item }) => {
    return (
      <Item
        item={item}
        onPress={() => {
          navigation.navigate('GSingle', item);
        }}
      />
    );
  };

  const [guidesList, setGuidesList] = useState(null);

  useEffect(() => {
    GuidesData().then((data) => {
      setGuidesList(data);
      return data;
    });
  }, []);

  const guidesOfType = useMemo(
    () =>
      guidesList?.filter((individualGuide) => {
        return cat === 'Todos' || individualGuide.topicGuide.topic === cat;
      }),
    [guidesList, cat],
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16, backgroundColor: '#fff' }}>
        <View style={{ flex: 1, marginVertical: 30 }}>
          <Text style={styles.title}>{cat} </Text>
          { guidesOfType && guidesOfType.length ? <>
              <ScrollView style={{ backgroundColor: '#fff' }}>
                <FlatList
                  style={styles.container}
                  data={guidesOfType}
                  renderItem={renderItem}
                  keyExtractor={(item) => item.id.toString()}
                />
              </ScrollView>
              <Text style={styles.seeAll}>Total de guías: {guidesOfType.length}</Text>
              </>
          : <Text style={styles.empty}>No hay guías de {cat} disponibles</Text>
          }
      </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  image: {
    width: windowWidth * 0.35,
    height: windowHeight * 0.12,
    borderRadius: 8,
  },
  title: {
    marginTop: -30,
    marginHorizontal: 10,
    fontWeight: 'bold',
    fontSize: 25,
    color: '#372A0B',
    alignSelf: 'flex-start',
  },
  button: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    height: 80,
    borderColor: '#3E721E',
    borderRadius: 8,
    marginTop: 35,
    borderWidth: 1.5,
  },
  buttonText: {
    color: '#372A0B',
    fontWeight: 'bold',
    marginStart: 100,
    marginVertical: 20,
    marginTop: -10,
    fontSize: 15,
  },
  seeAll: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: -15,
    color: '#CE9F20',
  },
  empty: {
    fontSize: 18,
    textAlign: 'center',
    marginHorizontal: 30,
    color: '#CE9F20',
    marginVertical: 200,
  },
  iconsGuide: {
    width: 80,
    height: 60,
    marginBottom: -30,
    marginHorizontal: 10,
    borderRadius: 8,
  },
});
