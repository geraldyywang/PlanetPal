import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
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

  
  return (
    <View style={styles.container}>
      {/* <ScrollView contentContainerStyle={styles.row}    */}
      {/* showsVerticalScrollIndicator={false}> */}
      <View>
          <View style={styles.rowContainer}>
            <Card style={styles.card}>
              <Card.Content>
                <Title>Statistics</Title>
                <Button>

                </Button>
                {/* <Paragraph>testing</Paragraph> */}
              </Card.Content>
            </Card>
            <Card style={styles.card}>
              <Card.Content>
                <Title>History</Title>
                {/* <Paragraph>testing</Paragraph> */}
              </Card.Content>
            </Card>
          </View>
        </View>

        <View>
          <View style={styles.rowContainer}>
            <Card style={styles.card}>
              <Card.Content>
                <Title>Friends</Title>
              </Card.Content>
            </Card>
            <Card style={styles.card}>
              <Card.Content>
                <Title>sbfLJBSFDKJBSDHF</Title>
              </Card.Content>
            </Card>
          </View>
        </View>
    </View>
  
  );
};

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
    // marginHorizontal: 
  },
  card: {
    // flex: 1,
    padding: 2,
    margin: 10,
    aspectRatio: 1.35,
    flexBasis: '20%',
    // width: 100
  },
});

export default ProfileScreen;