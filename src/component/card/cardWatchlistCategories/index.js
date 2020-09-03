import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
// import CheckBox from "./node_modules/@react-native-community/checkbox";

export default function CardWatchlistCategories({ text, onPress }) {
    const [check, setcheck] = useState(false);
    const onCheck = () => {
        if (check == true) {
            setcheck(false);
        } else {
            setcheck(true);
        }
    };
    const color = check ? "rgb( 87, 225, 241)" : "white";
    return (
        <TouchableOpacity
            style={[styles.container, { borderColor: `${color}` }]}
            onPress={() => {
                onCheck();
            }}
        >
            <View>
                <Text style={{ fontSize: 14, color: "white" }}>{text}</Text>
            </View>
            {check == true ? (
                <Image
                    style={{ width: 10, height: 10 }}
                    source={require("../../../image/check.png")}
                ></Image>
            ) : null}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        margin: 8,
        padding: 16,
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: "white",
        alignItems: "center",
        justifyContent: "space-between",
    },
});
