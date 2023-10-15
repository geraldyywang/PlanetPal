import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, Alert, Dimensions } from 'react-native';
import { Card, Title, Paragraph, ProgressBar, List, Avatar } from 'react-native-paper';

const DashboardScreen = ({ navigation }) => {

  const badges = [
    {
      name: 'Eco Champion',
      description: 'Demonstrate excellent recycling habits.',
      icon: 'earth',
    },
    {
      name: 'Green Warrior',
      description: 'Consistently recycle a diverse range of materials.',
      icon: 'tree',
    },
  ];

  const badges2 = [
    {
      name: 'Ocean Protector',
      description: 'Commitment to reducing plastic waste and promoting ocean conservation.',
      icon: 'waves',
    },
  ]

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        // backgroundColor: '#3D550C',
        backgroundColor: '#59981A'
      },
      headerTintColor: '#fff',
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      

      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.cardTitle}><Text style={{ color: "#3D550C" }}>Green</Text> Tokens</Title>
          <Title style={styles.progressTitle}>Green Challenge Progress</Title><Text style={styles.cardParagraph}>October 2023</Text>
          <ProgressBar progress={0.2} color="#81b622" visible={true} style={styles.progressBar} />
          <Paragraph style={styles.cardParagraph}>
            WALLALALAa
          </Paragraph>
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
            titleStyle={{fontWeight:'bold'}}
            description={badge.description}
            left={() => <Avatar.Icon size={58} icon={badge.icon} />}
          />
        ))}
        {badges2.map((badge, index) => (
          <List.Item
            key={index}
            title={badge.name}
            titleStyle={{fontWeight:'bold'}}
            description={badge.description}
            left={() => <Avatar.Icon size={58} icon={badge.icon} style={{backgroundColor: '#cccccc'}}/>}
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
    backgroundColor: '#46250A',
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressBar: {
    alignItems: 'center',
    height: 30,
    marginBottom: 10,
  },
  card: {
    maxHeight:500,
    width: Dimensions.get('window').width*0.8,
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
