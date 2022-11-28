import React, { useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  LayoutAnimation,
} from 'react-native';
import moment from 'moment';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Reanimated, {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

// locals
import { MoodOptionWithTimestamp } from '../types';
import { theme } from '../constants';
import { useMoodListContext } from '../contexts';

type MoodItemRowProps = {
  item: MoodOptionWithTimestamp;
};

export const MoodItemRow: React.FC<MoodItemRowProps> = ({ item }) => {
  const { handleDeleteMood } = useMoodListContext();
  const translateX = useSharedValue(0);
  const maxSwipe = 80;

  const handleDelete = useCallback(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    handleDeleteMood(item);
  }, [handleDeleteMood, item]);

  const onGestureEvent = useAnimatedGestureHandler(
    {
      onActive: e => {
        translateX.value = e.translationX;
      },
      onEnd: e => {
        if (Math.abs(e.translationX) > maxSwipe) {
          translateX.value = withTiming(1000 * Math.sign(e.translationX));
          console.warn('hey');
        } else {
          translateX.value = withTiming(0);
        }
      },
    },
    [],
  );

  const cardStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <PanGestureHandler
      activeOffsetX={100}
      activeOffsetY={1}
      onGestureEvent={onGestureEvent}>
      <Reanimated.View style={[styles.moodItem, cardStyle]}>
        <View style={styles.iconAndDescription}>
          <Text style={styles.moodValue}>{item.mood.emoji}</Text>
          <Text style={styles.moodDescription}>{item.mood.description}</Text>
        </View>
        <Text style={styles.moodDate}>
          {moment(new Date(item.timestamp)).calendar()}
        </Text>
        <Pressable hitSlop={16} onPress={handleDelete}>
          <Text style={styles.deleteText}>Delete</Text>
        </Pressable>
      </Reanimated.View>
    </PanGestureHandler>
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
  deleteText: {
    color: theme.colorBlue,
    fontFamily: theme.fontFamilyRegular,
  },
});
