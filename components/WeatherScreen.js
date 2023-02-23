import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import WeatherInfo from './WeatherInfo';
import Header from './Header';

const WeatherScreen = () => {
  const [weatherData, setWeatherData] = useState([]);

  const getWeatherData = () => {
      const response = fetch(
        'openweathermap.org'
      );
      const toJson = response.json();
      setWeatherData(toJson);
      console.log(weatherData);
  };

  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <View style={styles.headerStyle}>
        <Header city={weatherData.name} />
      </View>

      <View style={styles.weatherInfoStyle}>
        <WeatherInfo />
      </View>

      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={getWeatherData}>
          <Text style={styles.buttonText}>show weather in your location</Text>
        </Pressable>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  weatherInfoStyle: {
    flex: 3,
  },
  headerStyle: {
    backgroundColor: 'lightblue',
    height: '10%',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  buttonContainer: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
  },
});

export default WeatherScreen;
