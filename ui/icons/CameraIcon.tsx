import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Camera: React.FC = () => {
	return (
		<View style={styles.cameraIconContainer}>
			<View style={styles.cameraIcon}>
				<Ionicons name='camera' size={24} color='orange' />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	cameraIconContainer: {
		alignItems: "center",
		marginTop: 5,
	},
	cameraIcon: {
		borderRadius: 100,
		backgroundColor: "black",
		width: 30,
		alignItems: "center",
	},
});

export default Camera;
