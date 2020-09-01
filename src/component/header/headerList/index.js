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
export default ({ onPressGlobe, onPressMenu }) => (
    <View style={[styles.header, { backgroundColor: "#12141F" }]}>
        <View style={styles.viewheader}>
            <Image
                source={require("../../../image/menu.png")}
                style={styles.iconDrawer}
            ></Image>
            <Text style={styles.txtWatch}>Watchlist</Text>
            <TouchableOpacity style={styles.btnGlobe} onPress={onPressGlobe}>
                <Image
                    source={require("../../../image/globe.png")}
                    style={styles.iconGlobe}
                ></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnMenu} onPress={onPressMenu}>
                <Image
                    source={require("../../../image/squared.png")}
                    style={styles.iconMenu}
                ></Image>
            </TouchableOpacity>
        </View>
    </View>
);

const styles = StyleSheet.create({
    header: {
        height: 100,
    },
    viewheader: {
        flexDirection: "row",
        alignItems: "center",
        position: "absolute",
        bottom: 16,
        width: width,
    },
    iconDrawer: {
        width: 18,
        height: 18,
    },
    iconGlobe: {
        width: 18,
        height: 18,
    },
    iconMenu: {
        width: 18,
        height: 18,
    },
    txtWatch: {
        fontSize: 24,
        color: "white",
        marginLeft: 16,
    },
    btnGlobe: {
        position: "absolute",
        right: 16,
    },
    btnMenu: {
        position: "absolute",
        right: 68,
    },
});
