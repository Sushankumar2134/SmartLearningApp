import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
const API = axios.create({
  baseURL: "http://192.168.43.188:5000/api",
});

export const getProfile = () => {
  return API.get("/auth/profile");
};
// Attach JWT Token Automatically
API.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);
// Update Profile
export const updateProfile = (
  name: string,
  email: string
) => {
  return API.put("/profile", {
    name,
    email,
  });
};

// Change Password
export const changePassword = (
  currentPassword: string,
  newPassword: string
) => {
  return API.put("/change-password", {
    currentPassword,
    newPassword,
  });
};

/* =========================
   CERTIFICATES
========================= */

// Get Certificates
export const getCertificates = () => {
  return API.get("/certificates");
};

/* =========================
   SAVED COURSES
========================= */

// Get Saved Courses
export const getSavedCourses = () => {
  return API.get("/saved-courses");
};

/* =========================
   SETTINGS
========================= */

// Get Settings
export const getSettings = () => {
  return API.get("/settings");
};

// Update Settings
export const updateSettings = (
  notifications: number,
  dark_mode: number
) => {
  return API.put("/settings", {
    notifications,
    dark_mode,
  });
};

/* =========================
   HELP & SUPPORT
========================= */

// Send Support Ticket
export const sendSupportTicket = (
  subject: string,
  message: string
) => {
  return API.post("/help-support", {
    subject,
    message,
  });
};
export default API;