import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Button,
  Alert
} from "react-native";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/bgimage.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={[styles.container, { justifyContent: "flex-end" }]}>
          <View style={styles.formcontainer}>
            <Text style={styles.title}>Увійти</Text>
            <TextInput
              style={[styles.input, { marginTop: 32 }]}
              placeholder="Адреса електронної пошти"
              autoComplete="off"
              inputMode="email"
              placeholderTextColor={"#BDBDBD"}
            />
            <TextInput
              style={[styles.input, { marginTop: 16 }]}
              placeholder="Пароль"
              autoComplete="off"
              placeholderTextColor={"#BDBDBD"}
              inputMode="password"
            />
            <Button
              title="Увійти"
              onPress={() => Alert.alert("Simple Button pressed")}
              style={styles.btn}
            />
          </View>
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  formcontainer: {
    height: "50%",
    backgroundColor: "#FFFFFF",
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
  },
  title: {
    textAlign: "center",
    marginTop: 32,
    fontSize: 30,
  },
  input: {
    width: "90%",
    height: 50,
    backgroundColor: "#F6F6F6",
    marginLeft: "5%",
    padding: 16,
    borderRadius: 8,
  },
  btn: {
    width: "90%",
    height: 51,
    borderRadius: 100,
    marginTop:43,
  },
});
