import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const Example4Screen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('./filter-example.svg')} />
      <Image source={require('./homer-simpson.svg')} style={styles.homer} />
      <Image source={require('./graphic-mesh-network.svg')} style={styles.mesh} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  homer: {
    height: 300,
    width: 300,
  },
  mesh: {
    height: 300,
    width: 300,
  },
});

export default Example4Screen;
