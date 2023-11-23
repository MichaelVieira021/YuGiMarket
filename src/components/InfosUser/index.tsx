import { Text, TouchableOpacity, View } from "react-native"
import { styles } from './styles'
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useContext, useEffect, useState} from "react";
import { LoginContext } from "../../contexts/LoginContext";
import { CustomModal } from "../ModalCarta";
import { ButtonNav } from "../ButtonNav";
import { CartasContext } from "../../contexts/CartasContext";

export const InfosUser = () => {

    const { usuarioStorage, usuarioInfos, deslogar, usuario, infos } = useContext(LoginContext);
    const [modalVisible, setModalVisible] = useState(false);
    const { todasCartas } = useContext(CartasContext)

    useEffect(()=> {
        infos()
        usuarioStorage()
    },[])

    useEffect(()=>{},[usuarioInfos,usuario])
    
    const closeModal = () => {
        setModalVisible(false);
    };
    
    const openModal = () => {
        setModalVisible(true);
    };

    return (
        <View style={styles.container}>

            <TouchableOpacity onPress={()=> openModal()} style={[ styles.userContainer ,{justifyContent: "flex-start", marginLeft: 5}]}>
            <Ionicons name="ios-person-circle" size={22} color="#b88019" />
                <Text style={styles.text}>{usuarioInfos?.nome}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> openModal()} style={[ styles.userContainer ,{width: "10%"}]}>
                <MaterialCommunityIcons name="cards" size={22} color="#b88019" />
                <Text style={[styles.text,{fontSize: 16}]}>{usuarioInfos?.cartas.length}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> openModal()} style={styles.userContainer}>
                <MaterialIcons name="attach-money" size={22} color="#b88019" />
                {usuarioInfos && usuarioInfos.cash != undefined && usuarioInfos.cash != null && (
                <Text style={[styles.text,{marginRight: 10, fontSize: 16, marginLeft: 0}]}>{usuarioInfos?.cash.toFixed(2)}</Text>)}
            </TouchableOpacity>
 
            <CustomModal visible={modalVisible} onClose={closeModal} estilo={{backgroundColor: "rgba(0, 0, 0, 0.8)", margin: 50}}>
                {usuario && 
                <View style={{alignItems: "center", height:200, width: "100%", justifyContent: "space-between"}}>
                    
                    <View style={{alignItems: "flex-start", width: "100%"}}>

                        <View style={styles.infoModal}>
                            <Ionicons name="ios-person-circle" size={22} color="#b88019" />
                            <Text style={styles.textModal}>{usuarioInfos?.nome}</Text>
                        </View>

                        <View style={styles.infoModal}>
                        <MaterialIcons name="email" size={22} color="#b88019" />
                            <Text style={styles.textModal}>{usuarioInfos?.email}</Text>
                        </View>

                        <View style={styles.infoModal}>
                            <MaterialCommunityIcons name="cards" size={22} color="#b88019" />
                            <Text style={[styles.textModal]}>{usuarioInfos?.cartas.length} / {todasCartas.length}</Text>
                        </View>

                        <View style={styles.infoModal}>
                            <MaterialIcons name="attach-money" size={22} color="#b88019" />
                            {usuarioInfos && usuarioInfos.cash != undefined && usuarioInfos.cash != null && (
                            <Text style={[styles.textModal]}>{usuarioInfos?.cash.toFixed(2)}</Text>)}
                        </View>
                    
                    </View>
                    
                    <ButtonNav  style={{backgroundColor: '#b88019'}} title="SAIR"  openScreen={()=>{deslogar()}}/>
                </View>}
                
            </CustomModal>

        </View>
    )
}