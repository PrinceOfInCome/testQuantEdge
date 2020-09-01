import React from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import Headers from "../../component/header/headerList";
const { width, height } = Dimensions.get("window");
export default function Watchlist({ navigation }) {
    return (
        <View style={styles.container}>
            <Headers
                onPressGlobe={() => navigation.navigate("Categories")}
                onPressMenu={() => navigation.navigate("Favourite")}
            ></Headers>
            <View style={styles.viewEdit}>
                <Text style={styles.txtEdit}>My Watchlist 1</Text>
                <View style={styles.editList}>
                    <Text style={styles.txtEditList}>Edit list</Text>
                    {/* <Image
                        source={require("../../image/edit.png")}
                        style={styles.imgEdit}
                    ></Image> */}
                </View>
            </View>

            <Text>Watchlist</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#12141F",
    },
    viewEdit: {
        flexDirection: "row",
        shadowColor: "#000",
        justifyContent: "space-between",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    editList: {
        flexDirection: "row",
        borderWidth: 0.5,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 16,
    },
    imgEdit: {
        width: 17,
        height: 17,
    },
    txtEditList: {
        fontSize: 14,
        color: "#4CDBEE",
    },
    txtEdit: {
        fontSize: 14,
        color: "white",
        marginLeft: 16,
    },
});
