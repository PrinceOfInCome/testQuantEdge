import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");
export default ({ onPressBack }) => (
    <View style={styles.header}>
        <View style={styles.viewheader}>
            <Text style={styles.txtWatch}>Watchlist Categories</Text>
            <TouchableOpacity
                style={{ position: "absolute", right: 16 }}
                onPress={onPressBack}
            >
                <Image
                    source={require("../../../image/delete.png")}
                    style={styles.icon}
                ></Image>
            </TouchableOpacity>
        </View>
    </View>
);

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#12141F",
        height: 100,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.3,

        elevation: 13,
    },
    viewheader: {
        flexDirection: "row",
        alignItems: "center",
        position: "absolute",
        bottom: 16,
        width: width,
    },
    icon: {
        width: 25,
        height: 25,
    },
    txtWatch: {
        fontSize: 24,
        color: "white",
        marginLeft: 16,
    },
});
