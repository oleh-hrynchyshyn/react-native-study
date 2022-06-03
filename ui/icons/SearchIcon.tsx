import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Search: React.FC = () => {
	return (
		<View style={styles.cardIconContainer}>
			<View style={styles.cardIcon}>
				<Ionicons name='search' size={24} color='white' />
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
		backgroundColor: "#2f2f2f",
		width: 30,
		alignItems: "center",
	},
});

export default Search;
