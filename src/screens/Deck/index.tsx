import { Text, View, Image, ImageBackground, FlatList, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import dragao from '../../assets/images/dragon.png'
import { useContext, useState } from "react";
import { LoginContext } from "../../contexts/LoginContext";
import { CustomModal } from "../../components/ModalCarta";
import { ButtonNav } from "../../components/ButtonNav";
import { patchUsuarioDeck } from "../../services/ApiConta";

export const Deck = () => {
    
    const {usuario, atualizar} = useContext (LoginContext)
    const [modalVisible, setModalVisible] = useState(false);
    const [dataToPass, setDataToPass] = useState<any>(null);

    const closeModal = () => {
        setDataToPass(null);
        setModalVisible(false);
    };
    
    const openModal = (data: any) => {
        setDataToPass(data.carta);
        setModalVisible(true);
    };
    
    const removerDeck = async (cartaRemove: any) =>{
        const deckDoUsuario = await usuario.deck;
        const novoDeck = deckDoUsuario.filter((carta:any) => carta.carta.id != cartaRemove.id);
        await patchUsuarioDeck(usuario.id, novoDeck)
        await atualizar()
        closeModal()
    }
    
    const Card =({carta}:any) =>(
        <TouchableOpacity onPress={() => openModal({carta})} style={styles.cardContainer}>
            <Image source={{uri: carta.img}} style={styles.imgCard}/>
        </TouchableOpacity>
    )

    return (
        <ImageBackground source={dragao} style={styles.container}>
            <Text style={styles.title}>DECK</Text>
            <FlatList
                data={usuario.deck.slice().reverse()}
                renderItem={({item}) => <Card  carta={item.carta}/>}
                showsVerticalScrollIndicator={false}
                numColumns={3}
            />

            <CustomModal visible={modalVisible} onClose={closeModal}>
                {dataToPass &&
                <View style={{ alignItems: "center", height: 460, width: "100%" }}>
                    <Image source={{ uri: dataToPass.img }} style={[styles.imgCard, { height: 450 }]} />
                    <ButtonNav style={{ backgroundColor: '#b88019' }} title="REMOVER DO DECK" openScreen={() => { removerDeck(dataToPass) }} />
                </View>}
            </CustomModal>

        </ImageBackground>
    )
}