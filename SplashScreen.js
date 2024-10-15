import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const SplashScreen = ({ onFinish ,studentName }) => {
 useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); // Call the function to signal that loading is done
    }, 4000); // Show for 4 seconds

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [onFinish]);

    return (
      <View style={styles.splashContainer}>
        <Image source={require('./assets/tweekcodelogo.png')} style={styles.logo} />
        <Text style={styles.splashText}>Welcome to Color Mixer!</Text>
         <View style={styles.footerText}>
        <Text>Powered by TweekCode</Text>
      </View>
      </View>
    );
  
};
const styles = StyleSheet.create({
splashContainer: {
    flex: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eeeee4', // Your branded color
  },
  logo: {
    width: 200,
    height: 150,
  },
  splashText: {
    fontSize: 24,
    color: '#000000',
     marginTop: 20,
  },
    footerText: {
    color: '#000000',
    fontSize: 14,
  },
});
export default SplashScreen;