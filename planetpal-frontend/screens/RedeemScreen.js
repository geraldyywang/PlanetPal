import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  StyleSheet,
  Alert,
  Dimensions,
  Button,
} from "react-native";
import {
  Card,
  Title,
  Paragraph,
  ProgressBar,
  List,
  Avatar,
} from "react-native-paper";

let userEmail;

const DashboardScreen = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: "#81B622",
      },
      headerTintColor: "#fff",
    });
  }, [navigation]);

  const handlePress199 = () => {
    // const options = {
    //   method: "POST",
    //   headers: {
    //     accept: "application/json",
    //     Authorization:
    //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiI2NDQ5MWY2MjdjM2FhZWQ2ZDg3OTA4MGUiLCJFbnYiOiJzYW5kYm94IiwiQ3JlYXRlRGF0ZVRpbWUiOiIyMDIzLTEwLTEzIDE2OjI3OjIwLjAxNTg5MSIsIkhhc1Nlc3Npb25UaW1lT3V0IjpmYWxzZSwiU2Vzc2lvblRpbWVJbkhvdXJzIjo0MzgwMCwiU2l0ZUlkIjoxODQsImlhdCI6MTY5NzIxNDQ0MCwiZXhwIjoxODU0ODk0NDQwLCJpc3MiOiJNZXJjaGFudEFwaSBJc3N1ZXIiLCJhdWQiOiJNZXJjaGFudEFwaSJ9.dJP2h4BcQbyq1GSes1S5x7C0TS41LEXg-vap_6Ousp8",
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     amount: 2.0,
    //     first_name: "Brandon",
    //     last_name: "Martin",
    //     email: "Brandon@Martin.com",
    //     phone: "+14034881071",
    //     country: "CA",
    //     city: "Medicine Hat",
    //     zip_code: "T1A 0N1",
    //     state: "Alberta",
    //     address: "3291 Craven Place",
    //     ntf_url: "https://webhook.site/c6d84876-1499-4942-84fd-be16463f8352",
    //     ip_address: "127.0.0.1",
    //     convenience_fee: 0,
    //     udfs: ["unique_udf", "udf1"],
    //   }),
    // };

    // fetch("https://pp.paybilt.com/api/v2/payout/etransfer", options)
    //   .then((response) => response.json())
    //   .then((response) => console.log(response))
    //   .catch((err) => console.error(err));
  };

  // Function to handle the press for $4.99 button
  const handlePress499 = () => {
    // const options = {
    //   method: "POST",
    //   headers: {
    //     accept: "application/json",
    //     Authorization:
    //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiI2NDQ5MWY2MjdjM2FhZWQ2ZDg3OTA4MGUiLCJFbnYiOiJzYW5kYm94IiwiQ3JlYXRlRGF0ZVRpbWUiOiIyMDIzLTEwLTEzIDE2OjI3OjIwLjAxNTg5MSIsIkhhc1Nlc3Npb25UaW1lT3V0IjpmYWxzZSwiU2Vzc2lvblRpbWVJbkhvdXJzIjo0MzgwMCwiU2l0ZUlkIjoxODQsImlhdCI6MTY5NzIxNDQ0MCwiZXhwIjoxODU0ODk0NDQwLCJpc3MiOiJNZXJjaGFudEFwaSBJc3N1ZXIiLCJhdWQiOiJNZXJjaGFudEFwaSJ9.dJP2h4BcQbyq1GSes1S5x7C0TS41LEXg-vap_6Ousp8",
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     amount: 5.0,
    //     first_name: "Brandon",
    //     last_name: "Martin",
    //     email: "Brandon@Martin.com",
    //     phone: "+14034881071",
    //     country: "CA",
    //     city: "Medicine Hat",
    //     zip_code: "T1A 0N1",
    //     state: "Alberta",
    //     address: "3291 Craven Place",
    //     ntf_url: "https://webhook.site/c6d84876-1499-4942-84fd-be16463f8352",
    //     ip_address: "127.0.0.1",
    //     convenience_fee: 0,
    //     udfs: ["unique_udf", "udf1"],
    //   }),
    // };

    // fetch("https://pp.paybilt.com/api/v2/payout/etransfer", options)
    //   .then((response) => response.json())
    //   .then((response) => console.log(response))
    //   .catch((err) => console.error(err));
  };

  // Function to handle the press for $8.99 button
  const handlePress899 = () => {
    // Add your logic here for $8.99 button press
    // const options = {
    //   method: "POST",
    //   headers: {
    //     accept: "application/json",
    //     Authorization:
    //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiI2NDQ5MWY2MjdjM2FhZWQ2ZDg3OTA4MGUiLCJFbnYiOiJzYW5kYm94IiwiQ3JlYXRlRGF0ZVRpbWUiOiIyMDIzLTEwLTEzIDE2OjI3OjIwLjAxNTg5MSIsIkhhc1Nlc3Npb25UaW1lT3V0IjpmYWxzZSwiU2Vzc2lvblRpbWVJbkhvdXJzIjo0MzgwMCwiU2l0ZUlkIjoxODQsImlhdCI6MTY5NzIxNDQ0MCwiZXhwIjoxODU0ODk0NDQwLCJpc3MiOiJNZXJjaGFudEFwaSBJc3N1ZXIiLCJhdWQiOiJNZXJjaGFudEFwaSJ9.dJP2h4BcQbyq1GSes1S5x7C0TS41LEXg-vap_6Ousp8",
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     amount: 9.0,
    //     first_name: "Brandon",
    //     last_name: "Martin",
    //     email: "Brandon@Martin.com",
    //     phone: "+14034881071",
    //     country: "CA",
    //     city: "Medicine Hat",
    //     zip_code: "T1A 0N1",
    //     state: "Alberta",
    //     address: "3291 Craven Place",
    //     ntf_url: "https://webhook.site/c6d84876-1499-4942-84fd-be16463f8352",
    //     ip_address: "127.0.0.1",
    //     convenience_fee: 0,
    //     udfs: ["unique_udf", "udf1"],
    //   }),
    // };

    // fetch("https://pp.paybilt.com/api/v2/payout/etransfer", options)
    //   .then((response) => response.json())
    //   .then((response) => console.log(response))
    //   .catch((err) => console.error(err));
    // // You can navigate or perform other actions as needed
  };

  // Function to handle the press for $3.99 button
  const handlePress399 = () => {
    // Add your logic here for $3.99 button press
    // const options = {
    //   method: "POST",
    //   headers: {
    //     accept: "application/json",
    //     Authorization:
    //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiI2NDQ5MWY2MjdjM2FhZWQ2ZDg3OTA4MGUiLCJFbnYiOiJzYW5kYm94IiwiQ3JlYXRlRGF0ZVRpbWUiOiIyMDIzLTEwLTEzIDE2OjI3OjIwLjAxNTg5MSIsIkhhc1Nlc3Npb25UaW1lT3V0IjpmYWxzZSwiU2Vzc2lvblRpbWVJbkhvdXJzIjo0MzgwMCwiU2l0ZUlkIjoxODQsImlhdCI6MTY5NzIxNDQ0MCwiZXhwIjoxODU0ODk0NDQwLCJpc3MiOiJNZXJjaGFudEFwaSBJc3N1ZXIiLCJhdWQiOiJNZXJjaGFudEFwaSJ9.dJP2h4BcQbyq1GSes1S5x7C0TS41LEXg-vap_6Ousp8",
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     amount: 4.0,
    //     first_name: "Brandon",
    //     last_name: "Martin",
    //     email: "Brandon@Martin.com",
    //     phone: "+14034881071",
    //     country: "CA",
    //     city: "Medicine Hat",
    //     zip_code: "T1A 0N1",
    //     state: "Alberta",
    //     address: "3291 Craven Place",
    //     ntf_url: "https://webhook.site/c6d84876-1499-4942-84fd-be16463f8352",
    //     ip_address: "127.0.0.1",
    //     convenience_fee: 0,
    //     udfs: ["unique_udf", "udf1"],
    //   }),
    // };

    // fetch("https://pp.paybilt.com/api/v2/payout/etransfer", options)
    //   .then((response) => response.json())
    //   .then((response) => console.log(response))
    //   .catch((err) => console.error(err));
    // // You can navigate or perform other actions as needed
  };

  // Function to handle the press for $6.99 button
  const handlePress699 = () => {
    // Add your logic here for $6.99 button press
    // const options = {
    //   method: "POST",
    //   headers: {
    //     accept: "application/json",
    //     Authorization:
    //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiI2NDQ5MWY2MjdjM2FhZWQ2ZDg3OTA4MGUiLCJFbnYiOiJzYW5kYm94IiwiQ3JlYXRlRGF0ZVRpbWUiOiIyMDIzLTEwLTEzIDE2OjI3OjIwLjAxNTg5MSIsIkhhc1Nlc3Npb25UaW1lT3V0IjpmYWxzZSwiU2Vzc2lvblRpbWVJbkhvdXJzIjo0MzgwMCwiU2l0ZUlkIjoxODQsImlhdCI6MTY5NzIxNDQ0MCwiZXhwIjoxODU0ODk0NDQwLCJpc3MiOiJNZXJjaGFudEFwaSBJc3N1ZXIiLCJhdWQiOiJNZXJjaGFudEFwaSJ9.dJP2h4BcQbyq1GSes1S5x7C0TS41LEXg-vap_6Ousp8",
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     amount: 7.0,
    //     first_name: "Brandon",
    //     last_name: "Martin",
    //     email: "Brandon@Martin.com",
    //     phone: "+14034881071",
    //     country: "CA",
    //     city: "Medicine Hat",
    //     zip_code: "T1A 0N1",
    //     state: "Alberta",
    //     address: "3291 Craven Place",
    //     ntf_url: "https://webhook.site/c6d84876-1499-4942-84fd-be16463f8352",
    //     ip_address: "127.0.0.1",
    //     convenience_fee: 0,
    //     udfs: ["unique_udf", "udf1"],
    //   }),
    // };

    // fetch("https://pp.paybilt.com/api/v2/payout/etransfer", options)
    //   .then((response) => response.json())
    //   .then((response) => console.log(response))
    //   .catch((err) => console.error(err));
    // // You can navigate or perform other actions as needed
  };

  // Function to handle the press for $10.99 button
  const handlePress1099 = () => {
    // Add your logic here for $10.99 button press
    // const options = {
    //   method: "POST",
    //   headers: {
    //     accept: "application/json",
    //     Authorization:
    //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiI2NDQ5MWY2MjdjM2FhZWQ2ZDg3OTA4MGUiLCJFbnYiOiJzYW5kYm94IiwiQ3JlYXRlRGF0ZVRpbWUiOiIyMDIzLTEwLTEzIDE2OjI3OjIwLjAxNTg5MSIsIkhhc1Nlc3Npb25UaW1lT3V0IjpmYWxzZSwiU2Vzc2lvblRpbWVJbkhvdXJzIjo0MzgwMCwiU2l0ZUlkIjoxODQsImlhdCI6MTY5NzIxNDQ0MCwiZXhwIjoxODU0ODk0NDQwLCJpc3MiOiJNZXJjaGFudEFwaSBJc3N1ZXIiLCJhdWQiOiJNZXJjaGFudEFwaSJ9.dJP2h4BcQbyq1GSes1S5x7C0TS41LEXg-vap_6Ousp8",
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     amount: 11.0,
    //     first_name: "Brandon",
    //     last_name: "Martin",
    //     email: "Brandon@Martin.com",
    //     phone: "+14034881071",
    //     country: "CA",
    //     city: "Medicine Hat",
    //     zip_code: "T1A 0N1",
    //     state: "Alberta",
    //     address: "3291 Craven Place",
    //     ntf_url: "https://webhook.site/c6d84876-1499-4942-84fd-be16463f8352",
    //     ip_address: "127.0.0.1",
    //     convenience_fee: 0,
    //     udfs: ["unique_udf", "udf1"],
    //   }),
    // };

    // fetch("https://pp.paybilt.com/api/v2/payout/etransfer", options)
    //   .then((response) => response.json())
    //   .then((response) => console.log(response))
    //   .catch((err) => console.error(err));
    // // You can navigate or perform other actions as needed
  };

  return (
    <View style={styles.container}>
      <View style={styles.columns}>
        <Card style={styles.card}>
          <Card.Content>
          <Text style={styles.cardParagraph}>100 Tokens</Text>
            <Button
              style={{ fontSize: 30, color: "black" }}
              // styleDisabled={{color: 'red'}}
              onPress={handlePress199}
              title="$1.99"
            ></Button>
            
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
          <Text style={styles.cardParagraph}>200 Tokens</Text>
            <Button
              style={{ fontSize: 30, color: "black" }}
              // styleDisabled={{color: 'red'}}
              onPress={handlePress499}
              title="$4.99"
            ></Button>
            
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
          <Text style={styles.cardParagraph}>400 Tokens</Text>
            <Button
              style={{ fontSize: 30, color: "black" }}
              // styleDisabled={{color: 'red'}}
              onPress={handlePress899}
              title="$8.99"
            ></Button>
           
          </Card.Content>
        </Card>
      </View>

      <View style={styles.columns}>
        <Card style={styles.card}>
          <Card.Content>
          <Text style={styles.cardParagraph}>150 Tokens</Text>
            <Button
              style={{ fontSize: 30, color: "black" }}
              // styleDisabled={{color: 'red'}}
              onPress={handlePress399}
              title="$3.99"
            ></Button>
            
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
          <Text style={styles.cardParagraph}>300 Tokens</Text>
            <Button
              style={{ fontSize: 30, color: "black" }}
              // styleDisabled={{color: 'red'}}
              onPress={handlePress699}
              title="$6.99"
            ></Button>
            
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
          <Text style={styles.cardParagraph}>500 Tokens</Text>
            <Button
              style={{ fontSize: 30, color: "black" }}
              // styleDisabled={{color: 'red'}}
              onPress={handlePress1099}
              title="$10.99"
            ></Button>
            
          </Card.Content>
        </Card>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#81B622",
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  columns: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  progressBar: {
    alignItems: "center",
    height: 30,
    marginBottom: 10,
  },
  card: {
    maxHeight: 500,
    width: 150,
    height: 150,
    backgroundColor: "#fff",
    marginBottom: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
    marginHorizontal: 15,
    justifyContent: "center",

  },
  cardTitle: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  progressTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  cardParagraph: {
    textAlign: "center",
    marginBottom: 6,
    fontWeight: "bold",
    fontSize: 24
  },
});

export default DashboardScreen;
