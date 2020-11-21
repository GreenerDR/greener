import React, { component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from '../screens/MainScreen';
import GuideScreen from '../screens/GuideScreen';
import GuideList from '../screens/GuideList';
import GuideSingle from '../screens/GuideSingle';
import MapsScreen from '../screens/MapsScreen';
import EventScreen from '../screens/EventScreen';
import EventList from '../screens/EventList';
import EventSingle from '../screens/EventSingle';
import SettingScreen from '../screens/SettingScreen';
import SupportScreen from '../screens/SupportScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LocationScreen from '../screens/LocationScreen';

const Stack = createStackNavigator();
const imageTitle = () => (
  <Image
    style={styles.imageH}
    source={require('../../assets/logoGreener.png')}
    resizeMode="contain"
  />
);

export const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fff',
          height: 140,
        },
        headerTintColor: '#372A0B',
      }}
    >
      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={{
          headerTitle: () => (
            <Image
              style={{ width: 200, height: 70, marginHorizontal: -10 }}
              source={require('../../assets/logoGreener.png')}
              resizeMode="contain"
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export function GuideStack() {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerTitleStyle: styles.titleH,
        headerTintColor: '#372A0B',
        headerStyle: {
          height: 110,
        },
        // headerBackground: imageTitle,
      }}
    >
      <Stack.Screen
        name="Guide"
        component={GuideScreen}
        options={{
          title: 'Guías Ecológicas',
        }}
      />
      <Stack.Screen
        name="GList"
        component={GuideList}
        options={{
          headerStyle: { backgroundColor: '#1F6A39', height: 110 },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold', fontSize: 23 },
          headerTitleAlign: 'center',
          title: 'Lista de Guías',
        }}
      />
      <Stack.Screen
        name="GSingle"
        component={GuideSingle}
        options={{
          headerStyle: { backgroundColor: '#1F6A39', height: 110 },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold', fontSize: 23 },
          headerTitleAlign: 'center',
          title: 'Detalles de la guía',
        }}
      />
    </Stack.Navigator>
  );
}

export function EventStack() {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerTitleStyle: styles.titleH,
        headerTintColor: '#372A0B',
        headerStyle: {
          height: 110,
        },
        // headerTitle: imageTitle,
      }}
    >
      <Stack.Screen
        name="Event"
        component={EventScreen}
        options={{
          headerStyle: { backgroundColor: '#1F6A39', height: 110 },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold', fontSize: 23 },
          headerTitleAlign: 'center',
          title: 'Eventos',
        }}
      />
      <Stack.Screen
        name="EventList"
        component={EventList}
        options={{
          headerStyle: { backgroundColor: '#1F6A39', height: 110 },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold', fontSize: 23 },
          headerTitleAlign: 'center',
          title: 'Lista de Eventos',
        }}
      />
      <Stack.Screen
        name="EventSingle"
        component={EventSingle}
        options={{
          headerStyle: { backgroundColor: '#1F6A39', height: 110 },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold', fontSize: 23 },
          headerTitleAlign: 'center',
          title: 'Detalles del evento',
        }}
      />
    </Stack.Navigator>
  );
}

export function MapStack() {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerTitleStyle: styles.titleH,
        headerTintColor: '#372A0B',
        headerStyle: {
          height: 160,
        },
        // headerTitle: imageTitle,
      }}
    >
      <Stack.Screen
        name="Map"
        component={MapsScreen}
        options={{
          headerStyle: { backgroundColor: '#1F6A39', height: 110 },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold', fontSize: 23 },
          headerTitleAlign: 'center',
          title: 'Mapa',
        }}
      />
      <Stack.Screen
        name="Location"
        component={LocationScreen}
        options={{
          headerStyle: { backgroundColor: '#1F6A39', height: 110 },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold', fontSize: 23 },
          headerTitleAlign: 'center',
          title: 'Locación',
        }}
      />
    </Stack.Navigator>
  );
}
export function SettingStack() {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerTitleStyle: styles.titleH,
        headerTintColor: '#372A0B',
        headerStyle: {
          height: 110,
        },
      }}
    >
      <Stack.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          title: 'Ajustes',
        }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerStyle: { backgroundColor: '#1F6A39', height: 110 },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold', fontSize: 23 },
          headerTitleAlign: 'center',
          title: 'Ajustes',
        }}
      />
      <Stack.Screen
        name="Support"
        component={SupportScreen}
        options={{
          headerStyle: { backgroundColor: '#1F6A39', height: 110 },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold', fontSize: 23 },
          headerTitleAlign: 'center',
          title: 'Ajustes',
        }}
      />
      {/* <Stack.Screen name="Login" component={LoginScreen} options={{
          headerStyle: { backgroundColor: '#1F6A39', height: 0 },
          headerTitleStyle: { fontWeight: 'bold', fontSize: 23,},
          title: '',
        }}/> */}
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  imageH: {
    width: 200,
    height: 50,
    marginHorizontal: -10,
    marginTop: -40,
  },
  titleH: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 5,
    fontWeight: 'bold',
    fontSize: 25,
  },
});
