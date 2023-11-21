import { styles } from "./styles";
import { View, Text, TouchableOpacity, PressableStateCallbackType, StyleProp, ViewStyle } from "react-native"


interface teste {
    openScreen:()=>void
    title:string
    algo?: any
    style?:StyleProp<ViewStyle> ; // Optional function that takes a `PressableStateCallbackType` object and returns a `StyleProp<ViewStyle>` object
}

export const ButtonNav = ({openScreen, title, style, algo}:teste) =>{
    return(
        <View style={styles.inputViewButton}>
        <TouchableOpacity onPress={openScreen} style={[styles.button,style]}>
            <Text style={[styles.buttonText, style]}>{title}{algo}</Text>
        </TouchableOpacity>
    </View>
    )
}