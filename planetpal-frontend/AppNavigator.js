import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './Screens/HomeScreen';
import ProfileScreen from './Screens/ProfileScreen';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Profile: ProfileScreen,
    // Add more screens here
  },
  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer(AppNavigator);