import React from 'react';
import { Text,View, Image, StyleSheet } from 'react-native';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
    <Image style={{paddingBottom:1, alignItems: 'center'}} source={require('../assets/Paucek_and_Lage.png')} />
      <Text style={{fontSize:40,padding:20,color:"black"}}>PlanetPal</Text>
      <Text style={{fontSize:15,textAlign:'center',color:"black"}}>Your Recycling Companion</Text>
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