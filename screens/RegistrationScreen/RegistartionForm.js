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

export function RegistrationForm() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePassword = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const onRegistrate = () => {
    Alert.alert("Credentials",
    `Name: ${userName}
    Login:${userEmail}
    Password:${password} `
    );
    setUserName("");
    setUserEmail("");
    setPassword("");
  };

  return (
    <View style={[styles.container, { justifyContent: "flex-end" }]}>
      <View style={styles.formcontainer}>
        <View style={styles.photoWrapper}>
          <TouchableOpacity style={styles.addPhotoButton}>
            <Text style={{ color: "#FF6C00" }}>+</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Реєстрація</Text>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <TextInput
            style={[styles.input, { marginTop: 32 }]}
            placeholder="Логін"
            autoComplete="off"
            inputMode="text"
            placeholderTextColor={"#BDBDBD"}
            onChangeText={setUserName}
            value={userName}
          />
          <TextInput
            style={[styles.input, { marginTop: 16 }]}
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
          <TouchableOpacity style={styles.btn} onPress={onRegistrate}>
            <Text style={{ color: "#FFFFFF" }}>Зареєструватися</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
        <View style={styles.textContainer}>
          <Text
            style={{
              color: "#1B4371",
            }}
          >
            Вже є акаунт?
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
              Увійти
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
    height: "70%",
    backgroundColor: "#FFFFFF",
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
  },
  title: {
    textAlign: "center",
    marginTop: 92,
    fontSize: 30,
    fontFamily: "Roboto-Medium",
  },
  input: {
    fontFamily: "Roboto-Regular",
    width: "90%",
    height: 50,
    backgroundColor: "#F6F6F6",
    marginLeft: "5%",
    padding: 16,
    borderRadius: 8,
  },
  btn: {
    fontFamily: "Roboto-Regular",
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
  photoWrapper: {
    width: 120,
    height: 120,
    position: "absolute",
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    top: -60,
    left: "50%",
    transform: [{ translateX: -50 }],
  },
  addPhotoButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 25,
    height: 25,
    borderColor: "#FF6C00",
    borderRadius: 12.5,
    borderWidth: 1,
    position: "absolute",
    top: 81,
    right: -12.5,
  },
});
