import React from 'react';
import { Text,View, Image, StyleSheet } from 'react-native';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
    <Image style={{paddingBottom:1, alignItems: 'center'}} source={require('../assets/Paucek_and_Lage.png')} />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
});

export default SplashScreen;