import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, SafeAreaView, Alert } from 'react-native';
import * as Location from 'expo-location';

class NewScreen extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Text style={{fontSize:30}}>News</Text>
        </View>
      )
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

  export default NewScreen;