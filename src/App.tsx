import React from 'react';
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <Text>Hello</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'teal',
  },

  subContainer: {
    margin: 12,
  },
});

export default App;
