import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {History, Home} from '../screens';

const Tabs = createBottomTabNavigator();

const BottomTabs: React.FC = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="History" component={History} />
    </Tabs.Navigator>
  );
};

export default BottomTabs;
