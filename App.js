import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, SafeAreaView, Alert } from 'react-native';
import * as Location from 'expo-location';
import WeatherScreen from './WeatherScreen';
import NewScreen from './NewScreen';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icons from 'react-native-vector-icons/Fontisto';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const TabNavigator = createBottomTabNavigator({
  Weather: {screen:WeatherScreen,},
  New: {screen:NewScreen,},
},
{
  defaultNavigationOptions:({navigation}) => ({
    tabBarIcon: ({horizontal, tintColor}) => {
      const {routeName} = navigation.state;
      let iconName;
      if (routeName === 'Weather') {
        iconName = 'day-sunny';
      } else if (routeName === 'New') {
        iconName = 'hacker-news';
      }
      return (
        <Icons
          name={iconName}
          size={horizontal ? 20 : 25}
          color={tintColor}
        />
      );
    },
  }),
  tabBarOptions: {
    activeTintColor: 'black',
    inactiveTintColor: '#e4e3e3',
    style: {
      backgroundColor: 'white',
    },
  },
},
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export default createAppContainer(TabNavigator);