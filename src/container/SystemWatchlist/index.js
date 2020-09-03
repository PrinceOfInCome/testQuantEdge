import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function SystemWatchlist() {
    return (
        <View style={styles.container}>
            <Text>System Watchlist</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#2C2F40",
    },
});
