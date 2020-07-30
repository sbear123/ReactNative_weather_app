import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, Alert } from 'react-native';
import * as Location from 'expo-location';
import Weather from './Weather';
import Header from './Header';

const API_KEY = '7fa9621268c0f7a70ee4a6b25419a876';

export default class App extends React.Component {

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});


