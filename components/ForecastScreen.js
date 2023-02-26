import { View, Text, Pressable, StyleSheet, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import Header from './Header';
import WeatherListItem from './WeatherListItem';

const ForecastScreen = () => {
  const [forecast, setForecast] = useState([]);

  const getForecastData = () => {
    const response = fetch(
      'openweathermap.org'
    );
    const toJson = response.json();
    setForecast(toJson);
    console.log(forecast);
};

/* THIS USEEFFECT FETCHES 10K TIMES IN A MINUTE FOR SOME REASON...?
  useEffect(() => {
        const response = fetch(
          'openweathermap.org'
        );
        const toJson = response.json();
        setForecast(toJson);
  }, []); */

  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <View style={styles.headerStyle}>
        <Header city={'weather forecast'}></Header>
      </View>
      <View style={styles.iconStyle}>
        <Text style={styles.cityTextStyle}>London</Text>
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
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={getForecastData}>
          <Text style={styles.buttonText}>show forecast in your location</Text>
        </Pressable>
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
    height: '12%',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  listContainer: {
    flex: '70%',
    backgroundColor: 'aliceblue',
    alignItems: 'center',
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
    flex: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightskyblue',
  },
  cityTextStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center'
  },
  iconStyle: {
    height: '12%',
    backgroundColor: 'lightcyan',
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default ForecastScreen;
