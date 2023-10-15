import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import DashboardScreen from './Screens/DashboardScreen';
import ProfileScreen from './Screens/ProfileScreen';
import SettingsScreen from './Screens/SettingsScreen';
import ProductClassificationScreen from './Screens/ProductClassificationScreen'

import Icons from 'react-native-heroicons/mini'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={{
          activeTintColor: 'black', // Color of the selected tab label
          inactiveTintColor: 'gray', // Color of the inactive tab label
        }}>
        <Tab.Screen name="Dashboard" component={DashboardScreen} options={{tabBarLabel: 'Dashboard', tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />),  }}/>
        {/* <Tab.Screen name="Recycle" /> */}
        {/* <Tab.Screen name="Settings" component={SettingsScreen} options={{tabBarLabel: 'Settings', tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cog" color={color} size={size} />),  }}/> */}
        {/* <Tab.Screen name="Profile" component={ProfileScreen} options={{tabBarLabel: 'Profile', tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />),  }}/> */}
        <Tab.Screen name="Camera" component={ProductClassificationScreen} options={{tabBarLabel: 'Camera', tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="camera" color={color} size={size} />),  }}/>
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