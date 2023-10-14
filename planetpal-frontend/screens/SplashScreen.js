import React from 'react';
import { Text,View, Image, StyleSheet } from 'react-native';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
    <Image style={{paddingBottom:20}} source={require('../assets/download.jpg')} />
      <Text style={{fontSize:40,padding:20,color:"#eb5850"}}>PlanetPal</Text>
      <Text style={{fontSize:15,textAlign:'center',color:"#eb5850"}}>Your Recycling Companion</Text>
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