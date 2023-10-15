import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, Alert, Dimensions, Button } from 'react-native';
import { Card, Title, Paragraph, ProgressBar, List, Avatar } from 'react-native-paper';

let userEmail

const DashboardScreen = ({ navigation }) => {

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: '#3D550C'
      },
      headerTintColor: '#fff',
    });
  }, [navigation]);

const handlePress199 = () => {
    // Add your logic here for $1.99 button press
    Alert.prompt(
        "Enter Email",
        "The PayBilt API will use INTERAC to e-Transfer to your account. Please enable autodeposit.",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          {
            text: "OK",
            onPress: email => console.log("OK Pressed, email: " + email) // instead of console.log, call paybilt api to transfer
          }
        ]
      );
  };

  // Function to handle the press for $4.99 button
  const handlePress499 = () => {
    // Add your logic here for $4.99 button press
    Alert.prompt(
        "Enter Email",
        "The PayBilt API will use INTERAC to e-Transfer to your account. Please enable autodeposit.",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          {
            text: "OK",
            onPress: email => console.log("OK Pressed, email: " + email) // instead of console.log, call paybilt api to transfer
          }
        ]
      );
    // You can navigate or perform other actions as needed
  };

  // Function to handle the press for $8.99 button
  const handlePress899 = () => {
    // Add your logic here for $8.99 button press
    Alert.prompt(
        "Enter Email",
        "The PayBilt API will use INTERAC to e-Transfer to your account. Please enable autodeposit.",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          {
            text: "OK",
            onPress: email => console.log("OK Pressed, email: " + email) // instead of console.log, call paybilt api to transfer
          }
        ]
      );
    // You can navigate or perform other actions as needed
  };

  // Function to handle the press for $3.99 button
  const handlePress399 = () => {
    // Add your logic here for $3.99 button press
    Alert.prompt(
        "Enter Email",
        "The PayBilt API will use INTERAC to e-Transfer to your account. Please enable autodeposit.",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          {
            text: "OK",
            onPress: email => console.log("OK Pressed, email: " + email) // instead of console.log, call paybilt api to transfer
          }
        ]
      );
    // You can navigate or perform other actions as needed
  };

  // Function to handle the press for $6.99 button
  const handlePress699 = () => {
    // Add your logic here for $6.99 button press
    Alert.prompt(
        "Enter Email",
        "The PayBilt API will use INTERAC to e-Transfer to your account. Please enable autodeposit.",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          {
            text: "OK",
            onPress: email => console.log("OK Pressed, email: " + email) // instead of console.log, call paybilt api to transfer
          }
        ]
      );
    // You can navigate or perform other actions as needed
  };

  // Function to handle the press for $10.99 button
  const handlePress1099 = () => {
    // Add your logic here for $10.99 button press
    Alert.prompt(
        "Enter Email",
        "The PayBilt API will use INTERAC to e-Transfer to your account. Please enable autodeposit.",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          {
            text: "OK",
            onPress: email => console.log("OK Pressed, email: " + email) // instead of console.log, call paybilt api to transfer
          }
        ]
      );
    // You can navigate or perform other actions as needed
  };

  return (
        <View style={styles.container}>
            <View style = {styles.columns}>
            <Card style={styles.card}>
                <Card.Content>
                <Button
                style={{fontSize: 30, color: 'black'}}
                // styleDisabled={{color: 'red'}}
                onPress={handlePress199}
                title="$1.99">
                </Button>
                <Text style={styles.cardParagraph}>100 Tokens</Text>
                </Card.Content>
            </Card>

            <Card style={styles.card}>
                <Card.Content>
                <Button
                style={{fontSize: 30, color: 'black'}}
                // styleDisabled={{color: 'red'}}
                onPress={handlePress499}
                title="$4.99">
                </Button>
                <Text style={styles.cardParagraph}>200 Tokens</Text>
                </Card.Content>
            </Card>

            <Card style={styles.card}>
                <Card.Content>
                <Button
                style={{fontSize: 30, color: 'black'}}
                // styleDisabled={{color: 'red'}}
                onPress={handlePress899}
                title="$8.99">
                </Button>
                <Text style={styles.cardParagraph}>400 Tokens</Text>
                </Card.Content>
            </Card>
            </View>

            <View style = {styles.columns}>
            <Card style={styles.card}>
                <Card.Content>
                <Button
                style={{fontSize: 30, color: 'black'}}
                // styleDisabled={{color: 'red'}}
                onPress={handlePress399}
                title="$3.99">
                </Button>
                <Text style={styles.cardParagraph}>150 Tokens</Text>
                </Card.Content>
            </Card>

            <Card style={styles.card}>
                <Card.Content>
                <Button
                style={{fontSize: 30, color: 'black'}}
                // styleDisabled={{color: 'red'}}
                onPress={handlePress699}
                title="$6.99">
                </Button>
                <Text style={styles.cardParagraph}>300 Tokens</Text>
                </Card.Content>
            </Card>

            <Card style={styles.card}>
                <Card.Content>
                <Button
                style={{fontSize: 30, color: 'black'}}
                // styleDisabled={{color: 'red'}}
                onPress={handlePress1099}
                title="$10.99">
                </Button>
                <Text style={styles.cardParagraph}>500 Tokens</Text>
                </Card.Content>
            </Card>
            </View>
            <StatusBar style="auto" />
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
    flexDirection: 'row',
  },
  columns: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  progressBar: {
    alignItems: 'center',
    height: 30,
    marginBottom: 10,
  },
  card: {
    maxHeight:500,
    width: Dimensions.get('window').width*0.4,
    backgroundColor: '#fff',
    marginBottom: 40,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
    marginHorizontal: 15
  },
  cardTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  progressTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cardParagraph: {
    textAlign: 'center',
    marginBottom: 6
  },
});

export default DashboardScreen;
