import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
export default function Forecast(props) {
  const image = "http://openweathermap.org/img/wn/" + props.icon + ".png";
  return (
    <View>
      <Text style={styles.titleText}>ประเทศ {props.country} </Text>
      <Text style={styles.titleText}>จังหวัด {props.name}</Text>
      <Text style={styles.titleText}>Cloud Detial :{props.description}</Text>
      <Image source={{ url: image }} style={styles.saaa} />
      <Text style={styles.titleText}>Temperater : {props.temp} °C</Text>
      <Text style={styles.titleText}>
        Max Temperater : {props.tempmax} °C
      </Text>
      <Text style={styles.titleText}>
        Min Temperater : {props.tempmin} °C
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  titleText: {
    fontSize: 25,
    color: "white",
  },
  saaa: {
    width: 100,
    height: 50,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
