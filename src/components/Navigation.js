import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import * as React from 'react';
import LoginScreen from '../screens/LoginScreen';
import MainScreen from '../screens/MainScreen';
import MapsScreen from '../screens/MapsScreen';
import EventScreen from '../screens/EventScreen';
import GuideScreen from '../screens/GuideScreen';
import SettingScreen from '../screens/SettingScreen';
import Menus from '../components/Menus';
import LocationScreen from '../screens/LocationScreen';

const AppNavigator = createSwitchNavigator({
  Login: { screen: LoginScreen },
  Menus: { screen: Menus },
  Main: { screen: MainScreen },
  Maps: { screen: MapsScreen },
  Event: { screen: EventScreen },
  Guide: { screen: GuideScreen },
  Setting: { screen: SettingScreen },
  Location: { screen: LocationScreen },
});

const Navigation = createAppContainer(AppNavigator);

export default Navigation;
