import { styles } from "./styles";
import { View, Text, TouchableOpacity, StyleProp, ViewStyle } from "react-native"
interface ButtonProps {
    openScreen: () => void
    title: string
    algo?: any
    style?: StyleProp<ViewStyle>;
    active?: boolean;
}

export const ButtonNav = ({ openScreen, title, style, algo, active }: ButtonProps) => {
    return (
        <View style={styles.inputViewButton}>
            <TouchableOpacity disabled={active} onPress={openScreen} style={[styles.button, style]}>
                <Text style={[styles.buttonText, style]}>{title}{algo}</Text>
            </TouchableOpacity>
        </View>
    )
}