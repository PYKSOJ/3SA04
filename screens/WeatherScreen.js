import React from "react";
import Weather from "../components/Weather";
import { View, StatusBar } from "react-native";

export default function WeatherScreen({ route }) {
  return (
    <View>
      <Weather zipCode={route.params.zipCode} />
      <StatusBar style="auto" />
    </View>
  );
}
