import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
// import CheckBox from "@react-native-community/checkbox";

export default function CardEditFavoruite() {
    const [toggleCheckBox, setToggleCheckBox] = useState(false);
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={{
                    width: 24,
                    height: 24,
                    borderRadius: 100,
                    borderWidth: 0.5,
                    borderColor: "white",
                }}
            ></TouchableOpacity>
            <View
                style={{
                    width: 365,
                    flexDirection: "row",
                    marginLeft: 8,
                    marginRight: 8,
                    alignItems: "center",
                    borderWidth: 0.5,
                    borderColor: "white",
                    borderRadius: 10,
                    justifyContent: "space-between",
                }}
            >
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        paddingTop: 16,
                        paddingBottom: 16,
                        paddingLeft: 16,
                        paddingRight: 8,
                    }}
                >
                    <Image
                        source={require("../../../image/globe.png")}
                        style={{
                            width: 25,
                            height: 25,
                            marginRight: 8,
                        }}
                    ></Image>
                    <View style={{ flexDirection: "column", marginLeft: 8 }}>
                        <Text
                            style={{
                                fontSize: 16,
                                color: "white",
                                fontWeight: "bold",
                            }}
                        >
                            THC.ASX
                        </Text>
                        <Text style={{ fontSize: 10, color: "white" }}>
                            THC Global Group
                        </Text>
                    </View>
                </View>

                <View
                    style={{
                        flexDirection: "row",
                        paddingRight: 16,
                        alignItems: "center",
                    }}
                >
                    <Image
                        source={require("../../../image/iconup.png")}
                        style={{ width: 15, height: 15, paddingRight: 16 }}
                    ></Image>
                    <Image
                        source={require("../../../image/menu.png")}
                        style={{ width: 20, height: 20, marginLeft: 16 }}
                    ></Image>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        margin: 8,

        alignItems: "center",
    },
});
