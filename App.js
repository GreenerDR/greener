import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import LoginScreen from './src/screens/LoginScreen';
import MainScreen from './src/screens/MainScreen';
import MapsScreen from './src/screens/MapsScreen';
import EventScreen from './src/screens/EventScreen';
import GuideScreen from './src/screens/GuideScreen';

const AppNavigator = createSwitchNavigator({
  Maps: { screen: MapsScreen },
  Login: { screen: LoginScreen },
  Main: { screen: MainScreen },
  Event: { screen: EventScreen },
  Guide: { screen: GuideScreen },
});

const App = createAppContainer(AppNavigator);

export default App;
