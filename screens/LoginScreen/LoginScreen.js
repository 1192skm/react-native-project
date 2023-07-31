import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  ImageBackground,
} from "react-native";
import {LoginForm} from "./LoginForm";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/bgimage.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <LoginForm/>
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
});


















 /* <View style={[styles.container,  { justifyContent: "flex-end" }]}>
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
              secureTextEntry={true}
            />
            <TouchableOpacity
              style={styles.btn}
              onPress={() => Alert.alert("Simple Button pressed")}
            >
              <Text style={{ color: "#FFFFFF" }}>Увійти</Text>
            </TouchableOpacity>
            <View style={styles.textContainer}>
              <Text
                style={{
                  color: "#1B4371",
                }}
              >
                Немає акаунту?
              </Text>
              <TouchableOpacity
                onPress={() => Alert.alert("Simple Button pressed")}
              >
                <Text
                  style={{
                    marginLeft: 5,
                    textDecorationLine: "underline",
                    color: "#1B4371",
                  }}
                >
                  Зареєструватися
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View> */