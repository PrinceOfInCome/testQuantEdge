import React from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

export function DrawerCustoms(props) {
	return (
		<View style={{ flex: 1 }}>
			<DrawerContentScrollView {...props}>
				<DrawerItem
					label="Overview"
					onPress={() => {
						props.navigation.navigate("Overview");
					}}
				/>
				<DrawerItem
					label="Watch List"
					onPress={() => {
						props.navigation.navigate("WatchList");
					}}
				/>
				<DrawerItem
					label="Portfolio"
					onPress={() => {
						props.navigation.navigate("Portfolio");
					}}
				/>
				<DrawerItem
					label="Order"
					onPress={() => {
						props.navigation.navigate("CustomTab");
					}}
				/>
				<DrawerItem
					label="Categories"
					onPress={() => {
						props.navigation.navigate("Categories");
					}}
				/>
				<DrawerItem
					label="Setting"
					onPress={() => {
						props.navigation.navigate("Settings");
					}}
				/>
			</DrawerContentScrollView>
		</View>
	);
}

export default DrawerCustoms;
