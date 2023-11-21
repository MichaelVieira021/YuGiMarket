import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native"
import background from '../../assets/images/Group_2dsds.png'
import { styles } from "./styles"
import card from '../../assets/images/cartaVertical.png'
import { Welcome } from "../Welcome"
import { useContext, useEffect, useState } from "react"
import { InfosUser } from "../../components/InfosUser"
import { getPorTipo, getTodasCartas } from "../../services/ApiYugioh"
// import { StorageContext } from "../../contexts/StorageContext"
import { patchUsuarioCards, patchUsuarioCash } from "../../services/ApiConta"
import { LoginContext } from "../../contexts/LoginContext"
import { Audio } from 'expo-av';

interface cartaAleatoriaType{
    id: number
}

export const Shop = () => {
    const [showWelcome, setShowWelcome] = useState(true); // State to control whether to show Welcome or Shop

    const [todasCartas, setTodasCartas] = useState([{}])
    const [cartasSorteadas, setCartasSorteadas] = useState<Array<number>>([])
    const {usuario, infos, postUsuarioCards, atualizar, usuarioStorage} = useContext(LoginContext)
    const [todasTipoTrap, setTodasTipoTrap] = useState([{}])
    const [todasTipoSpell, setTodasTipoSpell] = useState([{}])
    
    // useEffect(() => {
    //     setTimeout(() => {
    //         setShowWelcome(false); // After a certain time, set showWelcome to false, rendering Shop
    //     }, 2500); // Set timeout for 5 seconds
    // }, []); // Run useEffect only once

    // if (showWelcome) {
    //     return <Welcome />; // Render Welcome if showWelcome is true
    // }
    useEffect(()=>{
        teste()
        infos()
        usuarioStorage()
       
    },[])

    useEffect(()=>{
        infos()
        // testeAdd()
    },[todasTipoTrap, todasTipoSpell])

    useEffect(()=>{
        // testeAdd()
        usuarioStorage()
    },[usuario])

    const teste = async() => {
        getTodasCartas().then((response)=>{
            console.log(response.data.data)
            setTodasCartas(response.data.data)
        }).catch((Error)=>{
            console.log("Tudo errado")
        })
        await buscarTipo("Trap Card", setTodasTipoTrap)
        await buscarTipo("spell card&race=equip", setTodasTipoSpell)
    }

    const buscarTipo = async(tipo: string, state: any) => {
        getPorTipo(tipo).then((response)=>{
            state(response.data.data)
            console.log(response.data.data)
        }).catch((Error)=>{
            console.log("Tudo errado de novo")
        })
    }

    const trapAdd = async () => {
     
        const indiceAleatorio = Math.floor(Math.random() * todasTipoTrap.length);
        const cartaAleatoria = todasTipoTrap[indiceAleatorio];
        console.log(cartaAleatoria);
        const carta = {
            id: cartaAleatoria.id,
            name: cartaAleatoria.name,
            type: cartaAleatoria.type,
            desc: cartaAleatoria.desc,
            preco: cartaAleatoria.card_prices[0].cardmarket_price,
            img: cartaAleatoria.card_images[0].image_url
        }

        const cartasDoUsuario = await usuario.cartas;
        const atualizado = [...cartasDoUsuario, {carta}]
        await patchUsuarioCards(usuario.id, atualizado);
        
        const novoCash = (Number(await usuario.cash) - 0.50)
        console.log(novoCash);
        
        await patchUsuarioCash(usuario.id, novoCash)
        await infos()


       
    }

    const spellAdd = async () => {
     
        const indiceAleatorio = Math.floor(Math.random() * todasTipoSpell.length);
        const cartaAleatoria = todasTipoSpell[indiceAleatorio];
        console.log(cartaAleatoria.id);
        const carta = {
            id: cartaAleatoria.id,
            name: cartaAleatoria.name,
            type: cartaAleatoria.type,
            desc: cartaAleatoria.desc,
            preco: cartaAleatoria.card_prices[0].cardmarket_price,
            img: cartaAleatoria.card_images[0].image_url
        }
        const cartasDoUsuario = await usuario.cartas;
        const atualizado = [...cartasDoUsuario, {carta}]
        await patchUsuarioCards(usuario.id, atualizado);
        
        const novoCash = (Number(await usuario.cash) - 0.50)
        console.log(novoCash);
        
        await patchUsuarioCash(usuario.id, novoCash)
        await infos()

    }

    const testeAdd = async () => {
        
    
        const indiceAleatorio = Math.floor(Math.random() * todasCartas.length);
        const cartaAleatoria = todasCartas[indiceAleatorio];
        console.log(cartaAleatoria.id);
        const carta = {
            id: cartaAleatoria.id,
            name: cartaAleatoria.name,
            type: cartaAleatoria.type,
            desc: cartaAleatoria.desc,
            preco: cartaAleatoria.card_prices[0].cardmarket_price,
            img: cartaAleatoria.card_images[0].image_url
        }

        const cartasDoUsuario = await usuario.cartas;
        const atualizado = [...cartasDoUsuario, {carta}]
        await patchUsuarioCards(usuario.id, atualizado);
        
        
        const novoCash = (Number(await usuario.cash) - 0.50)
        console.log(novoCash);
        
        await patchUsuarioCash(usuario.id, novoCash)
        await infos()
            
    }

    async function playSound(son:number) {
        if(son == 1){
            const { sound } = await Audio.Sound.createAsync( require('../../assets/sons/comprarCarta.wav'));
            await sound.playAsync();
        }
    }

     
    
    return (

        <ImageBackground source={background} style={styles.container}>

            <InfosUser/>
            <View style={styles.containerCards}>

                <TouchableOpacity onPress={()=>{playSound(1),trapAdd()}} style={[styles.cardTrap, styles.cardCanto]}>
                    <Image source={card} style={styles.imgCard}/>

                    {/* <View style={[styles.containerQtdCard, {backgroundColor: "#ff007f"}]}>
                        <Text style={styles.textQtdCard}>Trap</Text>
                    </View> */}

                </TouchableOpacity>
                
                <TouchableOpacity onPress={()=>{playSound(1),testeAdd()}} style={styles.card}>
                    <Image source={card} style={styles.imgCard}/>

                    {/* <View style={[styles.containerQtdCard, {backgroundColor: "#ffd700"}]}>
                        <Text style={styles.textQtdCard}>Normal</Text>
                    </View> */}

                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{playSound(1),spellAdd()}} style={[styles.cardEquip, styles.cardCanto, {marginRight: 0}]}>
                    <Image source={card} style={styles.imgCard}/>

                    {/* <View style={[styles.containerQtdCard, {backgroundColor: "#009cff"}]}>
                        <Text style={styles.textQtdCard}>Equip</Text>
                    </View> */}

                </TouchableOpacity>

            </View>

        </ImageBackground>
    )
}