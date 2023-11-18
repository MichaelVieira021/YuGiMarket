import { styles } from "./styles"
import imageMilenio from "../../assets/images/enigmaMilenio.jpg"
import {Image, View, Text } from "react-native"


export const Welcome = () =>{
    return(

        <View  style={styles.background}>
        <Text style={styles.text}>Bem Vindo </Text>
        <Text style={styles.text}>ao </Text>
        <Text style={styles.text}>Yugi Market</Text>
        <Image source={imageMilenio} style={styles.image}/> 
        </View>

    )
}