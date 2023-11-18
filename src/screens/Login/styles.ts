import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    
    container:{
        justifyContent: "space-between",
        width: '50%',
        height: 250,
        alignItems: 'center',
        marginTop: 210
    },

    backgroundImage: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    
    
    },
    
    containerInput:{
        width: '100%',
        height: '50%'        
    },

    input: {
        margin: 3,
        padding: 11,
        width: '100%',
        backgroundColor: '#f3da86ce',
        shadowRadius: 10,
        borderRadius: 9,
        
    },

    enigmaImage: {
        
        resizeMode: 'contain',
        width: '100%',
        height: '100%',
       
    },
    containerEnigma:{
       
        width: 137,
        height: 137
    }
})