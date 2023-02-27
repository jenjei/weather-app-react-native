import { useState } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { weatherConditions } from './utils/WeatherConditions';


const WeatherListItem = ({ time, description, temperature, icon }) => {
    const celsius = (temperature - 272.15).toFixed(1)

    return (
        <View style={styles.itemStyle}>
            <Text>{time}</Text>
            <Text>{description}</Text>
            <Text>{celsius}°C</Text><MaterialCommunityIcons
          size={40}
          name={weatherConditions[icon].icon}
          color={'#fff'}
        />
        </View>
    );
};

const styles = StyleSheet.create({
    itemStyle: {
        paddingVertical: 18,
        paddingHorizontal: 22,
        backgroundColor: 'lightskyblue'
    },
})

export default WeatherListItem;
