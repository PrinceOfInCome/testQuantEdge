import React from "react";
import { View, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabNavigation from "./src/RootNavigator/BottomTabNavigator";
import { DrawerCustoms } from "./src/RootNavigator/DrawerNavigation";
const Drawer = createDrawerNavigator();
const App = () => {
	return (
		<Drawer.Navigator
			drawerContent={(props) => (
				<DrawerCustoms {...props}> </DrawerCustoms>
			)}
		>
			<Drawer.Screen
				name="BottomTab"
				component={BottomTabNavigation}
			/>
		</Drawer.Navigator>
	);
};

export default App;
