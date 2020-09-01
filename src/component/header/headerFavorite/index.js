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
        <View style={styles.viewHeader}>
            <TouchableOpacity>
                <Image
                    source={require("../../../image/checked.png")}
                    style={styles.icon}
                ></Image>
            </TouchableOpacity>
            <Text style={styles.txtWatch}>Edit Favourite</Text>

            <TouchableOpacity onPress={onPressBack}>
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
    },
    viewHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: width,
        position: "absolute",
        bottom: 16,
    },
    icon: {
        width: 25,
        height: 25,
        marginLeft: 16,
        marginRight: 16,
    },
    txtWatch: {
        fontSize: 24,
        color: "white",
    },
});
