import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
 import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherGroup = {
  0: {
    icon: 'weather-sunny'
  },
  2: {
    icon: 'weather-lightning'
  },
  3: {
    icon: 'weather-rainy'
  },
  5: {
    icon: 'weather-pouring'
  },
  6: {
    icon: 'weather-snowy'
  },
  7: {
    icon: 'weather-fog'
  },
  8: {
    icon: 'weather-cloudy'
  }
}
function Weather ({data}) {
  console.log(data);
  const id = data.weather[0].id;
  var num = parseInt(id/100);
  const weather = ((id === 800) ? weatherGroup[0] : weatherGroup[num]);
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>(현재 위치)</Text>
      <Text style={styles.text2}>강남구 대치동</Text>
      <Text style={styles.text3}>{data.weather[0].main}</Text>
      <MaterialCommunityIcons size={150} name={weather.icon}/>
      <Text style={styles.text4}>{Math.ceil(data.main.temp-273.15)}도</Text>
      <Text style={styles.text5}>어제보다 6도나 높아요</Text>
      <Text style={styles.text6}>최고 {Math.ceil(data.main.temp_max-273.15)}도 / 최저 {Math.ceil(data.main.temp_min-273.15)}도</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text1: {
    fontSize: 20,
  },
  text2: {
    fontSize: 40, margin:10,
  },
  text3: {
    fontSize: 15,
  },
  text4: {
    fontSize: 70, marginTop:20,
  },
  text5: {
    fontSize: 30,
  },
  text6: {
    fontSize: 15,
    margin: 5,
  },
});

export default Weather;