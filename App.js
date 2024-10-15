import { View, Text, StyleSheet ,Image} from 'react-native';
import Slider from '@react-native-community/slider';
import React, { useState, useEffect } from 'react';
import SplashScreen from './SplashScreen';
export default function  App() {
//Add a new variable for the red color here
const [red, setRed] = useState(128);
const [green, setGreen] = useState(128); 
const [blue, setBlue] = useState(128);
const [studentName, setStudentName] = useState("Myron Murph");
const [isReady, setIsReady] = useState(false);


  const handleFinishSplash = () => {
    setIsReady(true);
  };

  if (!isReady) {
    return <SplashScreen onFinish={handleFinishSplash} />; // Show the splash screen
  }


// Add Image Code Here
const getImageSource = () => {
return require('./assets/car.png');
};



  
//Add Different Sliders Here
return( 
 <View style={styles.container}> 
  <Text style={styles.title}>Color Mixer</Text>
{/* Display Image Below */}
 <Image
source={getImageSource()}
style={[
styles.image,
{
tintColor: `rgb(${red}, ${green}, ${blue})`,},
]}
resizeMode="contain"
/> 




{/* Red Slider */}
<SliderView value={red} onValueChange={setRed} colorName="Red" /> 
{/* Add Green Slider Below */}
<SliderView value={green} onValueChange={setGreen} colorName="Green" />
 

{/* Blue Slider */} 
<SliderView value={blue} onValueChange={setBlue} colorName="Blue" />
<View style={styles.footerText}>
 <Text style={styles.footerText}>App created by {studentName} on {new Date().toLocaleDateString()}</Text>
</View>
</View>
);









}
//Add Slider Function Here
function SliderView({ value, onValueChange, colorName }) {
   return (
    <View style={styles.sliderContainer}>
      <Text style={{ color: colorName.toLowerCase() }}>
        {colorName}: {value}
      </Text>
      <Slider
        style={{ width: 200, height: 40 }}
        minimumValue={0}
        maximumValue={255}
        value={value}
        onValueChange={(val) => onValueChange(Math.floor(val))}
        minimumTrackTintColor={colorName.toLowerCase()}
      />
    </View>
  );
}








const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7b868',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
    colorPreview: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  sliderContainer: {
    marginVertical: 10,
    alignItems: 'center',
  },
    image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },

});

