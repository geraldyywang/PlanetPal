import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import DashboardScreen from './Screens/DashboardScreen';
import ProfileScreen from './Screens/ProfileScreen';
import SettingsScreen from './Screens/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      tabBarOptions={{
          activeTintColor: 'black', // Color of the selected tab label
          inactiveTintColor: 'gray', // Color of the inactive tab label
          // barStyle: { backgroundColor: '#3D550C' }, // Background color of the entire tab bar
          // backgroundColor: '#3D550C'
        }}>
        <Tab.Screen name="Dashboard" component={DashboardScreen} />
        {/* <Tab.Screen name="Recycle" /> */}
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// const AppNavigator = createStackNavigator(
//   {
//     Home: HomeScreen,
//     Profile: ProfileScreen,
//     // Add more screens here
//   },
//   {
//     initialRouteName: 'Home',
//   }
// );

// export default createAppContainer(AppNavigator);