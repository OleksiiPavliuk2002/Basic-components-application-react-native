import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function InfoCard({ color, caption, number }) {
	return (
		<View style={[styles.container, {borderColor: color, borderWidth: StyleSheet.hairlineWidth}]}>
            <Text style={[styles.number, { color }]}>{number}</Text>
			<Text style={[styles.caption, { color }]}>{caption}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 32,
		margin: 6,
		borderRadius: 6,
		backgroundColor: '#3b2f2f',
        alignItems: 'center',
	},
	number: {
		fontSize: 25,
		fontWeight: '700',
		marginBottom: 6,
	},
	caption: {
		fontSize: 14,
	},
});
