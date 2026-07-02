import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import API from "../services/api";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
    const navigation = useNavigation<any>();
  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Validation", "Please enter email and password");
      return;
    }

    try {
      const response = await API.post("/auth/login", {
        email,
        password,
      });

    await AsyncStorage.setItem(
  "token",
  response.data.token
);

Alert.alert(
  "Success",
  "Login Successful",
  [
    {
      text: "OK",
      onPress: () =>
        navigation.replace("Home"),
    },
  ]
);
    } catch (error: any) {
      Alert.alert(
        "Login Failed",
        error?.response?.data?.message || "Invalid Credentials"
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back 👋</Text>

      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <View style={styles.passwordContainer}>
  <TextInput
    placeholder="Password"
    secureTextEntry={!showPassword}
    style={styles.passwordInput}
    value={password}
    onChangeText={setPassword}
  />

  <TouchableOpacity
    onPress={() =>
      setShowPassword(!showPassword)
    }
  >
    <MaterialCommunityIcons
      name={showPassword ? "eye-off" : "eye"}
      size={24}
      color="gray"
    />
  </TouchableOpacity>
</View>

      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

 <TouchableOpacity
  onPress={() => navigation.navigate("Register")}
>
  <Text style={styles.bottomText}>
    New User? Register Here
  </Text>
</TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 25,
    backgroundColor: "#fff",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 30,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
  },

  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 15,
  },

  passwordInput: {
    flex: 1,
    paddingVertical: 15,
  },

  button: {
    backgroundColor: "#6C63FF",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  bottomText: {
    marginTop: 20,
    textAlign: "center",
  },
});