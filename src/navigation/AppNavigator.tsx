import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "../screens/SplashScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import HomeScreen from "../screens/HomeScreen";
import CourseListScreen from "../screens/CourseListScreen";
import NotificationScreen from "../screens/NotificationScreen";
import ProfileScreen from "../screens/ProfileScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import EditProfileScreen from "../screens/EditProfileScreen";
import ChangePasswordScreen from "../screens/ChangePasswordScreen";
import CertificatesScreen from "../screens/CertificatesScreen";
import SavedCoursesScreen from "../screens/SavedCoursesScreen";
import SettingsScreen from "../screens/SettingsScreen";
import HelpSupportScreen from "../screens/HelpSupportScreen";
// import { useNavigation } from "@react-navigation/native";
// const navigation = useNavigation<any>();
const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
        />

        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />

        <Stack.Screen
          name="Register"
          component={RegisterScreen}
        />

        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
  name="Courses"
  component={CourseListScreen}
/>

<Stack.Screen
  name="Notifications"
  component={NotificationScreen}
/>

<Stack.Screen
  name="Profile"
  component={ProfileScreen}
/>
<Stack.Screen
  name="Categories"
  component={CategoriesScreen}
/>
<Stack.Screen
  name="EditProfile"
  component={EditProfileScreen}
/>

<Stack.Screen
  name="ChangePassword"
  component={ChangePasswordScreen}
/>

<Stack.Screen
  name="Certificates"
  component={CertificatesScreen}
/>

<Stack.Screen
  name="SavedCourses"
  component={SavedCoursesScreen}
/>

<Stack.Screen
  name="Settings"
  component={SettingsScreen}
/>

<Stack.Screen
  name="HelpSupport"
  component={HelpSupportScreen}
/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}