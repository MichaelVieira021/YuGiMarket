import { styles } from "./styles";
import { View, Text, TouchableOpacity, PressableStateCallbackType, StyleProp, ViewStyle } from "react-native"

interface teste {
    openScreen: () => void
    title: string
    algo?: any
    style?: StyleProp<ViewStyle>;
    active?: boolean;
}

export const ButtonNav = ({ openScreen, title, style, algo, active }: teste) => {
    return (
        <View style={styles.inputViewButton}>
            <TouchableOpacity disabled={active} onPress={openScreen} style={[styles.button, style]}>
                <Text style={[styles.buttonText, style]}>{title}{algo}</Text>
            </TouchableOpacity>
        </View>
    )
}