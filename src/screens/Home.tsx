import React, {useCallback, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {MoodPicker} from '../components';
import {colors} from '../constants';
import {MoodOptionType, MoodOptionWithTimestamp} from '../types';

const Home: React.FC = () => {
  const [moodList, setMoodList] = useState<MoodOptionWithTimestamp[]>([]);

  const handleMoodSelect = useCallback((mood: MoodOptionType) => {
    setMoodList(current => [...current, {mood, timestamp: Date.now()}]);
  }, []);

  return (
    <View style={styles.container}>
      <MoodPicker onSelect={handleMoodSelect} />
      {moodList.map(item => (
        <Text key={item.timestamp} style={styles.text}>
          {item.mood.emoji} {new Date(item.timestamp).toString()}{' '}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 13,
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: colors.gray,
  },
});

export default Home;
