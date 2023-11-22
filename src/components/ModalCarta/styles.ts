import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    
    modalContainer: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    modalContent: {
        // backgroundColor: '#fff',
        padding: 20,
        paddingTop: 50,
        borderRadius: 8,
        width: '90%',
        alignItems: 'center',
    },
    closeButton: {
        backgroundColor: "#b88019",
        width: "15%",
        borderRadius: 100,
        padding: 5,
        alignItems: 'center',
        fontSize: '20px',
        fontWeight: '900',
        position: 'absolute',
        top: 10,
        right: 15,
    },
    x:{
        color: 'white',
        fontSize: 17,
        fontFamily: 'Yugi-Normal',
        fontWeight: 'bold'
     
    }
});
  