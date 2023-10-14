import React from 'react';
import { ScrollView, View, StyleSheet, Dimensions, Alert } from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
// import {TrashIcon} from 'react-native-heroicons/mini'


const ProfileScreen = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: '#3D550C',
      },
      headerTintColor: '#fff', 

    });
  }, [navigation]);

  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const cardWidth = screenWidth * 0.4;
  const cardHeight = screenHeight * 0.1;

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#81B622',
      flex: 1,
      padding: 12,
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    rowContainer: {
      flexDirection: 'row',
      padding: 4,
      marginBottom: 4,
    },
    card: {
      padding: 2,
      margin: 10,
      width: cardWidth,
      height: cardHeight,
    },
    button: {
      mode: 'outlined',
      alignSelf: 'stretch',
      alignItems: 'center',
      justifyContent: 'center',
      // paddingVertical: 12,
      // paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      // backgroundColor: 'black',
      // padding: 10,
      // margin: 10,
      // // contentStyle:
      // contentStyle: {
      //   backgroundColor: 'black',
      // },
      // textAlign: 'center',
    },
    text: {
      // fontSize: 16,
      // lineHeight: 21,
      // fontWeight: 'bold',
      // letterSpacing: 0.25,
      // color: 'white',
    }
  });

  return (
    <View style={styles.container}>
    
      {/* <ScrollView contentContainerStyle={styles.row}    */}
      {/* showsVerticalScrollIndicator={false}> */}
      <View>
          <View style={styles.rowContainer}>
            {/* <Card> */}
            <Card style={styles.card}>
              <Card.Content>
              {/* <Button>Statistics</Button> */}
              <Button style={styles.button} onPress={() => Alert.alert("Test")}>Statistics</Button>
              </Card.Content>
            </Card>
            <Card style={styles.card}>
              <Card.Content>
                <Title>Badges</Title>
              </Card.Content>
            </Card>
          </View>
        </View>
        <Card>
          <Card.Content>
            <Title>History</Title>
          </Card.Content>
        </Card>
    </View>
  
  );
};


export default ProfileScreen;