import React, { useState, useEffect } from "react";
import { Text, ImageBackground, StyleSheet } from "react-native";
import Forecast from "./Forecast";

export default function Weather(props) {
  const [forecastInfo, setForecastInfo] = useState({
    main: "-",
    description: "-",
    temp: 0,
    country: "-",
    name: "-",
    tempmax: 0,
    tempmin: 0,
    icon: "-",
  });
  useEffect(() => {
    console.log(`fetching data with zipCode = ${props.zipCode}`);
    if (props.zipCode) {
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=fd68c0f2039c5a25f666a9ff374bc93e`
      )
        .then((response) => response.json())
        .then((json) => {
          setForecastInfo({
            main: json.weather[0].main,
            description: json.weather[0].description,
            temp: json.main.temp,
            country: json.sys.country,
            name: json.name,
            tempmax: json.main.temp_max,
            tempmin: json.main.temp_min,
            icon: json.weather[0].icon,
          });
        })
        .catch((error) => {
          console.warn(error);
        });
    }
  }, [props.zipCode]);

  return (
    <ImageBackground source={require("../bg.jpg")} style={styles.backdrop}>
      <Text style={styles.titleText}>Zip Code : {props.zipCode}</Text>
      <Forecast {...forecastInfo} />
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  backdrop: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  titleText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
});
