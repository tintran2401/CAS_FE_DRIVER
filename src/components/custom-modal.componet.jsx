import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CustomModal = ({ children, title, type, range, visible, contentSize }) => (
    <View style={[styles.modal, visible ? { opacity: 0.85, zIndex: 10 } : null]}>
        <View style={[styles.modalContent, contentSize]}>
            {title ? (
                <View style={styles.groupTitle}>
                    <Text style={styles.modalTitle}>{title}</Text>
                    {type ? <Text style={styles.requestType}>{type}</Text> : null}
                    {range ? <Text style={styles.range}>{range} km</Text> : null}
                </View>
            ) : null}
            {children}
        </View>
    </View>
);

export default CustomModal;

const styles = StyleSheet.create({
    modal: {
        width: "100%",
        height: "100%",
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
        opacity: 0,
        zIndex: -1
    },
    modalContent: {
        width: "90%",
        height: "90%",
        backgroundColor: "#fff",
        alignItems: "center",
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 5
    },
    groupTitle: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    modalTitle: {
        fontFamily: "Texgyreadventor-bold",
        color: "#000",
        fontSize: 16,
        textTransform: "uppercase"
    },
    requestType: {
        fontFamily: "Texgyreadventor-bold",
        color: "#00960F",
        borderColor: "#00960F",
        borderWidth: 1,
        paddingVertical: 2,
        paddingHorizontal: 5,
        borderRadius: 15,
        fontSize: 10,
        textTransform: "uppercase",
        marginLeft: 10
    },
    range: {
        fontFamily: "Texgyreadventor-regular",
        color: "#000",
        fontSize: 10,
        marginLeft: 10,
        borderWidth: 1,
        borderRadius: 15,
        paddingVertical: 2,
        paddingHorizontal: 5
    }
});
