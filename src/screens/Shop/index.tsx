import { Image, ImageBackground, TouchableOpacity, View } from "react-native"
import background from '../../assets/images/Group_2dsds.png'
import { styles } from "./styles"
import card from '../../assets/images/cartaVertical.png'
import cardDragon from '../../assets/images/IconDragon.png'
import { useContext, useEffect } from "react"
import { InfosUser } from "../../components/InfosUser"
import { cartaType, patchUsuarioCards, patchUsuarioCash } from "../../services/ApiConta"
import { LoginContext } from "../../contexts/LoginContext"
import { Audio } from 'expo-av';
import { CartasContext } from "../../contexts/CartasContext"

export const Shop = () => {
    const { usuario, atualizar} = useContext(LoginContext)
    const { todasCartas, todasTipoTrap, todasTipoSpell, todasTipoDragon, obterCartas} = useContext(CartasContext)

    useEffect(() => {
        obterCartas()
        atualizar()
    }, [])

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
            if (card.carta.id === carta.id) {
                const novoCash = ((Number(await usuario.cash) - 0.50) + Number(carta.card_prices[0].cardmarket_price));
                await patchUsuarioCash(usuario.id, novoCash);
                await atualizar();
                return true;
            }
        }
        await patchUsuarioCash(usuario.id, (Number(await usuario.cash) - 0.50));
        return false;
    };

    const addCarta = async (tipo:any) => {
        const cartaAleatoria = tipo[Math.floor(Math.random() * tipo.length)];

        if (!await verificaDeck( cartaAleatoria )) {
            const carta:cartaType = {
                id: cartaAleatoria.id,
                name: cartaAleatoria.name,
                type: cartaAleatoria.type,
                desc: cartaAleatoria.desc,
                preco: cartaAleatoria.card_prices[0].cardmarket_price,
                img: cartaAleatoria.card_images[0].image_url
            };
            await patchUsuarioCards(usuario.id, [...await usuario.cartas, { carta }]);
        }
        await atualizar();
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
                    <TouchableOpacity onPress={() => { playSound(2), addCarta(todasTipoDragon) }} style={[styles.cardEquipDragon, { marginRight: 0 }]}>
                        <Image source={cardDragon} style={styles.imgCardDragon} />
                    </TouchableOpacity>
                </View>
            </View>

        </ImageBackground>
    )
}