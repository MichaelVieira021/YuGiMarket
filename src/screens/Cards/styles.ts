import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:"column",
        backgroundColor:'rgba (0 , 0 , 0, 0.5)'
    },
    cardContainer :{
        flex:1,
        alignItems: 'center',
        justifyContent: 'space-between',
        margin:10
      },
    imgCard:{
        width:'120%',
        height:170,
        resizeMode:"contain",
    },
    title:{
        alignSelf:"center",
        fontSize:30,
        color:"#f3da86ce",
        fontFamily: 'Yugi-Bold',
        Color: '#f3da86ce',
        shadowRadius: 50,
        elevation:10,
        borderRadius: 9,
        marginTop: 10
    },
   
    ButtonNav:{
        backgroundColor: '#b88019',
        fontFamily: 'Yugi-Bold',
    }
})