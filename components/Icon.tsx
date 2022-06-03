import React from "react";
import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
	name: string;
	size: number | undefined;
	color: string;
	background: string;
	width: string | number;
};

const Icon: React.FC<Props> = (props) => {
	const { name, size, color, background, width } = props;
	return (
		<View style={styles.container}>
			<View style={styles.icon}>
				<Ionicons name={name} size={size} color={color} style={{ width }} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
	},
	icon: {
		overflow: "hidden",
		borderRadius: 100,
		backgroundColor: "#2f2f2f",
		alignItems: "center",
	},
});

export default Icon;
