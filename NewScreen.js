import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import Header from './Header';
import News from './News';

class NewScreen extends React.Component {
    render() {
      return (
        <SafeAreaView style={styles.container}>
          {/* <Header/> */}
          <News />
        </SafeAreaView>
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