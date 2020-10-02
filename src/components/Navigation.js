import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import * as React from 'react';
import LoginScreen from '../screens/LoginScreen';
import MainScreen from '../screens/MainScreen';
import MapsScreen from '../screens/MapsScreen';
import EventScreen from '../screens/EventScreen';
import EventList from '../screens/EventList';
import EventSingle from '../screens/EventSingle';
import GuideScreen from '../screens/GuideScreen';
import SettingScreen from '../screens/SettingScreen';
import SupportScreen from '../screens/SupportScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Menu from '../components/Menu';
import LocationScreen from '../screens/LocationScreen';

const AppNavigator = createSwitchNavigator({
  Login: { screen: LoginScreen },
  Menu: { screen: Menu },
  Main: { screen: MainScreen },
  Maps: { screen: MapsScreen },
  Event: { screen: EventScreen },
  EventList: { screen: EventList },
  EventSingle: { screen: EventSingle },
  Guide: { screen: GuideScreen },
  Setting: { screen: SettingScreen },
  Support: { screen: SupportScreen },
  Profile: { screen: ProfileScreen },
  Location: { screen: LocationScreen },
});

const Navigation = createAppContainer(AppNavigator);

export default Navigation;
