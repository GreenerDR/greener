import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import * as React from 'react';
import LoginScreen from '../screens/LoginScreen';
import MainScreen from '../screens/MainScreen';
import MapsScreen from '../screens/MapsScreen';
import EventScreen from '../screens/EventScreen';
import GuideScreen from '../screens/GuideScreen';
import SettingScreen from '../screens/SettingScreen';
import SupportScreen from '../screens/SupportScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Menu from '../components/Menu';

const AppNavigator = createSwitchNavigator({
  Login: { screen: LoginScreen },
  Menu: { screen: Menu },
  Main: { screen: MainScreen },
  Maps: { screen: MapsScreen },
  Event: { screen: EventScreen },
  Guide: { screen: GuideScreen },
  Setting: { screen: SettingScreen },
  Support: { screen: SupportScreen },
  Profile: { screen: ProfileScreen },
});

const Navigation = createAppContainer(AppNavigator);

export default Navigation;
