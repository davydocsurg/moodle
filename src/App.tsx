import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, SafeAreaView, Platform, UIManager } from 'react-native';
import { MoodListProvider } from './contexts';
import { BottomTabs } from './navigators';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <MoodListProvider>
          <BottomTabs />
        </MoodListProvider>
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'teal',
  },

  subContainer: {
    margin: 12,
  },
});

export default App;
