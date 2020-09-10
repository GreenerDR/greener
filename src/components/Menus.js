import * as React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MainScreen from '../screens/MainScreen';
import GuideScreen from '../screens/GuideScreen';
import MapsScreen from '../screens/MapsScreen';
import EventScreen from '../screens/EventScreen';
import SettingScreen from '../screens/SettingScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
// const imageTitle = () => (
//   <Image
//     style={styles.imageH}
//     source={require('../../assets/logoGreener.png')}
//     resizeMode="contain"
//   />
// );

function HeaderStack() {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fff',
          height: 160,
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
      {/* <Stack.Screen
        name="Guide"
        component={GuideScreen}
        options={{
          headerBackImage: imageTitle,
          title: 'Guías Ecológicas',
          headerTitleStyle: styles.titleH,
        }}
      /> */}
      {/* 
      <Stack.Screen
        name="Event"
        component={EventScreen}
        options={{
          headerTitle: imageTitle,
          title: 'Eventos',
          headerTitleStyle: styles.titleH,
        }}
      />
      <Stack.Screen
        name="Map"
        component={MapsScreen}
        options={{
          headerTitle: imageTitle,
          title: 'Mapa',
          headerTitleStyle: styles.titleH,
        }}
      /> */}
      {/* <Stack.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          headerBackImage: () => (
            // App Logo
            <Image
              style={styles.imageH}
              source={require('../../assets/logoGreener.png')}
              resizeMode="contain"
            />
          ),
          title: 'Ajustes',
          headerTitleStyle: styles.titleH,
        }}
      /> */}
    </Stack.Navigator>
    // </NavigationContainer>
  );
}

function GuideStack() {
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
        name="Guide"
        component={GuideScreen}
        options={{
          title: 'Guías Ecológicas',
        }}
      />
    </Stack.Navigator>
  );
}

function EventStack() {
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
        name="Event"
        component={EventScreen}
        options={{
          title: 'Eventos',
        }}
      />
    </Stack.Navigator>
  );
}

function MapStack() {
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
          title: 'Mapa',
        }}
      />
    </Stack.Navigator>
  );
}

function SettingStack() {
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
        name="Setting"
        component={SettingScreen}
        options={{
          title: 'Ajustes',
        }}
      />
    </Stack.Navigator>
  );
}

const Menus = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Main"
        tabBarOptions={{
          activeTintColor: '#8cc63f',
          inactiveTintColor: '#372a0c',
        }}
      >
        <Tab.Screen
          name="Main"
          component={HeaderStack}
          options={{
            tabBarLabel: 'Inicio',
            tabBarIcon: ({ color, size }) => (
              <Feather name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Guide"
          component={GuideStack}
          options={{
            tabBarLabel: 'Guías',
            tabBarIcon: ({ color, size }) => (
              <Feather name="book" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Maps"
          component={MapStack}
          options={{
            tabBarLabel: 'Mapa',
            tabBarIcon: ({ color, size }) => (
              <Feather name="map" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Event"
          component={EventStack}
          options={{
            tabBarLabel: 'Eventos',
            tabBarIcon: ({ color, size }) => (
              <Feather name="calendar" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Setting"
          component={SettingStack}
          options={{
            tabBarLabel: 'Ajustes',
            tabBarIcon: ({ color, size }) => (
              <Feather name="settings" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  imageH: {
    width: 200,
    height: 50,
    marginHorizontal: -10,
    marginTop: -40,
    // width: 200,
    // marginTop: -90,
  },
  titleH: {
    // flex: 1,
    // marginHorizontal: -30,
    // marginTop: 80,
    fontWeight: 'bold',
    fontSize: 23,
  },
});

export default Menus;
