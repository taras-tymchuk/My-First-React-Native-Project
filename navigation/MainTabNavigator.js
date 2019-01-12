import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import GreetingScreen from '../screens/GreetingScreen';
import AboutDeveloperScreen from '../screens/AboutDeveloperScreen';

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

const AboutDeveloperStack = createStackNavigator({
  Info: AboutDeveloperScreen,
});

AboutDeveloperStack.navigationOptions = {
  tabBarLabel: 'About developer',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

export default createBottomTabNavigator({
  GreetingStack,
  AboutDeveloperStack,
});
