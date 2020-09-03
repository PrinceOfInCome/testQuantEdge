import * as React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import UserWatchlist from "../../container/UserWatchlist";
import SystemWatchlist from "../../container/SystemWatchlist";
const Tab = createMaterialTopTabNavigator();
import Headers from "../../component/header/headerCategori";

export default function TopTabs({ navigation }) {
    return (
        <>
            <Headers onPressBack={() => navigation.goBack()}></Headers>
            <Tab.Navigator
                initialRouteName="UserWatchlist"
                tabBarOptions={{
                    labelStyle: { fontSize: 12, textTransform: "none" },
                    activeTintColor: "rgb(87 ,225 ,241)",
                    inactiveTintColor: "rgb(87 ,225 ,241)",
                    headerTitleStyle: {
                        fontFamily: "my-custom-font",
                    },
                    style: { backgroundColor: "#12141F", height: 40 },
                }}
            >
                <Tab.Screen name="UserWatchlist" component={UserWatchlist} />
                <Tab.Screen
                    name="SystemWatchlist"
                    component={SystemWatchlist}
                />
            </Tab.Navigator>
        </>
    );
}
