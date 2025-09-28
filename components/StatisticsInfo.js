import React from "react";
import { View, StyleSheet } from "react-native";
import InfoCard from "./InfoCard";
import words from "../data/words";

export default function StatisticsInfo() {
	const toLearn = words.filter((w) => w.status && w.status.toLowerCase() === "to learn").length;
	const inProcess = words.filter((w) => w.status && w.status.toLowerCase() === "in process").length;
	const learned = words.filter((w) => w.status && w.status.toLowerCase() === "learned").length;

	return (
		<View style={styles.container}>
			<InfoCard color="hotpink" caption="To learn" number={`${toLearn}`} />
			<InfoCard color="lightgreen" caption="In process" number={`${inProcess}`} />
			<InfoCard color="lightblue" caption="Learned" number={`${learned}`} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		paddingTop: 12,
	},
});
