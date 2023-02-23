import { NavigationContainer } from '@react-navigation/native';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import WeatherScreen from './components/WeatherScreen';
import ForecastScreen from './components/ForecastScreen';
import Settings from './components/Settings';

const Tab = createMaterialBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="WEATHER NOW"
        activeColor="white"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: 'lightblue' }}>
        <Tab.Screen
          name="WEATHER NOW"
          component={WeatherScreen}
          options={{
            tabBarLabel: 'weather now',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="weather-sunny" color={color} size={26} />
            ),
          }}></Tab.Screen>
        <Tab.Screen
          name="FORECAST"
          component={ForecastScreen}
          options={{
            tabBarLabel: 'forecast',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="cloud-search-outline" color={color} size={26} />
            ),
          }}></Tab.Screen>
        <Tab.Screen
          name="SETTINGS"
          component={Settings}
          options={{
            tabBarLabel: 'settings',
            tabBarIcon: ({ color }) => (
              <Ionicons name="settings-outline" color={color} size={24} /> // cloud, home, account, bell
            ),
          }}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
