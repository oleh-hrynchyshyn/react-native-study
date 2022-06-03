import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Replenishment from "../ui/icons/ReplenishmentIcon";
import CameraIcon from "../ui/icons/CameraIcon";
import { useEffect, useState } from "react";
import axios from "axios";
const Info: React.FC = () => {
	const [data, setData] = useState({
		balance: 0,
		creditLimit: 0,
	});
	const { balance, creditLimit } = data;
	useEffect(() => {
		const req = async () => {
			const user = await axios.get(
				`https://api.monobank.ua/personal/client-info`,
				{
					headers: {
						"X-Token": "uoSqZ4qMQDei-ciNtIEH8WTaw2cXUdPmjtntW3SmHTFI",
					},
				},
			);
			console.log(user.data.accounts[0].balance);
			setData(user.data.accounts[0]);
		};
		req();
	}, []);

	return (
		<>
			<View style={styles.container}>
				<View style={styles.top}>
					<Text style={{ fontSize: 50, color: "white" }}>
						{Math.floor(balance / 100)}.
						<Text style={{ fontSize: 40, color: "white" }}>
							{Math.floor(balance % 100)} ₴
						</Text>
					</Text>
					<View style={styles.title}>
						<Text>Кредитний ліміт</Text>
						<Text>
							{Math.floor(creditLimit / 100)}.
							<Text style={{ fontSize: 12 }}>00 ₴</Text>
						</Text>
					</View>

					<View style={styles.title}>
						<Text>Використано кредиту</Text>
						<Text>
							15000.<Text style={{ fontSize: 12 }}>00 ₴</Text>
						</Text>
					</View>
				</View>

				<View style={styles.creditLimit}>
					<CameraIcon />
					<View style={{ justifyContent: "center", alignItems: "center" }}>
						<Text style={{ paddingLeft: 10 }}>Мінімальний платіж - 574 ₴</Text>
					</View>
				</View>

				<View style={styles.bottom}>
					<View style={styles.bottomIcons}>
						<Replenishment />
						<Text style={{ paddingTop: 5, textAlign: "center", fontSize: 16 }}>
							Поповнити свою картку
						</Text>
					</View>

					<View style={styles.bottomIcons}>
						<Replenishment />
						<Text style={{ paddingTop: 5, textAlign: "center", fontSize: 16 }}>
							Переказати на картку
						</Text>
					</View>

					<View style={styles.bottomIcons}>
						<Replenishment />
						<View>
							<Text
								style={{ paddingTop: 5, textAlign: "center", fontSize: 16 }}
							>
								Інші
							</Text>
						</View>

						<View>
							<Text style={{ textAlign: "center", fontSize: 16 }}>платежі</Text>
						</View>
					</View>
				</View>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingTop: 10,
		alignItems: "flex-start",
		marginHorizontal: 30,
	},
	top: {
		marginVertical: 15,
	},
	title: {
		flexDirection: "row",
		justifyContent: "space-between",
		width: "100%",
		marginBottom: 3,
	},

	creditLimit: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		backgroundColor: "grey",
		borderRadius: 15,
		paddingLeft: 10,
		paddingBottom: 10,
	},
	bottom: {
		marginVertical: 30,
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	bottomIcons: {
		flex: 1,
		alignItems: "center",
	},
});

export default Info;
