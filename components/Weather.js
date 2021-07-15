import React, { useState, useEffect } from "react";
import { ImageBackground, Text, StyleSheet, View } from "react-native";
import Forecast from "./Forecast";

export default function Weather(props) {
  const [forecastInfo, setForcecastInfo] = useState({
    main: "-",
    description: "-",
    temp: 0,
  });

  useEffect(() => {
    console.log(`fetching data with zipCode = ${props.zipCode}`)
    if (props.zipCode) {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=d75c79fa238313cc4671656d19c60e08`)
            .then((response) => response.json())
            .then((json) => {
                setForecastInfo({
                    main: json.weather[0].main,
                    description: json.weather[0].description,
                    temp: json.main.temp
                });
            })
            .catch((error) => {
                console.warn(error);
            });
    }
}, [props.zipCode])

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