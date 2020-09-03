import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import CardWatchlistCategories from "../../component/card/cardWatchlistCategories";
export default function UserWatchlist() {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={{
                    backgroundColor: "#3F445E",
                    borderRadius: 10,
                    height: 33,

                    flexDirection: "row",
                    alignItems: "center",
                    margin: 16,
                }}
            >
                <Image
                    style={{ width: 17, height: 17, marginLeft: 8 }}
                    source={require("../../image/search.png")}
                ></Image>
                <Text style={{ paddingLeft: 8, color: "white" }}>
                    Search for security and watchlist
                </Text>
            </TouchableOpacity>
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    borderColor: "white",
                    borderWidth: 0.5,
                    borderRadius: 10,
                    margin: 8,
                }}
            >
                <Image
                    source={require("../../image/star.png")}
                    style={{ width: 18, height: 18, margin: 16 }}
                ></Image>
                <Text style={{ color: "white", fontSize: 14 }}>Favourite</Text>
            </View>
            <CardWatchlistCategories text="Morning Test"></CardWatchlistCategories>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: "#12141F",
    },
});
