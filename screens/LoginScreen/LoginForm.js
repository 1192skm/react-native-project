import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

export function LoginForm() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePassword = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const onLogin = () => {
    Alert.alert("Credentials", `Login:${userEmail} Password:${password} `);
    setUserEmail("");
    setPassword("");
  }

  return (
    <View style={[styles.container, { justifyContent: "flex-end" }]}>
      <View style={styles.formcontainer}>
        <Text style={styles.title}>Увійти</Text>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding": "height"}>
          <TextInput
            style={[styles.input, { marginTop: 32 }]}
            placeholder="Адреса електронної пошти"
            autoComplete="off"
            inputMode="email"
            placeholderTextColor={"#BDBDBD"}
            onChangeText={setUserEmail}
            value={userEmail}
          />
          <View style={[styles.input, { marginTop: 16 }]}>
            <TextInput
              placeholder="Пароль"
              autoComplete="off"
              placeholderTextColor={"#BDBDBD"}
              secureTextEntry={isPasswordVisible ? false : true}
              onChangeText={setPassword}
              value={password}
            />
            <TouchableOpacity style={styles.btnShow} onPress={togglePassword}>
              <Text
                style={{
                  color: "#1B4371",
                }}
              >
                {isPasswordVisible ? "Сховати" : "Показати"}
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.btn}
            onPress={onLogin}
          >
            <Text style={{ color: "#FFFFFF" }}>Увійти</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>

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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formcontainer: {
    height: "55%",
    backgroundColor: "#FFFFFF",
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
  },
  title: {
    textAlign: "center",
    marginTop: 32,
    fontSize: 30,
    fontFamily: "Roboto-Medium",
  },
  input: {
    width: "90%",
    height: 50,
    backgroundColor: "#F6F6F6",
    marginLeft: "5%",
    padding: 16,
    borderRadius: 8,
    fontFamily: "Roboto-Regular",
  },
  btn: {
    width: "90%",
    height: 51,
    borderRadius: 100,
    marginTop: 43,
    marginLeft: "5%",
    alignItems: "center",
    backgroundColor: "#FF6C00",
    color: "#FFFFFF",
    justifyContent: "center",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
  },
  textContainer: {
    flex: 1,
    flexDirection: "row",
    marginTop: 16,
    width: "90%",
    marginLeft: "5%",
    justifyContent: "center",
    fontFamily: "Roboto-Regular",
  },
  btnShow: {
    position: "absolute",
    top: 16,
    right: 16,
    fontSize: 16,
    fontFamily: "Roboto-Regular",
  },
});
