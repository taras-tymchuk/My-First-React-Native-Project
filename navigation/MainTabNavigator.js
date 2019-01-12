import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import InfoScreen from '../screens/InfoScreen';
import GreetingScreen from '../screens/GreetingScreen';

const GreetingStack = createStackNavigator({
  Home: GreetingScreen,
});

GreetingStack.navigationOptions = {
  tabBarLabel: 'Greeting',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const InfoStack = createStackNavigator({
  Links: InfoScreen,
});

InfoStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

export default createBottomTabNavigator({
  GreetingStack,
  InfoStack,
});
