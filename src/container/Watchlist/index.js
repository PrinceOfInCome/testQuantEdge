import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import Headers from "../../component/header/headerList";
const { width, height } = Dimensions.get("window");
import CardWatchList from "../../component/card/cardWatchList";
export default function Watchlist({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: "#1E212D", height: 190 }}>
                <Headers
                    onDrawer={() => navigation.openDrawer()}
                    onPressGlobe={() => navigation.push("Favourite")}
                    onPressMenu={() => navigation.push("TopTabs")}
                ></Headers>
                <View style={styles.viewEdit}>
                    <Text style={styles.txtEdit}>My Watchlist 1</Text>
                    <TouchableOpacity style={styles.editList}>
                        <Image
                            source={require("../../image/edit.png")}
                            style={styles.imgEdit}
                        ></Image>
                        <Text style={styles.txtEditList}>Edit list</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={{
                        backgroundColor: "#3F445E",
                        borderRadius: 10,
                        height: 33,
                        marginLeft: 16,
                        marginRight: 16,
                        flexDirection: "row",
                        alignItems: "center",
                        margin: 8,
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
            </View>
            <ScrollView>
                <CardWatchList></CardWatchList>
                <CardWatchList></CardWatchList>
                <CardWatchList></CardWatchList>
                <CardWatchList></CardWatchList>
                <CardWatchList></CardWatchList>
                <CardWatchList></CardWatchList>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#2C2F40",
    },
    viewEdit: {
        flexDirection: "row",
        shadowColor: "black",
        height: 40,
        backgroundColor: "#1E212D",
        borderColor: "black",
        justifyContent: "space-between",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 15,
    },
    editList: {
        flexDirection: "row",
        borderWidth: 0.3,
        alignItems: "center",
        marginRight: 16,
        borderColor: "white",
        borderRadius: 5,
        height: 25,
    },
    imgEdit: {
        width: 17,
        height: 17,
        marginLeft: 8,
    },
    txtEditList: {
        fontSize: 14,
        color: "#4CDBEE",
        textAlign: "center",
        marginLeft: 6,
        marginRight: 6,
    },
    txtEdit: {
        fontSize: 14,
        color: "white",
        marginLeft: 16,
    },
});
