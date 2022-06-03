import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Replenishment: React.FC = () => {
	return (
		<View style={styles.cardIconContainer}>
			<View style={styles.cardIcon}>
				<Ionicons name='add' size={50} color='black' />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	cardIconContainer: {
		alignItems: "center",
	},
	cardIcon: {
		overflow: "hidden",
		borderRadius: 100,
		backgroundColor: "#bababa",
		width: 55,
		alignItems: "center",
	},
});

export default Replenishment;
