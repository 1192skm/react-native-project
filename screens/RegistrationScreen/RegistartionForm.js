import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  TouchableOpacity,
} from "react-native";

export function RegistrationForm() {

  return (
        <View style={[styles.container, { justifyContent: "flex-end" }]}>
          <View style={styles.formcontainer}>
            <Text style={styles.title}>Реєстрація</Text>
            <TextInput
              style={[styles.input, { marginTop: 32 }]}
              placeholder="Логін"
              autoComplete="off"
              inputMode="text"
              placeholderTextColor={"#BDBDBD"}
            />
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
              <Text style={{ color: "#FFFFFF" }}>Зареєструватися</Text>
            </TouchableOpacity>
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
  },
});
