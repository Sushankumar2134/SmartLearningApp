import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { getProfile } from "../services/api";

type ProfileData = {
  username: string;
  name: string;
  email: string;
  level: number;
  xp_points: number;
  courses_enrolled: number;
  courses_completed: number;
  certificates: number;
  learning_hours: number;
};

const defaultProfile: ProfileData = {
  username: "",
  name: "",
  email: "",
  level: 0,
  xp_points: 0,
  courses_enrolled: 0,
  courses_completed: 0,
  certificates: 0,
  learning_hours: 0,
};

const normalizeProfile = (data: any): ProfileData => ({
  username:
    data?.username ||
    data?.userName ||
    data?.user?.username ||
    data?.user?.userName ||
    data?.name ||
    data?.user?.name ||
    data?.email?.split("@")[0] ||
    "User",
  name:
    data?.name ||
    data?.username ||
    data?.fullName ||
    data?.user?.name ||
    data?.user?.username ||
    data?.user?.fullName ||
    data?.email?.split("@")[0] ||
    "User",
  email: data?.email || data?.user?.email || "",
  level: Number(data?.level ?? data?.user?.level ?? 0),
  xp_points: Number(
    data?.xp_points ??
      data?.xpPoints ??
      data?.user?.xp_points ??
      data?.user?.xpPoints ??
      0
  ),
  courses_enrolled: Number(
    data?.courses_enrolled ??
      data?.coursesEnrolled ??
      data?.user?.courses_enrolled ??
      data?.user?.coursesEnrolled ??
      0
  ),
  courses_completed: Number(
    data?.courses_completed ??
      data?.coursesCompleted ??
      data?.user?.courses_completed ??
      data?.user?.coursesCompleted ??
      0
  ),
  certificates: Number(data?.certificates ?? data?.user?.certificates ?? 0),
  learning_hours: Number(
    data?.learning_hours ??
      data?.learningHours ??
      data?.user?.learning_hours ??
      data?.user?.learningHours ??
      0
  ),
});

export default function ProfileScreen() {
  const navigation = useNavigation<any>();
  const [profile, setProfile] = useState<ProfileData>(defaultProfile);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
const loadProfile = async () => {
  try {
    const response = await getProfile();

    console.log("Profile API Response:", response.data);

    const normalizedProfile = normalizeProfile(response.data);

    if (isMounted) {
      setProfile(normalizedProfile);
    }

    await AsyncStorage.setItem(
      "userProfile",
      JSON.stringify(normalizedProfile)
    );
  } catch (error) {
    console.log("Profile Error:", error);
  } finally {
    if (isMounted) {
      setLoading(false);
    }
  }
};

    loadProfile();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleLogout = async () => {
    await AsyncStorage.removeItem("token");
    await AsyncStorage.removeItem("userProfile");

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

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#6C63FF" />
        <Text style={styles.loadingText}>Loading profile...</Text>
      </View>
    );
  }

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
            {profile.username}
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
          onPress={() => navigation.navigate("EditProfile")}
        />

        <MenuItem
          icon="lock-reset"
          title="Change Password"
          onPress={() => navigation.navigate("ChangePassword")}
        />

        <MenuItem
          icon="certificate-outline"
          title="My Certificates"
          onPress={() => navigation.navigate("Certificates")}
        />

        <MenuItem
          icon="heart-outline"
          title="Saved Courses"
          onPress={() => navigation.navigate("SavedCourses")}
        />

        <MenuItem
          icon="cog-outline"
          title="Settings"
          onPress={() => navigation.navigate("Settings")}
        />

        <MenuItem
          icon="help-circle-outline"
          title="Help & Support"
          onPress={() => navigation.navigate("HelpSupport")}
        />

        <MenuItem
          icon="logout"
          title="Logout"
          onPress={handleLogout}
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

  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F7F8FC",
  },

  loadingText: {
    marginTop: 12,
    color: "#666",
    fontWeight: "500",
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