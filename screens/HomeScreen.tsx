import { StatusBar } from "expo-status-bar";
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	Platform,
	Pressable,
	FlatList,
	ScrollView,
} from "react-native";
import Info from "../components/Info";
import Card from "../ui/icons/CardIcon";
import { Ionicons } from "@expo/vector-icons";
import StatsIcon from "../ui/icons/StatsIcon";
import SearchIcon from "../ui/icons/SearchIcon";
import Icon from "../components/Icon";
import Operation from "../components/Operation";
import { SimpleLineIcons } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import axios from "axios";

export default function HomeScreen() {
	const [data, setData] = useState([]);

	useEffect(() => {
		const req = async () => {
			const today = Math.ceil(Date.now() / 1000);
			const startDate = today - 2682000;
			const responce = await axios.get(
				`https://api.monobank.ua/personal/statement/0/${startDate}/${today}`,
				{
					headers: {
						"X-Token": "uoSqZ4qMQDei-ciNtIEH8WTaw2cXUdPmjtntW3SmHTFI",
					},
				},
			);
			setData(responce.data);
		};
		req();
	}, []);

	return (
		<View style={styles.container}>
			<SafeAreaView style={styles.header}>
				<StatusBar style='light' />
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						marginHorizontal: 10,
					}}
				>
					<Ionicons name='menu' size={24} />
					<Card />
					<Ionicons name='settings' size={24} />
				</View>
			</SafeAreaView>

			<View style={styles.info}>
				<Info />
			</View>

			<View style={styles.listContainer}>
				<View style={styles.top}>
					<StatsIcon />
					<Text style={{ color: "white" }}>Сьогодні</Text>
					<SearchIcon />
				</View>
				<FlatList
					data={data}
					renderItem={(item) => {
						return <Operation data={item.item} />;
					}}
					keyExtractor={(item) => item.id}
				/>
			</View>

			<View style={styles.footer}>
				<View style={{ alignItems: "center" }}>
					<Ionicons name='card-sharp' color={"red"} size={35} />
					<Text style={{ fontSize: 11, color: "red" }}>Картка</Text>
				</View>
				<View style={{ alignItems: "center" }}>
					<Ionicons name='cash' color={"#979797"} size={35} />
					<Text style={{ fontSize: 11, color: "#979797" }}>Кредити</Text>
				</View>
				<View style={{ alignItems: "center" }}>
					<Ionicons name='wallet' color={"#979797"} size={35} />
					<Text style={{ fontSize: 11, color: "#979797" }}>Накопичення</Text>
				</View>
				<View style={{ alignItems: "center" }}>
					<SimpleLineIcons name='present' color={"#979797"} size={35} />
					<Text style={{ fontSize: 11, color: "#979797" }}>Кешбек</Text>
				</View>
				<View style={{ alignItems: "center" }}>
					<Ionicons name='apps' color={"#979797"} size={35} />
					<Text style={{ fontSize: 11, color: "#979797" }}>Ще</Text>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		paddingTop: Platform.OS === "android" ? 50 : 0,
	},
	container: {
		flex: 1,

		backgroundColor: "purple",
	},
	menuIcon: {
		marginLeft: 10,
	},
	info: {
		flex: 7,
	},
	listContainer: {
		flex: 6,
		backgroundColor: "#1e1e1e",
		marginTop: 15,
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		paddingHorizontal: 20,
	},
	list: {},
	top: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 20,
		marginBottom: 10,
	},
	footer: {
		flex: 2,
		backgroundColor: "#2f2f2f",
		flexDirection: "row",
		paddingHorizontal: 20,
		justifyContent: "space-around",
	},
});
