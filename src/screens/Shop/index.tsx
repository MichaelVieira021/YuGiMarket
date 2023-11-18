import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native"
import background from '../../assets/images/Group_2dsds.png'
import { styles } from "./style"
import card from '../../assets/images/cartaVertical.png'

export const Shop = () => {

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