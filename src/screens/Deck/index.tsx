import { Text, View, Image, ImageBackground, FlatList, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import carta from '../../assets/images/Dark.jpeg'
import dragao from '../../assets/images/dragon.png'
import { Loading } from "../Loading";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../contexts/LoginContext";
import { CustomModal } from "../../components/ModalCarta";
import { ButtonNav } from "../../components/ButtonNav";
import { patchUsuarioDeck } from "../../services/ApiConta";



export const Deck = () => {
    
    const {usuario, infos} = useContext (LoginContext)
    const [deckUsuario, setDeckUsuario] = useState ([])
    const [modalVisible, setModalVisible] = useState(false);
    const [dataToPass, setDataToPass] = useState<any>(null);

    useEffect(() => {
        infos()
    }, [])

    useEffect(() => {
    }, [usuario])
   
    useEffect(()=>{
        infos()
        console.log(usuario.deck[0],"tudo errado");
        setDeckUsuario(usuario.deck)
        console.log(usuario.deck)
    },[])

    
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
        <TouchableOpacity onPress={() => openModal({carta})} style={styles.cardContainer}>
            <Image source={{uri: carta.img}} style={styles.imgCard}/>
        </TouchableOpacity>
    )

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
        const novoDeck = deckDoUsuario.filter(carta => carta.carta.id != cartaRemove.id);
        await patchUsuarioDeck(usuario.id, novoDeck)
        await infos()
        closeModal()
    }

    return (
        <ImageBackground source={dragao} style={styles.container}>
            <Text style={styles.title}>DECK</Text>
            <FlatList
            data={usuario.deck.slice().reverse()}
            // keyExtractor={(item)=>item.id}
            renderItem={({item}) => <Card  carta={item.carta}/>}
            showsVerticalScrollIndicator={false}
            // inverted={true}
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