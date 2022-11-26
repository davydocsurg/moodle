import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';

// locals
import { MoodItemRow, MoodPicker } from '../components';
import { colors } from '../constants';
import { useMoodListContext } from '../contexts/MoodListProvider';

const Home: React.FC = () => {
  const { moodList, handleMoodSelect } = useMoodListContext();

  return (
    <View style={styles.container}>
      <ScrollView>
        <MoodPicker onSelect={handleMoodSelect} />
        {moodList.map(item => (
          <View key={item.mood.id}>
            <Text style={styles.text}>
              {/* {item.mood.emoji} {moment(new Date(item.timestamp)).calendar()}{' '} */}
            </Text>
            <MoodItemRow item={item} key={item.timestamp} />
          </View>
        ))}
      </ScrollView>
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
