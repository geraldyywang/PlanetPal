import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
// import { TrashOutline } from 'react-native-heroicons';
// import { TrashOutline } from 'react-native-heroicons/outline';

// const DashboardScreen = () => {
const DashboardScreen = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: '#3D550C',
      },
      headerTintColor: '#fff', 

    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Card>
        <Card.Content>
          {/* <TrashOutline size={24}/> */}
          <Title>Recycling Bin</Title>
          <Paragraph>This is a sample recycling bin card.</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button 
            mode = 'outlined'
            style = {{backgroundColor: 'black'}}
            onPress={() => Alert.alert("Test")}
           >PressMe</Button>
        </Card.Actions>
      </Card>


      {/* <Card>
        <Card.Content>
          <Title>Recycling Bin</Title>
          <Paragraph>This is a sample recycling bin card.</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button 
            mode = 'outlined'
            style = {{backgroundColor: 'black'}}
            // color = 'black'
            onPress={() => Alert.alert("Test")}
           >PressMe</Button>
        </Card.Actions>
      </Card> */}
      {/* Add more components for recycling statistics, etc. */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#81B622',
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    textAlign: 'center',
    color: 'black',
  }
});

export default DashboardScreen;