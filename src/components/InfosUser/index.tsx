import { Text, TouchableOpacity, View } from "react-native"
import { styles } from './styles'
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useContext, useEffect, useState} from "react";
import { LoginContext } from "../../contexts/LoginContext";
import { CustomModal } from "../ModalCarta";
import { ButtonNav } from "../ButtonNav";
import { getTodasCartas } from "../../services/ApiYugioh";

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
    const [modalVisible, setModalVisible] = useState(false);
    const [todasCartas, setTodasCartas] = useState<any>([])

    useEffect(()=> {
        infos()
        usuarioStorage()
    },[])

    useEffect(()=>{},[usuarioInfos,usuario])

    const closeModal = () => {
        setModalVisible(false);
    };
    
    const openModal = (data: any) => {
        obterNumeroCartas()
        setModalVisible(true);
    };

    const obterNumeroCartas = async () => {
        getTodasCartas().then((response) => {
            console.log(response.data.data, "testando")
            setTodasCartas(response.data.data)
        }).catch((Error) => {
            console.log("Tudo errado")
        })
    }

    return (
        <View style={styles.container}>

            <TouchableOpacity onPress={()=> openModal(usuario)} style={[ styles.userContainer ,{justifyContent: "flex-start", marginLeft: 5}]}>
            <Ionicons name="ios-person-circle" size={22} color="#b88019" />
                <Text style={styles.text}>{usuarioInfos?.nome}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> openModal(usuario)} style={[ styles.userContainer ,{width: "10%"}]}>
                <MaterialCommunityIcons name="cards" size={22} color="#b88019" />
                <Text style={[styles.text,{fontSize: 16}]}>{usuarioInfos?.cartas.length}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> openModal(usuario)} style={styles.userContainer}>
                <MaterialIcons name="attach-money" size={22} color="#b88019" />
                {usuarioInfos && usuarioInfos.cash != undefined && usuarioInfos.cash != null && (
                <Text style={[styles.text,{marginRight: 10, fontSize: 16, marginLeft: 0}]}>{usuarioInfos?.cash.toFixed(2)}</Text>)}
            </TouchableOpacity>
 
            <CustomModal visible={modalVisible} onClose={closeModal} estilo={{backgroundColor: "rgba(0, 0, 0, 0.8)", margin: 50}}>
                {usuario && 
                <View style={{alignItems: "center", height:200, width: "100%", justifyContent: "space-between"}}>
                    
                    <View style={{alignItems: "flex-start", width: "100%"}}>

                        <TouchableOpacity onPress={()=> openModal(usuario)} style={styles.infoModal}>
                            <Ionicons name="ios-person-circle" size={22} color="#b88019" />
                            <Text style={styles.textModal}>{usuarioInfos?.nome}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=> openModal(usuario)} style={styles.infoModal}>
                        <MaterialIcons name="email" size={22} color="#b88019" />
                            <Text style={styles.textModal}>{usuarioInfos?.email}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.infoModal}>
                            <MaterialCommunityIcons name="cards" size={22} color="#b88019" />
                            <Text style={[styles.textModal]}>{usuarioInfos?.cartas.length} / {todasCartas.length}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.infoModal}>
                            <MaterialIcons name="attach-money" size={22} color="#b88019" />
                            {usuarioInfos && usuarioInfos.cash != undefined && usuarioInfos.cash != null && (
                            <Text style={[styles.textModal]}>{usuarioInfos?.cash.toFixed(2)}</Text>)}
                        </TouchableOpacity>
                    
                    </View>
                    
                    <ButtonNav  style={{backgroundColor: '#b88019'}} title="SAIR"  openScreen={()=>{deslogar()}}/>
                </View>}
                
            </CustomModal>

        </View>
    )
}