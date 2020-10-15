// import 'react-native-gesture-handler';
import * as React from 'react';
import { Feather } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  MainStack,
  GuideStack,
  MapStack,
  EventStack,
  SettingStack,
} from './StacksH';

const Tab = createBottomTabNavigator();

const Menu = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Main"
        tabBarOptions={{
          activeTintColor: '#8cc63f',
          inactiveTintColor: '#372a0c',
          keyboardHidesTabBar: true,
        }}
      >
        <Tab.Screen
          name="Main"
          component={MainStack}
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
export default Menu;
