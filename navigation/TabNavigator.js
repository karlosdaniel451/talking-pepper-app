import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import PlantListScreen from '../screens/PlantListScreen';
import AlertListScreen from '../screens/AlertListScreen';
import SettingScreen from '../screens/SettingScreen';

const TabNavigator = createBottomTabNavigator(
  {
    Plantas: PlantListScreen,
    Notícias: AlertListScreen,
    Configurações: SettingScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = MaterialIcons;
        let iconName;

        switch (routeName) {
          case 'Plantas':
            iconName = 'local-florist';
            break;
          case 'Notícias':
            iconName = 'home';
            break;
          case 'Configurações':
            iconName = 'settings';
            break;
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={31} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      lazy: true,
      showIcon: true,
      showLabel: false,
      activeTintColor: '#E6E6E6',
      inactiveTintColor: '#E6E6E6',
      activeBackgroundColor: '#03B14B',
      inactiveBackgroundColor: '#00CC55'
    }
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1F1F28'
  },
  containerText: {
    color: '#DDD'
    //fontSize: '20',
  }
});

export default createAppContainer(TabNavigator);
