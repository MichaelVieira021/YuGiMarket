import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native"
import background from '../../assets/images/Group_2dsds.png'
import { styles } from "./styles"
import card from '../../assets/images/cartaVertical.png'
import cardDragon from '../../assets/images/IconDragon.png'
import { Welcome } from "../Welcome"
import { useContext, useEffect, useState } from "react"
import { InfosUser } from "../../components/InfosUser"
import { getPorTipo, getTodasCartas, getPorRace } from "../../services/ApiYugioh"
import { patchUsuarioCards, patchUsuarioCash } from "../../services/ApiConta"
import { LoginContext } from "../../contexts/LoginContext"
import { Audio } from 'expo-av';

interface cartaAleatoriaType {
    id: number
}

export const Shop = () => {
    const [todasCartas, setTodasCartas] = useState([{}])
    const { usuario, infos, postUsuarioCards, atualizar, usuarioStorage } = useContext(LoginContext)
    const [todasTipoTrap, setTodasTipoTrap] = useState([{}])
    const [todasTipoSpell, setTodasTipoSpell] = useState([{}])
    const [todasTipoDragon, setTodasTipoDragon] = useState([{}])

    useEffect(() => {
        teste()
        infos()
        usuarioStorage()
    }, [])

    // useEffect(() => {
    //     buscarTipos()
    // }, [todasCartas])

    useEffect(() => {
        infos()
    }, [todasTipoTrap, todasTipoSpell, todasTipoDragon])

    useEffect(() => {
        usuarioStorage()
    }, [usuario])

    const teste = async () => {
        getTodasCartas().then((response) => {
            console.log(response.data.data)
            setTodasCartas(response.data.data)
        }).catch((Error) => {
            console.log("Tudo errado")
        })

        
        await buscarTipo("Trap Card", setTodasTipoTrap)
        await buscarTipo("spell card&race=equip", setTodasTipoSpell)
        await buscarRace("dragon", setTodasTipoDragon)
    }

    // const buscarTipos = () => {
    //     // const teste44 = todasCartas.filter((card)=>card.type == "Trap Card")
    //     setTodasTipoTrap(todasCartas.filter((card)=>card.type == "Trap Card"))
    // }

    const buscarTipo = async (tipo: string, state: any) => {
        getPorTipo(tipo).then((response) => {
            state(response.data.data)
            console.log(response.data.data)
        }).catch((Error) => {
            console.log("Tudo errado de novo")
        })
    }

    const buscarRace = async (tipo: string, state: any) => {
        getPorRace(tipo).then((response) => {
            state(response.data.data)
            console.log(response.data.data)
        }).catch((Error) => {
            console.log("Tudo errado de novo")
        })
    }

    async function playSound(son: number) {
        if (son == 1) {
            const { sound } = await Audio.Sound.createAsync(require('../../assets/sons/comprarCarta.wav'));
            await sound.playAsync();
        }else if (son == 2) {
            const { sound } = await Audio.Sound.createAsync(require('../../assets/sons/somCardDragon.mp3'));
            await sound.playAsync();
        }
    }
    const verificaDeck = async ( carta:any ) => {
        for (const card of usuario.cartas) {
            console.log(usuario.cash)
            if (card.carta.id === carta.id) {
                const novoCash = ((Number(await usuario.cash) - 0.50) + Number(carta.card_prices[0].cardmarket_price));
                console.log(novoCash)
                await patchUsuarioCash(usuario.id, novoCash);
                console.log(card.carta.id)
                await infos();
                console.log(usuario.cash)
                return true;
            }
        }
        const novoCash = (Number(await usuario.cash) - 0.50);
        console.log(novoCash);

        await patchUsuarioCash(usuario.id, novoCash);
        return false;
    };

    const addCarta = async (tipo:any) => {

        const indiceAleatorio = Math.floor(Math.random() * tipo.length);
        const cartaAleatoria = tipo[indiceAleatorio];
        const verificador = await verificaDeck( cartaAleatoria );
        console.log(verificador);
        if (!verificador) {
            const carta:any = {
                id: cartaAleatoria.id,
                name: cartaAleatoria.name,
                type: cartaAleatoria.type,
                desc: cartaAleatoria.desc,
                preco: cartaAleatoria.card_prices[0].cardmarket_price,
                img: cartaAleatoria.card_images[0].image_url
            };
            const cartasDoUsuario = await usuario.cartas;
            const atualizado = [...cartasDoUsuario, { carta }];
            await patchUsuarioCards(usuario.id, atualizado);
        }
        await infos();
    };

    return (
        <ImageBackground source={background} style={styles.container}>
            <InfosUser />

            <View style={{alignItems: "center"}}>

            <View style={styles.containerCards}>
                <TouchableOpacity onPress={() => { playSound(1), addCarta(todasTipoTrap) }} style={[styles.cardTrap, styles.cardCanto]}>
                    <Image source={card} style={styles.imgCard} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { playSound(1), addCarta(todasCartas) }} style={styles.card}>
                    <Image source={card} style={styles.imgCard} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { playSound(1), addCarta(todasTipoSpell) }} style={[styles.cardEquip, styles.cardCanto, { marginRight: 0 }]}>
                    <Image source={card} style={styles.imgCard} />
                </TouchableOpacity>

            </View>

            <View style={{width: 100, height: 100, marginBottom: 20, marginTop: "3%"}}>
                <TouchableOpacity onPress={() => { playSound(2), addCarta(todasTipoDragon) }} style={[styles.cardEquipDragon, styles.cardMeio, { marginRight: 0 }]}>
                    <Image source={cardDragon} style={styles.imgCardDragon} />
                </TouchableOpacity>
            </View>
            </View>

        </ImageBackground>
    )
}