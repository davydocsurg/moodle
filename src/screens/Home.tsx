import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {colors} from '../constants';

const Home = () => {
  return (
    <View>
      <Text style={styles.text}>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: colors.gray,
  },
});

export default Home;
