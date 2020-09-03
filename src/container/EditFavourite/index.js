import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Headers from "../../component/header/headerFavorite";
import CardEditFavourite from "../../component/card/CardEditFavourite";
import { TouchableOpacity } from "react-native-gesture-handler";
export default function EditFavourite({ navigation }) {
    return (
        <View style={styles.container}>
            <Headers onPressBack={() => navigation.goBack()}></Headers>
            <CardEditFavourite></CardEditFavourite>
            <View
                style={{
                    height: 82,
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "center",
                    position: "absolute",
                    bottom: 24,
                }}
            >
                <TouchableOpacity
                    style={{
                        borderColor: "white",
                        borderRadius: 10,
                        borderWidth: 0.5,
                    }}
                >
                    <Text style={{ color: "red", padding: 16 }}>
                        Delete All
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#12141F",
    },
});
