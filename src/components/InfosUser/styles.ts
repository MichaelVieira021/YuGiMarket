import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        height: 40,
        width: "100%",
        backgroundColor: '#272727',
        position: "absolute",
        top: 0,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 3,
        borderBottomColor: '#b88019',
    },

    userContainer: {
        flexDirection: "row", 
        alignItems: "flex-end", 
        width: "30%", 
        justifyContent: "flex-end", 
        marginLeft: 5
    },

    text: {
        fontSize: 18,
        marginLeft: 4,
        color: '#a5a5a5',
    },

    infoModal: {
        flexDirection: "row", 
        alignItems: "flex-end", 
        width: "100%", 
        justifyContent: "flex-start",
        marginBottom: 5
    },

    textModal: {
        fontSize: 20,
        marginLeft: 4,
        color: '#a5a5a5',
    },
})