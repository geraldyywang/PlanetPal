import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, Alert } from 'react-native';
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
    {
      name: 'Ocean Protector',
      description: 'Commitment to reducing plastic waste and promoting ocean conservation.',
      icon: 'waves',
    },
  ];

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
      

      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.cardTitle}><Text style={{ color: "#3D550C" }}>Green</Text> Tokens</Title>
          <Paragraph style={styles.cardParagraph}>
            This is a sample recycling bin card.
          </Paragraph>
        </Card.Content>
      </Card>
      <ProgressBar progress={0.5} color="#fff" visible={true} style={styles.progressBar} />
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
      </List.Section>
        </Card.Content>
      </Card>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  
    backgroundColor: '#81b622',
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressBar: {
    width: '100%',
    height: 10,
    marginBottom: 20,
  },
  card: {
    maxHeight:500,
    maxWidth:300,
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
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cardParagraph: {
    textAlign: 'center',
  },
});

export default DashboardScreen;
