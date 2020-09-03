import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Watchlist from "../../container/Watchlist";
import WatchlistCategories from "../../container/WatchlistCategories";
import OverView from "../../container/Overview";
const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
    return (
        <Tab.Navigator
            initialRouteName="Watchlist"
            tabBarOptions={{
                keyboardHidesTabBar: true,
                activeTintColor: "lightblue",
                inactiveTintColor: "white",
                style: {
                    backgroundColor: "#2C324C",
                },
                labelStyle: {
                    fontSize: 14,
                },
            }}
        >
            <Tab.Screen name="Overview" component={OverView} />
            <Tab.Screen name="Watchlist" component={Watchlist} />
            <Tab.Screen name="Portfolio" component={WatchlistCategories} />
        </Tab.Navigator>
    );
}
