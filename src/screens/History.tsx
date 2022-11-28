import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { MoodItemRow } from '../components';
import { colors } from '../constants';
import { useMoodListContext } from '../contexts/MoodListProvider';

const History: React.FC = () => {
  const { moodList } = useMoodListContext();

  return (
    <ScrollView style={styles.container}>
      {moodList
        .slice()
        .reverse()
        .map(item => (
          <MoodItemRow item={item} key={item.timestamp} />
        ))}
    </ScrollView>
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
