import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, SafeAreaView, Alert } from 'react-native';
import * as Location from 'expo-location';
import Weather from './Weather';
import Header from './Header';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icons from 'react-native-vector-icons/Fontisto';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const API_KEY = '7fa9621268c0f7a70ee4a6b25419a876';


class WeatherScreen extends React.Component {

  state = {
    loading:true,
    weather:null,
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        this._getWeather(position.coords);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  _getWeather = ({latitude, longitude}) => {
    console.log(latitude, longitude);
    var api = 'https://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&APPID='+API_KEY;
    console.log(api);
    fetch(api)
      .then(response => response.json())
      .then(json =>{
        console.log(json);

        this.setState({
          weather: json,
          loading:false
        })
      });
  }
  render(){
    return (
      <SafeAreaView style={styles.container}>
        <Header/>
        {
          this.state.loading ? <Text>Weather</Text> : <Weather data={this.state.weather} />
        }
      </SafeAreaView>
    );
  }
}

class NewScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header/>
        <Text style={{fontSize:30}}>News</Text>
      </SafeAreaView>
    )
  }
}

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