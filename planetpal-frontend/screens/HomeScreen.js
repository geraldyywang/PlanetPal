import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Card>
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
      </Card>

      {/* Add more components for recycling statistics, etc. */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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

export default HomeScreen;