import React from 'react';
import { StyleSheet, Text, View,Alert } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialIcons';
import Iconss from 'react-native-vector-icons/MaterialCommunityIcons';


export default function App() {

    const onMenu = () => {
        Alert.alert("Menu");
    }

    const onShare = () => {
        Alert.alert("Share");
    }

    const onPlus = () => {
        Alert.alert("Add");
    }
        
    return (
        <View style={styles.header}>
            <View style={{paddingLeft:10, flex:2}}>
                <Icon name="ios-menu" size={30} color="black" onPress={onMenu}/>
            </View>
            <View style={{flex:2,justifyContent:'flex-end', flexDirection:'row'}}>
                <Icons name="share" size={25} color="black" style={{paddingTop:3}} onPress={onShare}/>
                <Iconss name="plus" size={30} color="black" style={{paddingRight:20, paddingLeft:20}} onPress={onPlus}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    height:50,
    flexDirection:'row',
  },
});