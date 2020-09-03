import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Watchlist from "../../container/Watchlist";
import WatchlistCategories from "../../container/WatchlistCategories";
import EditFavourite from "../../container/EditFavourite";
import BottomTabNavigator from "../bottomNavigator";
import Drawers from "../drawer";
import TopTabs from "../topNaviagtor";
import Headers from "../../component/header/headerFavorite";
const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Drawers"
                    component={Drawers}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="BottomNavigator"
                    component={BottomTabNavigator}
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
                    name="Categories"
                    component={WatchlistCategories}
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

export default App;
