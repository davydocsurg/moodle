import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {colors} from '../constants';

const History: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>History Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 13,
  },
  text: {
    color: colors.gray,
  },
});

export default History;
