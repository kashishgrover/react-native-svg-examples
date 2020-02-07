import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Example1Screen = () => {
  return (
    <View style={styles.container}>
      <Text>Example1Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Example1Screen;
