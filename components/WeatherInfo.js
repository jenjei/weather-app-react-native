import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WeatherInfo = ({ description, temperature, wind, icon}) => {
  
  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <View style={styles.iconStyle}>{description}</View>
      
      <View style={styles.rowColumnStyle}>
        <View style={styles.firstContainer}></View>

        <View style={styles.secondContainer}>
          <Text style={styles.tempTextStyle}>{temperature}C</Text>
          <Text style={styles.windTextStyle}>{wind} m/s</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconStyle: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center'
  },
  rowColumnStyle: {
    flex: 4,
    flexDirection: 'row'
  },
  windTextStyle: {
    flex: 1,
    fontSize: 25,
    backgroundColor: 'yellow'
  },
  tempTextStyle: {
    flex: 1,
    fontSize: 25,
    backgroundColor: 'orange'
  },
  firstContainer: {
    flex: 1,
    backgroundColor: 'lightgreen'
  },
  secondContainer: {
    flex: 1,
    backgroundColor: 'orange'
  }
})

export default WeatherInfo;
