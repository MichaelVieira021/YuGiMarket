import { Text, View, Image, ImageBackground, FlatList } from "react-native";
import { styles } from "./styles";
import carta from '../../assets/images/Dark.jpeg'
import dragao from '../../assets/images/dragon.png'
import { Loading } from "../Loading";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../contexts/LoginContext";



export const Deck = () => {
    
    const {usuario, infos} = useContext (LoginContext)
    const [deckUsuario, setDeckUsuario] = useState ([])

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
        <View style={styles.cardContainer}>
            <Image source={{uri: carta.img}} style={styles.imgCard}/>
        </View>
    )

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
        </ImageBackground>
    )
}