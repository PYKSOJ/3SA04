import React, { useState } from "react";
import { ImageBackground, Text, StyleSheet, View } from "react-native";
import Forecast from "./Forecast";

export default function Weather(props) {
  const [forecastInfo, setForcecastInfo] = useState({
    main: "-",
    description: "-",
    temp: 0,
  });

  return (
    <View>
      <ImageBackground source={require("../bg.jpg")} style={styles.backdrop}>
        <Text>Zip Code</Text>
        <Text>{props.zipCode}</Text>
        <Forecast {...forecastInfo} />
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  backdrop: {

      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      
  },
  container: {
      padding: 15,
      width:'100%',
      height:'100%',
      alignItems:'center',
      backgroundColor:'#000',
      opacity: 0.5,
      
  },
  text:{
      fontSize:24,
      color:'#fff',
  }
});