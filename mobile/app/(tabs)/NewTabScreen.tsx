import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function NewTabScreen() {
  return (
    <View style={styles.container}>
      <Text>Nova Aba!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
