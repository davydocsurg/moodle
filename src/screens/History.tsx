import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MoodItemRow } from '../components';
import { colors } from '../constants';
import { useMoodListContext } from '../contexts/MoodListProvider';

const History: React.FC = () => {
  const { moodList, handleMoodSelect } = useMoodListContext();

  return (
    <View style={styles.container}>
      {moodList.map(item => (
        <MoodItemRow item={item} key={item.timestamp} />
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
});

export default History;
