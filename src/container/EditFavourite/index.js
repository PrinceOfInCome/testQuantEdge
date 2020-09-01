import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Headers from "../../component/header/headerFavorite";
export default function EditFavourite({ navigation }) {
    return (
        <View>
            <Headers
                onPressBack={() => navigation.goBack()}
                title="Edit Favourite"
            ></Headers>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#12141F",
    },
});
