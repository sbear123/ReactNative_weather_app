import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Header';
import Weather from './Weather';
import PropTypes from 'prop-types';


export default function Show({temp}) {
  return (
    <View style={styles.container}>
      <Header/>
      <Weather data={data}/>
      <StatusBar style="auto" />
    </View>
  );
}

Show.PropTypes = {
    temp: PropTypes.number.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});