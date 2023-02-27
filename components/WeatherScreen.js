import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import axios from 'axios';
import WeatherInfo from './WeatherInfo';
import Header from './Header';

const WeatherScreen = () => {
  const [weatherData, setWeatherData] = useState(
    {"description": 'Rainy day',
    "name": 'London',
    "temperature": 10,
    "weather": 'Rain',
    "wind": 5}
  );

  useEffect(() => {
    setTimeout(() => {
      console.log('renders every 1 sec')
      axios.get(
        'https://api.openweathermap.org/data/2.5/weather?q=Tampere&appid={apikey}'
      ).then(response => {
        console.log(response.data)
        setWeatherData(
          {"description": response.data.weather[0].description,
        "name": response.data.name,
        "temperature": response.data.main.temp.toFixed(),
        "weather": response.data.weather[0].main,
        "wind": response.data.wind.speed }
        )
      }).then(console.log('updated weather data', weatherData));
    }, 1000);
  }, []);

  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <View style={styles.headerStyle}>
        <Header city={'current weather'} />
      </View>

      <View style={styles.weatherInfoStyle}>
        <WeatherInfo
        city={weatherData.name}
        description={weatherData.description}
        temperature={weatherData.temperature}
        weather={weatherData.weather}
        wind={weatherData.wind} />
      </View>

      <View style={styles.buttonContainer}>
        <Pressable style={styles.button}  >
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
    height: '12%',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'steelblue',
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
    backgroundColor: 'aliceblue',
  }
});

export default WeatherScreen;
