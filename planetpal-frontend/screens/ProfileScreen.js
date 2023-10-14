import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Card>
        <Card.Content>
          <Title>Profile</Title>
          <Paragraph>This is a sample profile card.</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button>Open Bin</Button>
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
});

export default ProfileScreen;