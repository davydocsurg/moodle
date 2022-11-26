import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { theme } from '../constants';
import { AnalyticsIcon, HistoryIcon, HomeIcon } from '../assets/icons';
import { Analytics, History, Home } from '../screens';

const Tabs = createBottomTabNavigator();

const BottomTabs: React.FC = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: theme.colorBlue,
        headerTitleStyle: { fontFamily: theme.fontFamilyBold },
        tabBarInactiveTintColor: theme.colorGrey,
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'Home') {
            return <HomeIcon color={color} size={size} />;
          }

          if (route.name === 'History') {
            return <HistoryIcon color={color} size={size} />;
          }

          if (route.name === 'Analytics') {
            return <AnalyticsIcon color={color} size={size} />;
          }

          return null;
        },
      })}>
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{ title: "Today's Mood" }}
      />
      <Tabs.Screen
        name="History"
        component={History}
        options={{ title: 'Past Moods' }}
      />
      <Tabs.Screen
        name="Analytics"
        component={Analytics}
        options={{ title: 'Charts' }}
      />
    </Tabs.Navigator>
  );
};

export default BottomTabs;
