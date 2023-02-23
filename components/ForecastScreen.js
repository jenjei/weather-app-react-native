import { View, Text, Pressable, StyleSheet, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import Header from './Header';
import WeatherListItem from './WeatherListItem';

const ForecastScreen = () => {
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
        const response = fetch(
          'openweathermap.org'
        );
        const toJson = response.json();
        setForecast(toJson);
  }, []);

  const chooseIcon = (description) => {
    console.log(icon)
    if (description === 'few clouds') {

    } else if (description === 'clear sky') {
        return '../assets/sunny.png';
    } else if (description === 'scattered clouds') {

    } else if (description === 'broken clouds') {

    } else if (description === 'shower rain') {

    } else if (description === 'rain') {

    } else if (description === 'thunderstorm') {

    } else if (description === 'snow') {

    } else if (description === 'mist') {

    } else if (description === '') {

    } else {
        return '../assets/unknown.png';
    }
}


  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <View style={styles.headerStyle}>
        <Header city={forecast.city?.name}></Header>
      </View>

      <View style={styles.listContainer}>
        <FlatList
          style={styles.forecastList}
          data={forecast.list}
          renderItem={({ item }) => (
            <WeatherListItem
              time={item.dt_txt}
              description={item.weather[0].description}
              temperature={item.main.temp}
              icon={chooseIcon(item.weather[0].description)}
            />
          )}></FlatList>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  forecastList: {
    backgroundColor: 'white',
    margin: '10%',
  },
  headerStyle: {
    backgroundColor: 'lightblue',
    height: '8%',
  },
  listContainer: {
    flex: '50%',
    backgroundColor: 'pink',
    alignItems: 'center',
  },
});

export default ForecastScreen;
