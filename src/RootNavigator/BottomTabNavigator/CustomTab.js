import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Orders from "../../container/Order";
import CategoriesWl from "../../container/WatchlistCategories";
import Settings from "../../container/Setting";
const Stack = createStackNavigator();
const CustomTab = () => {
	return (
		<Stack.Navigator initialRouteName="Order">
			<Stack.Screen name="Order" component={Orders} />
			<Stack.Screen name="Categories" component={CategoriesWl} />
			<Stack.Screen name="Settings" component={Settings} />
		</Stack.Navigator>
	);
};

export default CustomTab;
