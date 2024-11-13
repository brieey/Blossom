import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import HomePage from './components/Homepage';



const App = () => {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashVisible(false); // Hide splash screen after 5 seconds
    }, 5000); // Display splash screen for 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      {isSplashVisible ? ( // Display splash screen if isSplashVisible is true
        <View style={styles.splashContainer}>
          <Image source={require('./assets/landingbg.png')} style={styles.splashImage} />
        </View>
      ) : (
        <HomePage/>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  splashImage: {
    width: '100%',
    height: '100%',
  }
});

export default App;
