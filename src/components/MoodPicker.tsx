import React, { useCallback, useState } from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import Reanimated, {
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

// locals
import { theme } from '../constants';
import { MoodOptionType } from '../types';

const moodOptions: MoodOptionType[] = [
  { id: 1, emoji: '🧑‍💻', description: 'studious' },
  { id: 2, emoji: '🤔', description: 'pensive' },
  { id: 3, emoji: '😊', description: 'happy' },
  { id: 4, emoji: '🥳', description: 'celebratory' },
  { id: 5, emoji: '😤', description: 'frustrated' },
];

type MoodPickerProps = {
  onSelect: (mood: MoodOptionType) => void;
};

const MoodPicker: React.FC<MoodPickerProps> = ({ onSelect }) => {
  const [selectedMood, setSelectedMood] = useState<MoodOptionType>();
  const [hasSelected, setHasSelected] = useState(false);

  const buttonStyle = useAnimatedStyle(
    () => ({
      opacity: selectedMood ? withTiming(1) : withTiming(0.5),
      transform: [{ scale: selectedMood ? withTiming(1) : 0.8 }],
    }),
    [],
  );

  const ReanimatedPressable = Reanimated.createAnimatedComponent(Pressable);

  const handleSelect = useCallback(() => {
    if (selectedMood) {
      onSelect(selectedMood);
      setSelectedMood(undefined);
      setHasSelected(true);
    }
  }, [onSelect, selectedMood]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>How are you right now?</Text>
      <View style={styles.moodList}>
        {moodOptions.map(option => (
          <View key={option.emoji}>
            <Pressable
              onPress={() => setSelectedMood(option)}
              style={[
                styles.moodItem,
                option.emoji === selectedMood?.emoji
                  ? styles.selectedMoodItem
                  : undefined,
              ]}>
              <Text style={styles.moodText}>{option.emoji}</Text>
            </Pressable>
            <Text style={styles.descriptionText}>
              {selectedMood?.emoji === option.emoji ? option.description : ' '}
            </Text>
          </View>
        ))}
      </View>
      <ReanimatedPressable
        style={[styles.button, buttonStyle]}
        onPress={handleSelect}>
        <Text style={styles.buttonText}>Choose</Text>
      </ReanimatedPressable>
    </View>
  );
};

const styles = StyleSheet.create({
  moodText: {
    fontSize: 24,
  },
  moodList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  moodItem: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginBottom: 5,
  },
  selectedMoodItem: {
    borderWidth: 2,
    backgroundColor: theme.colorPurple,
    borderColor: theme.colorWhite,
  },
  descriptionText: {
    color: theme.colorPurple,
    // fontWeight: 'bold',
    fontSize: 10,
    textAlign: 'center',
    fontFamily: theme.fontFamilyBold,
  },
  container: {
    borderWidth: 2,
    borderColor: theme.colorPurple,
    margin: 10,
    borderRadius: 10,
    padding: 20,
  },
  heading: {
    fontSize: 20,
    color: theme.colorPurple,
    letterSpacing: 1,
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: theme.fontFamilyBold,
  },
  button: {
    backgroundColor: theme.colorPurple,
    width: 150,
    borderRadius: 20,
    marginTop: 20,
    alignSelf: 'center',
    padding: 10,
  },
  buttonText: {
    color: theme.colorWhite,
    textAlign: 'center',
    // fontWeight: 'bold',
    fontFamily: theme.fontFamilyBold,
  },
});

export default MoodPicker;
