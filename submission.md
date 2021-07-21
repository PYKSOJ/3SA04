# 3SA04

- ตอนที่ 1 เครื่องมือที่จำเป็น <br />
  - Chocolatey (for Windows), Brew (for 
OSX) ใช้สำหรับติดตั้ง package ที่จำเป็นอื่น ๆ ได้สะดวกมากยิ่งขึ้น
  - Node.JS เป็นตัว compile โค้ดที่เราเขียนขึ้น
  - Yarn คือตัวจัดการ package ของ Javascript
  - Git ใช้สำหรับจัดการ Version ของ Code ที่เขียนขึ้น เหมาะสมสำหรับบริการจัดการโปรแกรมที่ร่วมกันเขียนได้คน
  - expo CLI ใช้ในการสร้างและตอดตั้ง package module ทั้งหมดที่ React ต้องการใช้
  - Visual Studio Code ใช้สำหรับเป็น IDE ในการเขียนโปรแกรม
  - Android Studio ใช้ในการจำลองระบบปฏิบัติการ Android<br/>
  เมื่อติดตั้ง Chocolatey ใช้คำสั่ง
```
choco install nodejs
choco install yarn
choco install git
```
   ติดติดตั้ง create-react-app CLI  ด้วย Yarn 
```
yarn global add expo-cli
```
- ตอนที่ 2 Hello world<br />
สร้างโปรเจคด้วยคำสั่ง
```
expo init wt-app
cd wt-app
``` 
สั่งให้โปรเจคทำงานด้วยคำสั่ง 
```
yarn start
```
   #### Source Code
   แก้ไขไฟล์ App.js 
```
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default function App() {
 const doIt = () => {
 console.log("Hello from console")
 }
 return (
 <View style={styles.container}>
 <Text onPress={doIt}>Hello world</Text>
 <StatusBar style="auto" />
 </View>
 );
}
const styles = StyleSheet.create({
 container: {
 flex: 1,
 backgroundColor: '#fff',
 alignItems: 'center',
 justifyContent: 'center',
 },
});
```
แล้วดูผลลัพธ์ใย สมาร์ทโฟนหรือ Android Emulator
### Passing Props
สร้างโฟลเดอร์components ในโปรเจ็ค แล้วสร้างไฟล์ Weather.js
```
export default function Weather(props) { 
 return (
 <Text>{props.zipCode}</Text>
 );
}
```
แก้ไขไฟล์ App.js
```
<View style={styles.container}>
 <Weather zipCode="90110"/>
 <StatusBar style="auto" />
 </View>
```
### Components and Image Background
สร้างไฟล์ชื่อ Forecast.js ในโฟลเดอร์ components 
```
export default function Forecast(props) {
 return (
 <View >
 <Text}>{props.main}</Text>
 <Text>{props.description}</Text>
 <View>
 <Text>{props.temp}</Text>
 <Text>°C</Text>
 </View>
 </View>
 );
}
```
แก้ไขไฟล์ Weather.js เพื่อใส่รูปพื้นหลัง
```
export default function Weather(props) {
 const [forecastInfo, setForecastInfo] = useState({
 main: '-',
 description: '-',
 temp: 0
 }) 
 return (
     <View>
 <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
 <Text>Zip Code</Text>
 <Text>{props.zipCode}</Text>
 <Forecast {...forecastInfo} />
 </ImageBackground>
 </View>
 );
}
const styles = StyleSheet.create({
 backdrop: {
 alignItems: 'center',
 width: '100%',
 height: '100%'
 },
});
```
- ตอนที่ 3 Flex Box<br />
  การจัด Layout บน React Native จะใช้Flex Box ในการจัดการ
- ตอนที่ 4 Connect<br />
  เพิ่ม useEffect ลงไปในคอมโพเนนต์ Weather 
```
useEffect(() => {
 console.log(`fetching data with zipCode = ${props.zipCode}`)
 if (props.zipCode) {
 fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=fd68c0f2039c5a25f666a9ff374bc93e`)
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
```

- ตอนที่ 5 Router<br />
  ติดตั้งไลบรารี่เพิ่มเติม 
```
expo install react-native-gesture-handler react-native-reanimated reactnative-screens react-native-safe-area-context @react-nativecommunity/masked-view

yarn add @react-navigation/stack @react-navigation/native

```
เพิ่มคอมโพเนนต์ ZipCodeScreen
```
const availableZipItems = [
 { place: 'Hatyai', code: '90110' },
 { place: 'Trang', code: '92000' },
 { place: 'Chiangmai', code: '50000' },
 { place: 'Khonkaen', code: '40000' },
 { place: 'Chonburi', code: '20000' },
]
const ZipItem = ({place, code, navigation}) => (
 <View>
 <Text>{place}</Text>
 <Text>{code}</Text>
 </View>
 )
const _keyExtractor = item => item.code
export default function ZipCodeScreen(){
 const navigation = useNavigation()
 return (
 <View>
 <FlatList
 data={availableZipItems}
 keyExtractor={_keyExtractor}
 renderItem={({item}) => <ZipItem {...item} navigation={navigation}/>}
 />
 <StatusBar style="auto" />
 </View>
 );

}
```
ปรึบปรุง App.js
```
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
export default function App() {
 return ( 
 <NavigationContainer>
 <Stack.Navigator>
 <Stack.Screen name="Home" component={ZipCodeScreen} />
 </Stack.Navigator>
 </NavigationContainer> 
 );
}
```
### Navigation & Route Paramete
เพิ่มคอมโพเนนต์ WeatherScreen
```
export default function WeatherScreen({route}) { 
 return (
 <View>
 <Weather zipCode={route.params.zipCode} />
 <StatusBar style="auto" />
 </View>
 );
}
```
เพิ่ม Screen ลงใน App.js
```
<Stack.Navigator>
 <Stack.Screen name="Home" component={ZipCodeScreen} />
 <Stack.Screen name="Weather" component={WeatherScreen} />
 </Stack.Navigator>
```
ปรับ ZipItem ในไฟล์ ZipCodeScreen.js
```
const ZipItem = ({place, code, navigation}) => (
 <TouchableHighlight onPress={() => navigation.navigate('Weather', { zipCode: code})}>
 <View>
 <Text>{place}</Text>
 <Text >{code}</Text>
 </View>
 </TouchableHighlight>
 )
```