import { Text, View, Image, ImageBackground, FlatList, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import carta from '../../assets/images/Dark.jpeg'
import dragao from '../../assets/images/dragon.png'
import { Loading } from "../Loading";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../contexts/LoginContext";
import { CustomModal } from "../../components/ModalCarta";
import { ButtonNav } from "../../components/ButtonNav";
import { patchUsuarioCards, patchUsuarioCash, patchUsuarioDeck } from "../../services/ApiConta";
import { Audio } from 'expo-av';
 

export const Cards = () => { 
    
    const {usuario, infos} = useContext (LoginContext)
    const [cartasUsuario, setCartasUsuario] = useState ([])
    const [modalVisible, setModalVisible] = useState(false);
    const [dataToPass, setDataToPass] = useState<any>(null);

    
    useEffect(()=>{
        infos()
    },[])

    useEffect(()=>{
    },[usuario])

    useEffect(()=>{
        infos()
        console.log(usuario.cartas[0],"tudo errado");
        setCartasUsuario(usuario.cartas)
        console.log(usuario.cartas)
    },[cartasUsuario])

    async function playSound(son:number) {
        if(son == 1){ 
            const { sound } = await Audio.Sound.createAsync( require('../../assets/sons/venderCarta.wav'));
            await sound.playAsync();
        }else if (son == 2){ 
            const { sound } = await Audio.Sound.createAsync( require('../../assets/sons/addInDeck.wav'));  
            await sound.playAsync();
        }else if (son == 3){
            const { sound } = await Audio.Sound.createAsync( require('../../assets/sons/abrirCarta.wav'));  
            await sound.playAsync();
        }
    }
    
    
    const closeModal = () => {
        setDataToPass(null);
        setModalVisible(false);
    };
    
    const openModal = (data: any) => {
        setDataToPass(data.carta);
        setModalVisible(true);
    };

    const addAoDeck = async (carta: any) => {
        const deckDoUsuario = await usuario.deck;
        const atualizado = [...deckDoUsuario, {carta}]
        await patchUsuarioDeck(usuario.id, atualizado)
        await infos()
        closeModal()
    }

    const vender = async (cartaDel: any) => {
        const deckDoUsuario = await usuario.deck;    
        const novoDeck = deckDoUsuario.filter(carta => carta.carta.id != cartaDel.id);
        await patchUsuarioDeck(usuario.id, novoDeck)
        
        const cartasDoUsuario = await usuario.cartas;
        const novasCartas = cartasDoUsuario.filter(carta => carta.carta.id != cartaDel.id);
        await patchUsuarioCards(usuario.id, novasCartas)

        const novoCash:number = (Number(await usuario.cash) + Number(cartaDel.preco))
        console.log(novoCash);
        
        await patchUsuarioCash(usuario.id, novoCash)
        await infos()
        closeModal()
    }

    // const [showWelcome, setShowWelcome] = useState(true); // State to control whether to show Welcome or Shop

    // useEffect(() => {
    //     setTimeout(() => {
    //         setShowWelcome(false); // After a certain time, set showWelcome to false, rendering Shop
    //     }, 2500); // Set timeout for 5 seconds
    // }, []); // Run useEffect only once

    // if (showWelcome) {
    //         return <Loading />; // Render Welcome if showWelcome is true
    //     }
        
    const Card =({carta}:any) =>(
        <TouchableOpacity onPress={() => {playSound(3),openModal({ carta })}} style={styles.cardContainer}>
            <Image source={{uri: carta.img}} style={styles.imgCard}/>
        </TouchableOpacity>
        
    )

    return (
        <ImageBackground source={dragao} style={styles.container}>
            <Text style={styles.title}>CARDS</Text>
            <FlatList
            data={usuario.cartas.slice().reverse()}
            // keyExtractor={(item)=>item.id}
            renderItem={({item}) => <Card  carta={item.carta}/>}
            showsVerticalScrollIndicator={false}
            // inverted={true}
            numColumns={3}
            
            />
            <CustomModal visible={modalVisible} onClose={closeModal}>
                {dataToPass && 
                <View style={{alignItems: "center", height:460, width: "100%"}}>
                    <Image source={{uri: dataToPass.img}} style={[styles.imgCard, {height:450}]}/>
                    {/* <Text style={{color: "white"}}>Tipo: {dataToPass.type}</Text> */}
                    <ButtonNav  style={styles.ButtonNav} title='ADICIONAR AO DECK' openScreen={()=>{playSound(2),addAoDeck(dataToPass)}}/>
                    <ButtonNav  style={styles.ButtonNav} title="VENDER  R$ " algo={dataToPass.preco} openScreen={()=>{playSound(1),vender(dataToPass)}}/>
                </View>}
                
            </CustomModal>
        </ImageBackground>
    )
}