import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
// import RegistrationScreen from "./screens/RegistrationScreen/RegistrationScreen";
import { useFonts } from "expo-font";

export default function App() {
   const [fontsLoaded] = useFonts({
     "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
     "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
   });
   if (!fontsLoaded) {
     return null;
   }
  return (
    <View style={styles.container}>
      {/* <RegistrationScreen /> */}
      <LoginScreen/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
