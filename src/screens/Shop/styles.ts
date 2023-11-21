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

    cardTrap: {
        width: 68, 
        height: 99,
        marginRight: 21,
        // backgroundColor: "red",

        shadowColor: "#ff007f",
        shadowOffset: {
            width: 0,
            height: 0
        },

        shadowOpacity: 25,
        shadowRadius: 10
    },

    card: {
        width: 68, 
        height: 99,
        marginRight: 21,
        // backgroundColor: "red",

        // shadowColor: "#ffff00",
        shadowColor: "white",
        shadowOffset: {
            width: 0,
            height: 0
        },

        shadowOpacity: 25,
        shadowRadius: 10
    },

    cardEquip: {
        width: 68, 
        height: 99,
        marginRight: 21,
        // backgroundColor: "red",

        shadowColor: "#009cff",
        shadowOffset: {
            width: 0,
            height: 0
        },

        shadowOpacity: 25,
        shadowRadius: 10
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
        fontFamily: 'Yugi-Normal',
        fontSize: 16,
        fontWeight: "600",
    },

    imgCard: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",

    },
    cardMeio: {
        width: 100, 
        height: 100, 
        marginBottom: -100
        
    },

    cardEquipDragon: {
        width: 80, 
        height: 99,
        marginRight: 21,
       
    },

    imgCardDragon: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
         shadowColor: "yellow",
        shadowOffset: {
            width: 0,
            height: 0
        },

        shadowOpacity: 25,
        shadowRadius: 5
        
    },
})