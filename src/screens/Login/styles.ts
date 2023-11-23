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
        height: 250,
        alignItems: 'center',
        marginTop: 210,
    },

    containerInput:{
        width: '100%',
        height: '50%'        
    },
    
    inputView: {
        marginTop: 6,
        marginBottom: 6,
        padding: 8,
        width: '100%',
        backgroundColor: '#f3da86ce',
        shadowRadius: 50,
        elevation:10,
        borderRadius: 9,
        flexDirection: "row"
    },
    
    input :{
        fontSize:18,
        marginLeft: 6,
        alignItems: "center",
        width: "100%"
    },

    containerEnigma:{
        paddingLeft:14,
        width: 137,
        height: 137
    },

    register:{
        color:"white"
    },

    buttonCadastro:{
    alignItems: "center"
    },

    buttonCadastroText: {
        color: 'white',
        fontSize: 17,
        fontFamily: 'Yugi-Normal',
    },
})