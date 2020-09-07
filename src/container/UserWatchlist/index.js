import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView,
    Dimensions,
} from "react-native";
var { width, height } = Dimensions.get("window");
import CardWatchlistCategories from "../../component/card/cardWatchlistCategories";
export default function UserWatchlist() {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={{
                    backgroundColor: "#3F445E",
                    borderRadius: 10,
                    height: 33,

                    flexDirection: "row",
                    alignItems: "center",
                    margin: 16,
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
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    borderColor: "white",
                    borderWidth: 0.5,
                    borderRadius: 10,
                    margin: 8,
                }}
            >
                <Image
                    source={require("../../image/star.png")}
                    style={{ width: 18, height: 18, margin: 16 }}
                ></Image>
                <Text style={{ color: "white", fontSize: 14 }}>Favourite</Text>
            </View>
            <ScrollView>
                <CardWatchlistCategories text="Morning Test"></CardWatchlistCategories>
                <CardWatchlistCategories text="Top 20"></CardWatchlistCategories>
                <CardWatchlistCategories text="Alex Test 1"></CardWatchlistCategories>
                <CardWatchlistCategories text="Test Chart"></CardWatchlistCategories>
                <CardWatchlistCategories text="Default View"></CardWatchlistCategories>
                <CardWatchlistCategories text="View 2"></CardWatchlistCategories>
                <CardWatchlistCategories text="NSX"></CardWatchlistCategories>
            </ScrollView>
            <View
                style={{
                    alignContent: "center",
                    width: width,
                    height: 82,
                    justifyContent: "center",
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 6,
                    },
                    shadowOpacity: 0.37,
                    shadowRadius: 7.49,

                    elevation: 12,
                }}
            >
                <TouchableOpacity
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        borderColor: "white",
                        borderWidth: 0.5,
                        justifyContent: "center",
                        width: 190,
                        borderRadius: 5,
                        position: "absolute",
                        bottom: 24,
                        alignSelf: "center",
                    }}
                >
                    <View
                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "white",
                            width: 25,
                            height: 25,
                            width: 25,
                            borderRadius: 100,
                        }}
                    >
                        <Text style={{ color: "#12141F" }}>+</Text>
                    </View>
                    <Text
                        style={{
                            fontSize: 12,
                            padding: 16,
                            color: "white",
                        }}
                    >
                        Create new watchlist
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
