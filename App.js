import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import Constants from "expo-constants";

import ZipCodeScreen from "./screens/ZipCodeScreen";
import WeatherScreen from "./screens/WeatherScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={ZipCodeScreen}
          options={{
            title: "Select Location",
            headerStyle: {
              backgroundColor: "#fe0000",
            },
            headerTintColor: "#FE0",
            headerTitleStyle: {
              alignItems: "center",
              fontWeight: "bold",
              alignSelf: "center",
            },
          }}
        />
        <Stack.Screen name="Weather" component={WeatherScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
  },
});
