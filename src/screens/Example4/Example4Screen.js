import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const Example4Screen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('./filter-example.svg')} />
      <Image source={require('./homer-simpson.svg')} />
      <Image source={require('./tiger.svg')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Example4Screen;
