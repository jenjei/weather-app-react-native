import { View, Text, StyleSheet } from 'react-native';
import Header from './Header';

const Settings = () => {
  return (
    <View>
      <View style={styles.headerStyle}>
        <Header city={'settings'}></Header>
      </View>
      <Text>settings here</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: 'lightblue',
    height: '10%',
  },
});

export default Settings;
