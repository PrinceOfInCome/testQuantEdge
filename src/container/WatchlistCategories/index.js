import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Headers from "../../component/header/headerCategori";
export default function WatchlistCategories({ navigation }) {
    return (
        <View style={styles.container}>
            <Headers onPressBack={() => navigation.goBack()}></Headers>
          
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#12141F",
    },
});
