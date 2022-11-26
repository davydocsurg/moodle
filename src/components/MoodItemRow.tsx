import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import moment from 'moment';
import { MoodOptionWithTimestamp } from '../types';
import { theme } from '../constants';

type MoodItemRowProps = {
  item: MoodOptionWithTimestamp;
};

export const MoodItemRow: React.FC<MoodItemRowProps> = ({ item }) => {
  return (
    <View style={styles.moodItem}>
      <View style={styles.iconAndDescription}>
        <Text style={styles.moodValue}>{item.mood.emoji}</Text>
        <Text style={styles.moodDescription}>{item.mood.description}</Text>
      </View>
      <Text style={styles.moodDate}>
        {moment(new Date(item.timestamp)).calendar()}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  moodValue: {
    textAlign: 'center',
    fontSize: 40,
    marginRight: 10,
    fontFamily: theme.fontFamilyRegular,
  },
  moodDate: {
    textAlign: 'center',
    color: theme.colorLavender,
    fontFamily: theme.fontFamilyLight,
  },
  moodItem: {
    backgroundColor: 'white',
    marginBottom: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  moodDescription: {
    fontSize: 18,
    color: theme.colorPurple,
    // fontWeight: 'bold',
    fontFamily: theme.fontFamilyRegular,
  },
  iconAndDescription: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
