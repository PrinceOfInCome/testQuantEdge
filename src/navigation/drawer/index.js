import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import EditFavourite from "../../container/EditFavourite";
import WatchlistCategories from "../../container/WatchlistCategories";
import BottomTabNavigator from "../bottomNavigator";
const Drawer = createDrawerNavigator();

export default function Drawers() {
    return (
        <Drawer.Navigator initialRouteName="BottomNavigator">
            <Drawer.Screen
                name="Watchlist"
                component={BottomTabNavigator}
                options={{ headerShown: false }}
            />

            <Drawer.Screen name="EditFavourite" component={EditFavourite} />
            <Drawer.Screen
                name="WatchlistCategories"
                component={WatchlistCategories}
            />
        </Drawer.Navigator>
    );
}
