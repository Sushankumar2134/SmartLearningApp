import React from "react";
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	Pressable,
	TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { Colors } from "../theme/colors";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const learningStats = [
  {
    label: "Active",
    value: "12",
    icon: "book-outline" as const,
    accent: "#6C63FF",
  },
  {
    label: "Progress",
    value: "68%",
    icon: "trending-up-outline" as const,
    accent: "#14B8A6",
  },
  {
    label: "Hours",
    value: "45",
    icon: "time-outline" as const,
    accent: "#F59E0B",
  },
  {
    label: "XP",
    value: "850",
    icon: "trophy-outline" as const,
    accent: "#EF4444",
  },
];
const featuredCourses = [
	{
		title: "Digital Marketing Basics",
		meta: "5 lessons · 70% done",
		accent: "#6C63FF",
	},
	{
		title: "UI Design Fundamentals",
		meta: "8 lessons · Start now",
		accent: "#14B8A6",
	},
];
const categories = [
  {
    name: "Programming",
    icon: "laptop",
  },
  {
    name: "Mobile Dev",
    icon: "cellphone",
  },
  {
    name: "Web Dev",
    icon: "web",
  },
  {
    name: "AI & ML",
    icon: "robot",
  },
  {
    name: "Data Science",
    icon: "chart-line",
  },
  {
    name: "Cloud",
    icon: "cloud-outline",
  },
  {
    name: "Cyber Security",
    icon: "shield-lock",
  },
  {
    name: "UI/UX",
    icon: "palette-outline",
  },
];
export default function HomeScreen() {
	const navigation = useNavigation<any>();
	const [search, setSearch] = React.useState("");
	return (
		<LinearGradient colors={["#F8F7FF", "#FFFFFF"]} style={styles.container}>
			<StatusBar style="dark" />
			<ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
				<View style={styles.hero}>
					<View>
						<View style={styles.logoBadge}>
							<Ionicons name="school-outline" size={18} color="#fff" />
						</View>
						<Text style={styles.eyebrow}>Welcome back</Text>
						<Text style={styles.title}>Your learning hub is ready.</Text>
						<Text style={styles.subtitle}>
							Continue where you left off, track progress, and keep moving toward your next certificate.
						</Text>
					</View>

<Pressable
  style={styles.profileButton}
  onPress={() => navigation.navigate("Profile")}
>
  <Ionicons
    name="person-circle-outline"
    size={48}
    color="#fff"
  />
</Pressable>
</View>

<View style={styles.searchContainer}>
  <Ionicons
    name="search-outline"
    size={20}
    color="#888"
  />

  <TextInput
    placeholder="Search courses..."
    value={search}
    onChangeText={setSearch}
    style={styles.searchInput}
  />
</View>

<View style={styles.statsRow}>
				</View>

				<View style={styles.statsRow}>
					{learningStats.map((item) => (
						<View key={item.label} style={styles.statCard}>
							<View style={[styles.statIcon, { backgroundColor: `${item.accent}18` }]}>
								<Ionicons name={item.icon} size={18} color={item.accent} />
							</View>
							<Text style={styles.statValue}>{item.value}</Text>
							<Text style={styles.statLabel}>{item.label}</Text>
						</View>
					))}
				</View>

				<View style={styles.sectionHeader}>
  <Text style={styles.sectionTitle}>
    Categories
  </Text>

  <Pressable
    onPress={() =>
      navigation.navigate("Categories")
    }
  >
    <Text style={styles.sectionAction}>
      See all
    </Text>
  </Pressable>
</View>

<ScrollView
  horizontal
  showsHorizontalScrollIndicator={false}
>
{categories.map((item) => (
  <Pressable
    key={item.name}
    style={styles.categoryChip}
  >
    <MaterialCommunityIcons
      name={item.icon as any}
      size={24}
      color="#6C63FF"
    />

    <Text style={styles.categoryText}>
      {item.name}
    </Text>
  </Pressable>
))}
</ScrollView>

<View style={styles.sectionHeader}>
  <Text style={styles.sectionTitle}>
    Continue Learning
  </Text>
</View>

				<View style={styles.courseList}>
					{featuredCourses.map((course) => (
						<View key={course.title} style={styles.courseCard}>
							<View style={[styles.courseStrip, { backgroundColor: course.accent }]} />
							<View style={styles.courseBody}>
								<Text style={styles.courseTitle}>{course.title}</Text>
								<Text style={styles.courseMeta}>{course.meta}</Text>
							</View>
							<Pressable style={styles.courseButton}>
								<Text style={styles.courseButtonText}>Open</Text>
							</Pressable>
						</View>
					))}
				</View>
					<View style={styles.sectionHeader}>
  <Text style={styles.sectionTitle}>
    Notifications
  </Text>
</View>

<View style={styles.assignmentCard}>
  <Text style={styles.courseMeta}>
    🔔 New Course Available: Advanced Node.js
  </Text>
</View>

<View style={styles.sectionHeader}>
  <Text style={styles.sectionTitle}>
    Today’s Focus
  </Text>
</View>
				<View style={styles.sectionHeader}>
					<Text style={styles.sectionTitle}>Today’s focus</Text>
				</View>
					<View style={styles.sectionHeader}>
  <Text style={styles.sectionTitle}>
    Upcoming Assignments
  </Text>
</View>

<View style={styles.assignmentCard}>
  <Text style={styles.courseTitle}>
    React Native Project
  </Text>

  <Text style={styles.courseMeta}>
    Due: 25 June 2026
  </Text>
</View>
				<View style={styles.focusCard}>
					<View style={styles.focusIcon}>
						<Ionicons name="trophy-outline" size={22} color="#fff" />
					</View>
					<View style={styles.focusBody}>
						<Text style={styles.focusTitle}>Finish one lesson and unlock your next badge.</Text>
						<Text style={styles.focusMeta}>Small wins build momentum.</Text>
					</View>
				</View>
			</ScrollView>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	content: {
		paddingHorizontal: 20,
		paddingTop: 64,
		paddingBottom: 28,
		gap: 20,
	},
	profileButton: {
  justifyContent: "center",
  alignItems: "center",
},
logoBadge: {
	width: 34,
	height: 34,
	borderRadius: 12,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "rgba(255,255,255,0.18)",
	marginBottom: 10,
},
searchInput: {
  flex: 1,
  marginLeft: 10,
  fontSize: 15,
},
searchContainer: {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "#fff",
  borderRadius: 18,
  paddingHorizontal: 16,
  paddingVertical: 14,
  shadowColor: "#000",
  shadowOpacity: 0.05,
  shadowRadius: 8,
  elevation: 2,
},

searchText: {
  marginLeft: 10,
  color: "#888",
  fontSize: 15,
},
	hero: {
		padding: 22,
		borderRadius: 30,
		backgroundColor: Colors.primary,
		flexDirection: "row",
		alignItems: "flex-start",
		justifyContent: "space-between",
		shadowColor: "#1F1147",
		shadowOpacity: 0.18,
		shadowRadius: 18,
		shadowOffset: { width: 0, height: 12 },
		elevation: 6,
	},
	eyebrow: {
		color: "rgba(255,255,255,0.82)",
		fontSize: 13,
		fontWeight: "700",
		textTransform: "uppercase",
		letterSpacing: 0.8,
		marginBottom: 8,
	},
	title: {
		color: "#fff",
		fontSize: 28,
		lineHeight: 34,
		fontWeight: "800",
		maxWidth: 250,
	},
	subtitle: {
		color: "rgba(255,255,255,0.86)",
		fontSize: 14,
		lineHeight: 21,
		marginTop: 12,
		maxWidth: 260,
	},
	heroBadge: {
		width: 52,
		height: 52,
		borderRadius: 16,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "rgba(255,255,255,0.18)",
	},
	statsRow: {
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
},
	statCard: {
  width: "48%",
  borderRadius: 18,
  backgroundColor: "#fff",
  paddingVertical: 14,
  paddingHorizontal: 12,
  alignItems: "center",
  marginBottom: 12,

  shadowColor: "#1F1147",
  shadowOpacity: 0.08,
  shadowRadius: 10,
  shadowOffset: { width: 0, height: 6 },
  elevation: 3,
},
	statIcon: {
  width: 32,
  height: 32,
  borderRadius: 10,
  alignItems: "center",
  justifyContent: "center",
  marginBottom: 8,
},
	statValue: {
  fontSize: 18,
  fontWeight: "800",
  color: Colors.text,
},
	statLabel: {
		fontSize: 12,
		marginTop: 4,
		color: Colors.lightText,
		fontWeight: "600",
	},
	sectionHeader: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	sectionTitle: {
		fontSize: 18,
		fontWeight: "800",
		color: Colors.text,
	},
	sectionAction: {
		fontSize: 13,
		fontWeight: "700",
		color: Colors.primary,
	},
	courseList: {
		gap: 12,
	},
	courseCard: {
		backgroundColor: "#fff",
		borderRadius: 24,
		overflow: "hidden",
		shadowColor: "#1F1147",
		shadowOpacity: 0.08,
		shadowRadius: 14,
		shadowOffset: { width: 0, height: 10 },
		elevation: 4,
	},
	courseStrip: {
		height: 6,
	},
	courseBody: {
		paddingHorizontal: 18,
		paddingTop: 16,
		paddingBottom: 10,
	},
	courseTitle: {
		fontSize: 16,
		fontWeight: "800",
		color: Colors.text,
	},
	courseMeta: {
		marginTop: 6,
		fontSize: 13,
		color: Colors.lightText,
	},
	courseButton: {
		marginHorizontal: 18,
		marginBottom: 16,
		alignSelf: "flex-start",
		minWidth: 90,
		borderRadius: 14,
		paddingVertical: 10,
		paddingHorizontal: 16,
		backgroundColor: "rgba(108, 99, 255, 0.12)",
	},
	courseButtonText: {
		color: Colors.primary,
		fontWeight: "700",
		fontSize: 13,
		textAlign: "center",
	},
	focusCard: {
		flexDirection: "row",
		gap: 14,
		alignItems: "center",
		borderRadius: 24,
		padding: 18,
		backgroundColor: "#111827",
	},
	focusIcon: {
		width: 48,
		height: 48,
		borderRadius: 16,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "rgba(255,255,255,0.12)",
	},
	focusBody: {
		flex: 1,
	},
	focusTitle: {
		color: "#fff",
		fontSize: 15,
		fontWeight: "700",
		lineHeight: 21,
	},
	focusMeta: {
		marginTop: 4,
		color: "rgba(255,255,255,0.72)",
		fontSize: 13,
	},
categoryChip: {
  backgroundColor: "#fff",
  borderRadius: 20,
  paddingHorizontal: 16,
  paddingVertical: 12,
  marginRight: 10,
  marginTop: 10,

  flexDirection: "row",
  alignItems: "center",
  gap: 8,

  shadowColor: "#000",
  shadowOpacity: 0.05,
  shadowRadius: 10,
  elevation: 3,
},

categoryText: {
  color: Colors.text,
  fontWeight: "700",
},

assignmentCard: {
  backgroundColor: "#fff",
  borderRadius: 20,
  padding: 16,
  shadowColor: "#000",
  shadowOpacity: 0.05,
  shadowRadius: 10,
  elevation: 2,
},
});
