import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import TodaysScreen from '../screens/TodaysScreen';

const TodaysStack = createStackNavigator({
  Links: TodaysScreen,
});

TodaysStack.navigationOptions = {
  tabBarLabel: 'Today',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-clock' : 'md-clock'}
    />
  ),
};

export default createBottomTabNavigator({
  TodaysStack,
});
