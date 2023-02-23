import { View, Text, StyleSheet } from 'react-native';

const Header = ({city}) => {
  return (
    <View style={styles.headerStyle}>
      <Text style={styles.cityTextStyle}>{city}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cityTextStyle: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center'
  },
  headerStyle: {
    backgroundColor: 'lightblue'
  }
})

export default Header
