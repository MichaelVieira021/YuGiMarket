import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native"
import background from '../../assets/images/Group_2dsds.png'
import { styles } from "./styles"
import card from '../../assets/images/cartaVertical.png'
import { Welcome } from "../Welcome"
import { useEffect, useState } from "react"

export const Shop = () => {
    const [showWelcome, setShowWelcome] = useState(true); // State to control whether to show Welcome or Shop

    useEffect(() => {
        setTimeout(() => {
            setShowWelcome(false); // After a certain time, set showWelcome to false, rendering Shop
        }, 2500); // Set timeout for 5 seconds
    }, []); // Run useEffect only once

    if (showWelcome) {
        return <Welcome />; // Render Welcome if showWelcome is true
    }

    
    return (

        <ImageBackground source={background} style={styles.container}>

            <View style={styles.containerCards}>

                <TouchableOpacity style={[styles.card, styles.cardCanto]}>
                    <Image source={card} style={styles.imgCard}/>

                    <View style={styles.containerQtdCard}>
                        <Text style={styles.textQtdCard}>2X</Text>
                    </View>

                </TouchableOpacity>
                
                <TouchableOpacity style={styles.card}>
                    <Image source={card} style={styles.imgCard}/>

                    <View style={styles.containerQtdCard}>
                        <Text style={styles.textQtdCard}>6X</Text>
                    </View>

                </TouchableOpacity>

                <TouchableOpacity style={[styles.card, styles.cardCanto, {marginRight: 0}]}>
                    <Image source={card} style={styles.imgCard}/>

                    <View style={styles.containerQtdCard}>
                        <Text style={styles.textQtdCard}>4X</Text>
                    </View>

                </TouchableOpacity>

            </View>

        </ImageBackground>
    )
}