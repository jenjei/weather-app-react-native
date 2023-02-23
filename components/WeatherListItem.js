import { useState } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const WeatherListItem = ({ time, description, temperature, icon }) => {
    const celsius = (temperature - 272.15).toFixed(1)

    return (
        <View style={styles.itemStyle}>
            <Text>{time}</Text>
            <Text>{description}</Text>
            <Text>{celsius}°C</Text>
            <Image source={icon}></Image>
        </View>
    );
};

const styles = StyleSheet.create({
    itemStyle: {
        paddingVertical: 18,
        paddingHorizontal: 22,
        backgroundColor: 'mistyrose'
    },
})

export default WeatherListItem;
