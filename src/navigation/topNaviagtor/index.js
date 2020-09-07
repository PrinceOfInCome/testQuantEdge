import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import UserWatchlist from "../../container/UserWatchlist";
import SystemWatchlist from "../../container/SystemWatchlist";
const Tab = createMaterialTopTabNavigator();
import Headers from "../../component/header/headerCategori";

const Content = ({ isRendered }) =>
    isRendered && (
        <Tab.Navigator
            initialRouteName="UserWatchlist"
            sceneAnimationEnabled={true}
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
            <Tab.Screen name="SystemWatchlist" component={SystemWatchlist} />
        </Tab.Navigator>
    );

export default function TopTabs({ navigation }) {
    const [isRendered, setRendered] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setRendered(true);
        }, 100);
    }, []);

    return (
        <>
            <Headers onPressBack={() => navigation.goBack()}></Headers>
            <Content isRendered />
            {!isRendered && (
                <View
                    style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        backgroundColor: "#12141F",
                    }}
                ></View>
            )}
        </>
    );
}
