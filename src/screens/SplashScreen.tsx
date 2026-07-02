import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

export default function SplashScreen() {
  const navigation = useNavigation<any>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Login");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LinearGradient
      colors={["#6C63FF", "#8B5CF6"]}
      style={styles.container}
    >
      <StatusBar style="light" />

      <View style={styles.center}>
        <Image
          source={require("../../assets/splash-icon.png")}
          style={styles.logo}
        />

        <Text style={styles.title}>
          Smart Learning
        </Text>

        <Text style={styles.subtitle}>
          Learn. Grow. Succeed.
        </Text>
      </View>

      <ActivityIndicator
        style={styles.loader}
        size="large"
        color="#ffffff"
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  center: {
    alignItems: "center",
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
    resizeMode: "contain",
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#fff",
  },
  subtitle: {
    marginTop: 6,
    fontSize: 14,
    color: "rgba(255,255,255,0.9)",
  },
  loader: {
    position: "absolute",
    bottom: 80,
  },
});