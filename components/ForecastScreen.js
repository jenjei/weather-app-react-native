import { View, Text, Pressable, StyleSheet, FlatList } from 'react-native';
import { useState } from 'react';
import * as Location from 'expo-location';
import axios from 'axios';
import Header from './Header';
import WeatherListItem from './WeatherListItem';

const ForecastScreen = () => {
  const [forecast, setForecast] = useState([]);
  const [locationGPS, setLocationGPS] = useState({ lat: 0, lon: 0 });
  const apikey = 'your api key here';
  let city = 'Tampere';
  
  const checkAndRequestPermission = async () => {
    if (Platform.OS === 'android' && !Device.isDevice) {
      setErrorMsg(
        'Oops, this will not work on Android. Try it on your iOS device!'
      );
      return;
    }

    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to GPS location was denied :( ');
      return;
    }

    setTimeout(async() => {
      let location = await Location.getCurrentPositionAsync({});
      console.log('row 30', location);

      let gps = JSON.stringify(location);
      console.log(gps);

      setLocationGPS({
      lat: location.coords.latitude,
      lon: location.coords.longitude,
    });
    }, 1000);
    console.log('lat: ', locationGPS.lat, 'lon: ', locationGPS.lon);
  };

  const getForecastData = () => {
    checkAndRequestPermission();

    setTimeout(() => {
      console.log('forecast renders every 2 sec')
      axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${locationGPS.lat}&lon=${locationGPS.lon}&appid=${apikey}`
      ).then(response => {
        console.log(response.data.city.name)
        setForecast(response.data)
        console.log('updated forecast data', forecast);
      });
    }, 2000);

    setTimeout(() => {
      console.log(forecast)
      city=forecast.city
    }, 2000);
  };

  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <View style={styles.headerStyle}>
        <Header city={'weather forecast'}></Header>
      </View>
      <View style={styles.iconStyle}>
        <Text style={styles.cityTextStyle}>{city? city : 'Tampere' }</Text>
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
              icon={item.weather[0].main}
            />
          )}></FlatList>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={getForecastData()}>
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
