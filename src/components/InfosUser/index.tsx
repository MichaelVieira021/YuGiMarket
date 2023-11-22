import { Text, TouchableOpacity, View } from "react-native"
import { styles } from './styles'
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useContext, useEffect } from "react";
import { LoginContext } from "../../contexts/LoginContext";

interface Usuario {
    id: number;
    nome: string;
    email: string;
    cartas: [];
    deck: [];
    cash: number;
}

export const InfosUser = () => {

    const { usuarioStorage, usuarioInfos, deslogar, usuario, infos } = useContext(LoginContext);

    useEffect(() => {
        infos()
        usuarioStorage()
    }, [])

    useEffect(() => { }, [usuarioInfos, usuario])

    return (
        <View style={styles.container}>

            <TouchableOpacity onPress={() => deslogar()} style={[styles.userContainer, { justifyContent: "flex-start", marginLeft: 5 }]}>
                <Ionicons name="ios-person-circle" size={22} color="#b88019" />
                <Text style={styles.text}>{usuarioInfos?.nome}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.userContainer, { width: "10%" }]}>
                <MaterialCommunityIcons name="cards" size={22} color="#b88019" />
                <Text style={[styles.text, { fontSize: 16 }]}>{usuarioInfos?.cartas.length}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.userContainer}>
                <MaterialIcons name="attach-money" size={22} color="#b88019" />
                {usuarioInfos && usuarioInfos.cash != undefined && usuarioInfos.cash != null && (
                    <Text style={[styles.text, { marginRight: 10, fontSize: 16, marginLeft: 0 }]}>{usuarioInfos?.cash.toFixed(2)}</Text>)}
            </TouchableOpacity>

        </View>
    )
}