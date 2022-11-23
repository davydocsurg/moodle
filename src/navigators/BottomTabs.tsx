import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Analytics, History, Home} from '../screens';

const Tabs = createBottomTabNavigator();

const BottomTabs: React.FC = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="History" component={History} />
      <Tabs.Screen name="Analytics" component={Analytics} />
    </Tabs.Navigator>
  );
};

export default BottomTabs;
