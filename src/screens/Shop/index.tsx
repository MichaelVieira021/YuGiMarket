import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native"
import background from '../../assets/images/Group_2dsds.png'
import { styles } from "./styles"
import card from '../../assets/images/cartaVertical.png'
import { Welcome } from "../Welcome"
import { useContext, useEffect, useState } from "react"
import { InfosUser } from "../../components/InfosUser"
import { getPorTipo, getTodasCartas } from "../../services/ApiYugioh"
// import { StorageContext } from "../../contexts/StorageContext"
import { patchUsuarioCards } from "../../services/ApiConta"
import { LoginContext } from "../../contexts/LoginContext"

interface cartaAleatoriaType{
    id: number
}

export const Shop = () => {
    const [showWelcome, setShowWelcome] = useState(true); // State to control whether to show Welcome or Shop

    const [todasCartas, setTodasCartas] = useState([{}])
    const [cartasSorteadas, setCartasSorteadas] = useState<Array<number>>([])
    const {usuario, infos, postUsuarioCards, atualizar} = useContext(LoginContext)
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
       
    },[])

    useEffect(()=>{
        infos()
        // testeAdd()
    },[todasTipoTrap, todasTipoSpell])

    useEffect(()=>{
        // testeAdd()
    },[])

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
        console.log(cartaAleatoria.id);
        const cartasDoUsuario = await usuario.cartas;
        const atualizado = [...cartasDoUsuario, cartaAleatoria.id]
        await patchUsuarioCards(usuario.id, atualizado);  
        await infos()

       
    }

    const spellAdd = async () => {
     
        const indiceAleatorio = Math.floor(Math.random() * todasTipoSpell.length);
        const cartaAleatoria = todasTipoSpell[indiceAleatorio];
        console.log(cartaAleatoria.id);
        const cartasDoUsuario = await usuario.cartas;
        const atualizado = [...cartasDoUsuario, cartaAleatoria.id]
        await patchUsuarioCards(usuario.id, atualizado);
        await infos()

    }

    const testeAdd = async () => {
        
    
        const indiceAleatorio = Math.floor(Math.random() * todasCartas.length);
        const cartaAleatoria = todasCartas[indiceAleatorio];
        console.log(cartaAleatoria.id);
        setCartasSorteadas([...cartasSorteadas, cartasSorteadas.id])
        const cartasDoUsuario = await usuario.cartas;
        const atualizado = [...cartasDoUsuario, cartaAleatoria.id]
        await patchUsuarioCards(usuario.id, atualizado);
        await infos()
            
    }
    
    return (

        <ImageBackground source={background} style={styles.container}>

            <InfosUser/>
            <View style={styles.containerCards}>

                <TouchableOpacity onPress={()=>trapAdd()} style={[styles.card, styles.cardCanto]}>
                    <Image source={card} style={styles.imgCard}/>

                    <View style={styles.containerQtdCard}>
                        <Text style={styles.textQtdCard}>2X</Text>
                    </View>

                </TouchableOpacity>
                
                <TouchableOpacity onPress={()=>testeAdd()} style={styles.card}>
                    <Image source={card} style={styles.imgCard}/>

                    <View style={styles.containerQtdCard}>
                        <Text style={styles.textQtdCard}>6X</Text>
                    </View>

                </TouchableOpacity>

                <TouchableOpacity onPress={()=>spellAdd()} style={[styles.card, styles.cardCanto, {marginRight: 0}]}>
                    <Image source={card} style={styles.imgCard}/>

                    <View style={styles.containerQtdCard}>
                        <Text style={styles.textQtdCard}>4X</Text>
                    </View>

                </TouchableOpacity>

            </View>

        </ImageBackground>
    )
}