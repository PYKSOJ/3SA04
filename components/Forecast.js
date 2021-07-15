import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Forecast(props) {
  return (
    <View>
      <Text>{props.main}</Text>
      <Text>{props.description}</Text>
      <Text>{props.temp}</Text>
      <Text>°C</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title:{
      margin:10,
      fontSize:24,
      textAlign:'center',
      color:'#fff',
  },
  content:{
      margin:10,
      fontSize:18,
      textAlign:'center',

      color:'#fff',
  }
});
