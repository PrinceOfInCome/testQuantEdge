import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Watchlist from "../../container/Watchlist";
import WatchlistCategories from "../../container/WatchlistCategories";
import EditFavourite from "../../container/EditFavourite";
import TopTabs from "../../navigation/topNaviagtor";
import App from "../../../App";
const Stack = createStackNavigator();

function Main() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Drawers">
				<Stack.Screen
					name="Drawers"
					component={App}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="TopTabs"
					component={TopTabs}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="List"
					component={Watchlist}
					options={{ headerShown: false }}
				/>

				<Stack.Screen
					name="Favourite"
					component={EditFavourite}
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
export default Main;
