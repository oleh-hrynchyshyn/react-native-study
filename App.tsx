import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button, Alert, Platform } from "react-native";
import * as Notifications from "expo-notifications";

import axios from "axios";

Notifications.setNotificationHandler({
	handleNotification: async () => {
		return {
			shouldPlaySound: true,
			shouldSetBadge: false,
			shouldShowAlert: true,
		};
	},
});

export default function App() {
	const [pushToken, setPushToken] = useState<string>("");

	useEffect(() => {
		const configurePushNotifications = async () => {
			await Notifications.cancelAllScheduledNotificationsAsync();
			const { status } = await Notifications.getPermissionsAsync();

			let finalStatus = status;

			if (finalStatus !== "granted") {
				const { status } = await Notifications.requestPermissionsAsync();
				finalStatus = status;
			}

			if (finalStatus !== "granted") {
				Alert.alert("sssss");
			}

			const pushToken = await Notifications.getExpoPushTokenAsync();
			setPushToken(pushToken.data);

			if (Platform.OS === "android") {
				Notifications.setNotificationChannelAsync("default", {
					name: "default",
					importance: Notifications.AndroidImportance.DEFAULT,
				});
			}
		};
		configurePushNotifications();
	}, []);

	const sendPushNotificationHandler = () => {
		axios.post("https://exp.host/--/api/v2/push/send", {
			to: pushToken,
			title: "Test",
			body: "Helllwqwqwqwqo",
		});
	};

	const scheduleNotificationHandler = () => {
		Notifications.scheduleNotificationAsync({
			content: {
				title: "CodeGeeks",
				body: "Hello",
				data: { data: "some data" },
			},
			trigger: {
				seconds: 1,
			},
		});
	};

	return (
		<View style={styles.container}>
			<Text>Open up App.tsx to start working on your app!!</Text>
			<StatusBar style='auto' />
			<Button
				title='Shedule Notification'
				onPress={scheduleNotificationHandler}
			/>

			<Button
				title='Send Push Notification'
				onPress={sendPushNotificationHandler}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
