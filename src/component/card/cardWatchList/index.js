import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default ({}) => (
	<View
		style={{
			flexDirection: "row",
			height: 58,
			alignItems: "center",
			backgroundColor: "#1D1F2A",
			margin: 8,
			justifyContent: "space-between",
		}}
	>
		<View style={{ marginLeft: 16 }}>
			<Text style={{ color: "white", fontSize: 16 }}>THC.ASX</Text>
			<Text style={{ color: "white", fontSize: 10 }}>
				THC Global Group
			</Text>
		</View>
		<View
			style={{
				marginRight: 16,
				justifyContent: "flex-start",
				alignItems: "flex-end",
			}}
		>
			<Text
				style={{
					color: "rgb(48, 255 ,143)",
					fontSize: 16,
				}}
			>
				30.090
			</Text>
			<View style={{ flexDirection: "row", alignItems: "center" }}>
				<Text style={{ color: "rgb(48, 255 ,143)", fontSize: 12 }}>
					+13.330
				</Text>
				<Image
					source={require("../../../image/up.png")}
					style={{ width: 10, height: 10, marginLeft: 5 }}
				></Image>
				<Text style={{ color: "rgb(48, 255 ,143)", fontSize: 12 }}>
					50.20%
				</Text>
			</View>
		</View>
	</View>
);

const styles = StyleSheet.create({});