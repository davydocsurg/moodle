import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {colors} from '../constants';

const History = () => {
  return (
    <View>
      <Text style={styles.text}>History Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: colors.white,
  },
});

export default History;
