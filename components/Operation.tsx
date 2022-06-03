import React from "react";
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	Platform,
	Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import moment from "moment";
const Operation: React.FC = (props) => {
	return (
		<>
			<View style={styles.container}>
				<View style={styles.avatar}>
					<Ionicons name='cash' size={24} />
				</View>
				<View>
					<Text style={{ color: "white" }}>{props.data.description}</Text>
					<Text style={{ color: "white" }}>prodyctu nf sypermarketb</Text>
				</View>
				<View style={{ alignItems: "center", justifyContent: "center" }}>
					<Text style={{ color: props.data.amount < 0 ? "white" : "green" }}>
						{`${Math.floor(props.data.amount / 100)}.${
							props.data.amount % 100 > 0
								? (props.data.amount % 100) * 1
								: (props.data.amount % 100) * -1
						}`}
					</Text>
				</View>
			</View>
		</>
	);
};
const styles = StyleSheet.create({
	container: {
		marginVertical: 15,
		justifyContent: "space-between",
		flexDirection: "row",
	},
	avatar: {
		borderRadius: 100,
		backgroundColor: "green",
		height: 40,
		width: 40,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default Operation;
