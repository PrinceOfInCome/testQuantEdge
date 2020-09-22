import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Portfolios from "../../container/Portfolio";
import Overviews from "../../container/Overview";
import WatchLists from "../../container/Watchlist";
import CustomTab from "./CustomTab";
const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
	return (
		<Tab.Navigator initialRouteName="WatchList">
			<Tab.Screen name="Overview" component={Overviews} />
			<Tab.Screen name="WatchList" component={WatchLists} />
			<Tab.Screen name="Portfolio" component={Portfolios} />
			<Tab.Screen name="CustomTab" component={CustomTab} />
		</Tab.Navigator>
	);
};
export default BottomTabNavigation;
