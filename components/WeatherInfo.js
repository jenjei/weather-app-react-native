import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { weatherConditions } from './utils/WeatherConditions';

const WeatherInfo = ({ description, temperature, wind, city, weather}) => {
  

  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <View style={styles.iconStyle}>
        <Text style={styles.cityTextStyle}>{city}</Text>
      </View>

      <View style={styles.rowColumnStyle}>
        <View style={styles.iconContainer}>
        <MaterialCommunityIcons
          size={72}
          name={weatherConditions[weather].icon}
          color={'#fff'}
        />
        </View>

        <View style={styles.secondContainer}>
          <Text style={styles.tempTextStyle}>{temperature}°C</Text>
          <Text style={styles.windTextStyle}>{wind} m/s</Text>
        </View>
      </View>

      <View style={styles.iconStyle}>
        <Text style={styles.descriptionText}>{description}</Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 55,
  },
  iconStyle: {
    flex: 1,
    backgroundColor: 'snow',
    alignItems: 'center',
    justifyContent: 'center'
  },
  rowColumnStyle: {
    flex: 4,
    flexDirection: 'row'
  },
  windTextStyle: {
    flex: 1,
    padding: 50,
    fontSize: 25,
    backgroundColor: 'powderblue'
  },
  tempTextStyle: {
    flex: 1,
    padding: 50,
    fontSize: 25,
    backgroundColor: 'lightcyan'
  },
  descriptionText: {
    fontSize: 20
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightskyblue'
  },
  secondContainer: {
    flex: 1,
    backgroundColor: 'darkturquoise'
  },
  cityTextStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center'
  },
})

export default WeatherInfo;
