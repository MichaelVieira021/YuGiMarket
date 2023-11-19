import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    backgroundImage: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position:"relative"
    
    },
    container:{
        justifyContent: "space-between",
        width: '66%',
        height: 300,
        alignItems: 'center',
        marginTop: 10,
        resizeMode: 'contain',

    },

    containerInput:{
        width: '100%',
        height: '100%',        
    },

    inputView: {
        margin: 13,
        padding: 12,
        width: '100%',
        backgroundColor: '#f3da89ce',
        shadowColor: '#fff',
        shadowRadius: 5,
        elevation:10,
        borderRadius: 8,
        
    },

    input :{
        fontSize:20,
        fontFamily: 'Yugi-Normal'
        
    },

    inputViewButton: {
        margin: 6,
        padding: 10,
        width: '100%',
        

    },
    
    button: {
        backgroundColor:'#9D3A6C',
        padding: 13,
        borderRadius: 50,
        alignItems: 'center',
        shadowColor: '#fff',
        shadowRadius: 5,
        elevation:10,
    
    },

    buttonText: {
        color: '#FFF',
        fontSize: 22,
        fontFamily: 'Yugi-Normal'

    },
})