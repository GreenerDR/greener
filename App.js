//import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import LoginScreen from './src/screens/LoginScreen';
import MainScreen from './src/screens/MainScreen';
import MapsScreen from './src/screens/MapsScreen';

const AppNavigator = createSwitchNavigator({
  Maps: { screen: MapsScreen },
  Login: { screen: LoginScreen },
  Main: { screen: MainScreen },
  
});

const App = createAppContainer(AppNavigator);

export default App;
