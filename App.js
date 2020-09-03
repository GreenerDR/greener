import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import LoginScreen from './src/screens/LoginScreen';
import MainScreen from './src/screens/MainScreen';
import GuideScreen from './src/screens/GuideScreen';
import EventScreen from './src/screens/EventScreen';

const AppNavigator = createSwitchNavigator({
  Login: { screen: LoginScreen },
  Main: { screen: MainScreen },
  Guide: { screen: GuideScreen },
  Event: { screen: EventScreen },
});

const App = createAppContainer(AppNavigator);

export default App;
