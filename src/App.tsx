import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import Splashscreen from 'react-native-splash-screen';

// locals
import { StyleSheet, SafeAreaView, Platform, UIManager } from 'react-native';
import { MoodListProvider } from './contexts';
import { BottomTabs } from './navigators';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const App: React.FC = () => {
  useEffect(() => {
    Splashscreen.hide();
  }, []);

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
