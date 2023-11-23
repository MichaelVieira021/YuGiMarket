import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    backgroundImage: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    container:{
        justifyContent: "space-between",
        width: '67%',
        height: 300,
        alignItems: 'center',
        marginTop: 10,
    },

    containerInput:{
        width: '100%',
        height: '50%',
    },

    inputView: {
        marginBotton: 13,
        marginTop: 13,
        padding: 10,
        width: '100%',
        backgroundColor: '#f3da89ce',
        shadowColor: '#fff',
        shadowRadius: 5,
        borderRadius: 8,
        flexDirection: "row"
    },

    input :{
        fontSize:18,
        marginLeft: 6,
        alignItems: "center",
        width: "100%"
    },

    buttonCadastro:{
        alignItems: 'center',
    },

      buttonCadastroText: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'Yugi-Normal',
    },
})