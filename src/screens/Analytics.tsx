import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { colors } from '../constants';

const moodOptions = [
  { emoji: '🧑‍💻', description: 'studious' },
  { emoji: '🤔', description: 'pensive' },
  { emoji: '😊', description: 'happy' },
  { emoji: '🥳', description: 'celebratory' },
  { emoji: '😤', description: 'frustrated' },
];

const Analytics: React.FC = () => {
  return (
    <View style={styles.container}>
      {moodOptions.map(option => (
        <Text key={option.emoji} style={styles.moodText}>
          {option.emoji}
        </Text>
      ))}
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
  moodText: {
    fontSize: 24,
  },
  moodList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
});

export default Analytics;
