import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    
    container:{
        justifyContent: "space-between",
        width: '67%',
        height: 250,
        alignItems: 'center',
        marginTop: 210,
        resizeMode: 'contain',

    },

    backgroundImage: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position:"relative"
    
    
    },
    
    containerInput:{
        width: '100%',
        height: '50%'        
    },
    inputView: {
        margin: 6,
        padding: 8,
        width: '100%',
        backgroundColor: '#f3da86ce',
        shadowRadius: 50,
        elevation:10,
        borderRadius: 9,
        
    },
    input :{
        fontSize:18
    },

    enigmaImage: {
        
        resizeMode: 'contain',
        width: '100%',
        height: '100%',
       
    },
    containerEnigma:{
        paddingLeft:14,
        width: 137,
        height: 137
    }
})