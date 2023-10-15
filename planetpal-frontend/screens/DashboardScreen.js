import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet, Alert, Dimensions } from "react-native";
import {
  Card,
  Title,
  Paragraph,
  ProgressBar,
  List,
  Avatar,
} from "react-native-paper";

const DashboardScreen = ({ navigation }) => {
  const [currentProgress, setCurrentProgress] = useState(0.0);
  const [currentNumRecycled, setCurrentNumRecycled] = useState(0);
  const [tokens, setTokens] = useState(0.0);

  useEffect(() => {
    fetch("http://100.101.129.99:5000/user/progress").then((response) => {
      return response.json();
    })
    .then((resdata) => {
      setCurrentProgress(resdata.progress);
    });

    fetch("http://100.101.129.99:5000/user/getrecycled").then((response) => {
      return response.json();
    })
    .then((resdata) => {
      setCurrentNumRecycled(resdata[recycled-count]);
    });

    fetch("http://100.101.129.99:5000/user/gettokens").then((response) => {
      return response.json();
    })
    .then((resdata) => {
      setTokens(resdata.tokens);
    });
  }, [])

  const badges = [
    {
      name: "Eco Champion",
      description: "Demonstrate excellent recycling habits.",
      icon: "earth",
    },
    {
      name: "Green Warrior",
      description: "Consistently recycle a diverse range of materials.",
      icon: "tree",
    },
  ];

  const badges2 = [
    {
      name: "Ocean Protector",
      description:
        "Commitment to reducing plastic waste and promoting ocean conservation.",
      icon: "waves",
    },
  ];

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: "#81B622",
      },
      headerTintColor: "#fff",
    });
  }, [navigation]);

  // useEffect(() => {
  //   fetch("backend_api/users/progress").then((response)=>{response.json()}).then((data)=>setCurrentProgress(currentProgress + data.progress))
  // },[])

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
        <Title style={styles.progressTitle}>Challenge Progress</Title>
        <Text style={styles.cardParagraph}>October 2023</Text>
        <ProgressBar
            animatedValue={currentProgress}
            color="#81b622"
            visible={true}
            style={styles.progressBar}
        />


          <Title style={styles.progressTitle}>
            Green Tokens
          </Title>
          <Text style={styles.cardTParagraph}>{tokens} ©</Text>
          
          
          {/* <Paragraph style={styles.cardParagraph}>
            WALLALALAa
          </Paragraph> */}
          
          <Title style={styles.progressTitle}>Items Recycled</Title>
          <Text style={styles.cardTParagraph}>{currentNumRecycled}</Text>
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.cardTitle}>Badges</Title>
          <List.Section>
            {badges.map((badge, index) => (
              <List.Item
                key={index}
                title={badge.name}
                titleStyle={{ fontWeight: "bold" }}
                description={badge.description}
                left={() => <Avatar.Icon size={58} icon={badge.icon} />}
              />
            ))}
            {badges2.map((badge, index) => (
              <List.Item
                key={index}
                title={badge.name}
                titleStyle={{ fontWeight: "bold" }}
                description={badge.description}
                left={() => (
                  <Avatar.Icon
                    size={58}
                    icon={badge.icon}
                    style={{ backgroundColor: "#cccccc" }}
                  />
                )}
              />
            ))}
          </List.Section>
        </Card.Content>
      </Card>

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
  },
  progressBar: {
    alignItems: "center",
    height: 30,
    marginBottom: 10,
    borderRadius: 20
  },
  card: {
    maxHeight: 500,
    width: 360,
    backgroundColor: "#fff",
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  progressTitle: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  cardParagraph: {
    textAlign: "center",
    marginBottom: 6,
    fontStyle:"italic",
  },
  cardTParagraph: {
    textAlign: "center",
    marginBottom: 6,
    fontSize: 30,
    color: "#81B622"
  },
});

export default DashboardScreen;
