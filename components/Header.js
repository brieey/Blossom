import React from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import Settings from './Settings';


const Header = (navigation) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.appName}>Blossom</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
            <Icon name="settings" color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'left',
    backgroundColor: '#68778c',
    paddingHorizontal: 16,
    elevation: 4, // Adds shadow on Android
    shadowColor: '#000', // Adds shadow on iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  appName: {
    fontSize: 20,
    fontWeight: 'bold',
    font: 'Roboto',
    color: 'white',
  },
    iconContainer: {
        position: 'absolute',
        right: 16,
    },
});

export default Header;
