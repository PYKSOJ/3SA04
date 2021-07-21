import React from "react";
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
const availableZipItems = [
  { place: "Hatyai", code: "90110" },
  { place: "Trang", code: "92000" },
  { place: "Chiangmai", code: "50000" },
  { place: "Khonkaen", code: "40000" },
  { place: "Chonburi", code: "20000" },
  { place: "Suratthani", code: "84000" },
];
const ZipItem = ({ place, code, navigation }) => (
  <TouchableHighlight
    onPress={() => {
      navigation.navigate("Weather", { zipCode: code });
    }}
  >
    <View style={styles.ZipItem}>
      <ImageBackground source={require("../bg.jpg")} style={styles.backdrop}>
        <Text>{place}</Text>
        <Text>{code}</Text>
      </ImageBackground>
    </View>
  </TouchableHighlight>
);

export default function ZipCodeScreen() {
  const navigation = useNavigation();
  return (
    <FlatList
      data={availableZipItems}
      keyExtractor={(item) => item.code}
      renderItem={({ item }) => <ZipItem {...item} navigation={navigation} />}
    />
  );
}
const styles = StyleSheet.create({
  zipItem: {
    flex: 1,
    flexDirection: 'row'
  },
  zipPlace: {
    flex: 1,
  },
  zipCode: {
    flex: 1,
  },
});
