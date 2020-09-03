import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import LoginScreen from './src/screens/LoginScreen';
import MainScreen from './src/screens/MainScreen';

const AppNavigator = createSwitchNavigator({
  Login: { screen: LoginScreen },
  Main: { screen: MainScreen },
});

const App = createAppContainer(AppNavigator);

export default App;
