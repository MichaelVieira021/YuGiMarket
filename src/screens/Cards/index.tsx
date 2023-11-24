import { Text, View, Image, ImageBackground, FlatList, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import dragao from '../../assets/images/dragon.png'
import { useContext, useState } from "react";
import { LoginContext } from "../../contexts/LoginContext";
import { CustomModal } from "../../components/ModalCarta";
import { ButtonNav } from "../../components/ButtonNav";
import { patchUsuarioCards, patchUsuarioCash, patchUsuarioDeck } from "../../services/ApiConta";
import { Audio } from 'expo-av';

export const Cards = () => {

    const { usuario, atualizar } = useContext(LoginContext)
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

    const addAoDeck = async (carta: any) => {
        if (usuario.deck.length < 40) {
            await patchUsuarioDeck(usuario.id, [...await usuario.deck, { carta }])
            await atualizar()
            closeModal()
        } else {
            alert("DECK CHEIO")
        }
    }

    async function playSound(son: number) {
        if (son == 1) {
            const { sound } = await Audio.Sound.createAsync(require('../../assets/sons/venderCarta.wav'));
            await sound.playAsync();
        } else if (son == 2) {
            const { sound } = await Audio.Sound.createAsync(require('../../assets/sons/addInDeck.wav'));
            await sound.playAsync();
        } else if (son == 3) {
            const { sound } = await Audio.Sound.createAsync(require('../../assets/sons/abrirCarta.wav'));
            await sound.playAsync();
        }
    }

    const vender = async (cartaDel: any) => {
        const deckDoUsuario = await usuario.deck;
        const novoDeck = deckDoUsuario.filter((carta:any) => carta.carta.id != cartaDel.id);
        await patchUsuarioDeck(usuario.id, novoDeck)

        const cartasDoUsuario = await usuario.cartas;
        const novasCartas = cartasDoUsuario.filter((carta:any) => carta.carta.id != cartaDel.id);
        await patchUsuarioCards(usuario.id, novasCartas)

        const novoCash:number = (Number(await usuario.cash) + Number(cartaDel.preco))
        await patchUsuarioCash(usuario.id, novoCash)

        await atualizar()
        closeModal()
    }

    const activation = () => {
        for (const cards of usuario.deck) {
            if (cards.carta.id === dataToPass.id) {
                return true
            }
        }
        return false
    }

    const Card = ({ carta }: any) => (
        <TouchableOpacity onPress={() => { playSound(3), openModal({ carta }) }} style={styles.cardContainer}>
            <Image source={{ uri: carta.img }} style={styles.imgCard} />
        </TouchableOpacity>
    )

    return (
        <ImageBackground source={dragao} style={styles.container}>
            <Text style={styles.title}>CARDS</Text>
            <FlatList
                data={usuario.cartas.slice().reverse()}
                renderItem={({ item }) => <Card carta={item.carta} />}
                showsVerticalScrollIndicator={false}
                numColumns={3}
            />

            <CustomModal visible={modalVisible} onClose={closeModal}>
                {dataToPass &&
                <View style={{ alignItems: "center", height: 460, width: "100%" }}>
                    <Image source={{ uri: dataToPass.img }} style={[styles.imgCard, { height: 450 }]} />
                    {activation() === true ? 
                    <ButtonNav active={true} style={{ backgroundColor: '#b880' }} title='JÁ ADICIONADA' openScreen={() => { playSound(2), addAoDeck(dataToPass) }} /> : 
                    <ButtonNav style={{ backgroundColor: '#b88019' }} title='ADICIONAR AO DECK' openScreen={() => { playSound(2), addAoDeck(dataToPass) }} />}
                    <ButtonNav style={{ backgroundColor: '#b88019' }} title="VENDER  R$" algo={dataToPass.preco} openScreen={() => { playSound(1), vender(dataToPass) }} />
                </View>}
            </CustomModal>
        </ImageBackground>
    )
}