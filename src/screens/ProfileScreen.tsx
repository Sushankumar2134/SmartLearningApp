import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function ProfileScreen() {
  const navigation = useNavigation<any>();

  const profile = {
    name: "Sushan Kumar",
    email: "sushan@email.com",
    level: 12,
    xp_points: 850,
    courses_enrolled: 12,
    courses_completed: 8,
    certificates: 3,
    learning_hours: 45,
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem("token");

    Alert.alert("Success", "Logged out successfully");

    navigation.replace("Login");
  };

  const MenuItem = ({
    icon,
    title,
    onPress,
  }: {
    icon: string;
    title: string;
    onPress?: () => void;
  }) => (
    <TouchableOpacity
      style={styles.menuItem}
      onPress={onPress}
    >
      <View style={styles.menuLeft}>
        <MaterialCommunityIcons
          name={icon as any}
          size={24}
          color="#6C63FF"
        />
        <Text style={styles.menuText}>{title}</Text>
      </View>

      <MaterialCommunityIcons
        name="chevron-right"
        size={24}
        color="#999"
      />
    </TouchableOpacity>
  );

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <MaterialCommunityIcons
          name="account-circle"
          size={100}
          color="#6C63FF"
        />

        <Text style={styles.name}>
          {profile.name}
        </Text>

        <Text style={styles.email}>
          {profile.email}
        </Text>

        <Text style={styles.level}>
          ⭐ Level {profile.level} Learner
        </Text>

        <Text style={styles.xp}>
          🏆 {profile.xp_points} XP Points
        </Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>
            {profile.courses_enrolled}
          </Text>
          <Text style={styles.statLabel}>
            Courses Enrolled
          </Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statValue}>
            {profile.courses_completed}
          </Text>
          <Text style={styles.statLabel}>
            Completed
          </Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statValue}>
            {profile.certificates}
          </Text>
          <Text style={styles.statLabel}>
            Certificates
          </Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statValue}>
            {profile.learning_hours}
          </Text>
          <Text style={styles.statLabel}>
            Learning Hours
          </Text>
        </View>
      </View>

      <View style={styles.menuContainer}>
        <MenuItem
          icon="account-edit-outline"
          title="Edit Profile"
        />

        <MenuItem
          icon="lock-reset"
          title="Change Password"
        />

        <MenuItem
          icon="certificate-outline"
          title="My Certificates"
        />

        <MenuItem
          icon="heart-outline"
          title="Saved Courses"
        />

        <MenuItem
          icon="cog-outline"
          title="Settings"
        />

        <MenuItem
          icon="help-circle-outline"
          title="Help & Support"
        />

        <MenuItem
          icon="logout"
          title="Logout"
          onPress={handleLogout}
        />
        <MenuItem
  icon="account-edit-outline"
  title="Edit Profile"
  onPress={() =>
    navigation.navigate("EditProfile")
  }
/>

<MenuItem
  icon="lock-reset"
  title="Change Password"
  onPress={() =>
    navigation.navigate("ChangePassword")
  }
/>

<MenuItem
  icon="certificate-outline"
  title="My Certificates"
  onPress={() =>
    navigation.navigate("Certificates")
  }
/>

<MenuItem
  icon="heart-outline"
  title="Saved Courses"
  onPress={() =>
    navigation.navigate("SavedCourses")
  }
/>

<MenuItem
  icon="cog-outline"
  title="Settings"
  onPress={() =>
    navigation.navigate("Settings")
  }
/>

<MenuItem
  icon="help-circle-outline"
  title="Help & Support"
  onPress={() =>
    navigation.navigate("HelpSupport")
  }
/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F8FC",
  },

  header: {
    alignItems: "center",
    paddingTop: 50,
    paddingBottom: 25,
    backgroundColor: "#fff",
  },

  name: {
    fontSize: 24,
    fontWeight: "700",
    marginTop: 10,
  },

  email: {
    color: "#777",
    marginTop: 5,
  },

  level: {
    marginTop: 15,
    fontWeight: "600",
    color: "#444",
  },

  xp: {
    marginTop: 5,
    fontWeight: "600",
    color: "#444",
  },

  statsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 15,
  },

  statCard: {
    width: "48%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 16,
    alignItems: "center",
    marginBottom: 12,
  },

  statValue: {
    fontSize: 24,
    fontWeight: "700",
    color: "#6C63FF",
  },

  statLabel: {
    marginTop: 5,
    color: "#666",
  },

  menuContainer: {
    backgroundColor: "#fff",
    marginTop: 10,
    paddingVertical: 10,
  },

  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#F1F1F1",
  },

  menuLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  menuText: {
    marginLeft: 15,
    fontSize: 16,
    fontWeight: "500",
  },
});