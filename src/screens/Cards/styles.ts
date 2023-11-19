import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:"column",
    },
    cardContainer :{
        flex:1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop:10
      },
    imgCard:{
        width:'50%',
        height:100,
        resizeMode:"contain",
    },
    title:{
        alignSelf:"center",
        fontSize:28,
        color:"white",
        // fontWeight:"bold"
    },
    textCard:{
        color:"black"
    }
})