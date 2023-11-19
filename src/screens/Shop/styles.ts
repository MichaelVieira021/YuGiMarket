import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },

    containerCards: {
        flexDirection: "row",
        marginTop: 285,
        justifyContent: "center"
    },

    card: {
        width: 68, 
        height: 99,
        marginRight: 21,
        backgroundColor: "red",
    },

    cardCanto: {
        width: 55, 
        height: 80, 
        marginTop: 5
    },

    containerQtdCard:{
        backgroundColor: "#ffffff9b",
        alignItems: "center",
        justifyContent: "center",
        height: 25,
        // padding: 2,
        borderRadius: 10,
        borderWidth: 1,
        shadowColor: "black",
        marginTop: 8,

        shadowOffset: {
            width: -2,
            height: 4
        },

        shadowOpacity: 2,
        shadowRadius: 16
    },

    textQtdCard: {
        // marginTop: 4,
        fontFamily: 'Squealer',
        fontSize: 16,
        fontWeight: "600",
    },

    imgCard: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
    },
})