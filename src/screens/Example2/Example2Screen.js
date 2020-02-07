import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomVector from './CustomVector';
import NetworkSvg from './NetworkSvg';
import XmlSvg from './XmlSvg';

const Example2Screen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>1. Custom Vector</Text>
        <CustomVector />
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>2. Network SVG</Text>
        <NetworkSvg />
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>3. XML Strings</Text>
        <XmlSvg />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 8,
  },
  section: {
    marginBottom: 16,
  },
});

export default Example2Screen;
