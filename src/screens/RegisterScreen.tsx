import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

import API from "../services/api";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

const [showPassword, setShowPassword] = useState(false);

const [showConfirmPassword, setShowConfirmPassword] =
  useState(false);

  const handleRegister = async () => {
    if (!name || !email || !password) {
      Alert.alert("Validation", "Please fill all fields");
      return;
    }
if (password !== confirmPassword) {
  Alert.alert(
    "Error",
    "Passwords do not match"
  );
  return;
}
    try {
      await API.post("/auth/register", {
        name,
        email,
        password,
      });

      Alert.alert(
        "Success",
        "Registration Successful"
      );

      setName("");
      setEmail("");
      setPassword("");
    } catch (error: any) {
      Alert.alert(
        "Registration Failed",
        error?.response?.data?.error ||
          "Something went wrong"
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account 🚀</Text>

      <TextInput
        placeholder="Full Name"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

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
<View style={styles.passwordContainer}>
  <TextInput
    placeholder="Confirm Password"
    secureTextEntry={!showConfirmPassword}
    style={styles.passwordInput}
    value={confirmPassword}
    onChangeText={setConfirmPassword}
  />

  <TouchableOpacity
    onPress={() =>
      setShowConfirmPassword(!showConfirmPassword)
    }
  >
    <MaterialCommunityIcons
      name={
        showConfirmPassword
          ? "eye-off"
          : "eye"
      }
      size={24}
      color="gray"
    />
  </TouchableOpacity>
</View>
      <TouchableOpacity
        style={styles.button}
        onPress={handleRegister}
      >
        <Text style={styles.buttonText}>
          Register
        </Text>
      </TouchableOpacity>

      <Text style={styles.bottomText}>
        Already have an account? Login
      </Text>
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