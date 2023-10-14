// import { Paper } from "@mui/material";
// import { StatusBar } from "expo-status-bar";
// import { SafeAreaView, Text, View } from "react-native";
// import { PaperProvider, DefaultTheme } from "react-native-paper";
// import AppNavigator from "./AppNavigator";
// import { createStackNavigator } from 'react-navigation-stack';



// export default function App() {
//   return (
//     <PaperProvider theme={recyclingTheme}>
//       {/* <AppNavigator /> */}
//     </PaperProvider>
//   );
// }


// const recyclingTheme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     primary: '#4CAF50', // green color for recycling theme
//     accent: '#FFC107', // yellow color for recycling theme
//   },
// };

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';
import { PaperProvider, DefaultTheme } from 'react-native-paper';
import { createStackNavigator } from 'react-navigation-stack'; // Import createStackNavigator
import AppNavigator from './AppNavigator';
import SplashScreen from './Screens/SplashScreen';

const recyclingTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#4CAF50', // green color for recycling theme
    accent: '#FFC107', // yellow color for recycling theme
  },
};

export default function App() {


  const [isAppReady, setAppReady] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setAppReady(true);
    }, 3000);

  }, []);

  
  return (
    <PaperProvider theme={recyclingTheme}>
      {isAppReady ? (
      <AppNavigator />): <SplashScreen/>}
    </PaperProvider>
  );
}





