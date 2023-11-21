import { Text, View, Image, ImageBackground, FlatList } from "react-native";
import { styles } from "./styles";
import carta from '../../assets/images/Dark.jpeg'
import dragao from '../../assets/images/dragon.png'
import { Loading } from "../Loading";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../contexts/LoginContext";



export const Cards = () => {
    
    const {usuario, infos} = useContext (LoginContext)
    const [] = useState ([])

    useEffect(()=>{
        infos()
        console.log(usuario.cartas[0],"tudo errado");
        
    },[])

    const data = [
        {id: usuario.cartas[0].carta.id ,name :usuario.cartas[0].carta.name, image: usuario.cartas[0].carta.img},
        {id: usuario.cartas[1].carta.id ,name :usuario.cartas[1].carta.name, image: usuario.cartas[1].carta.img},
        {id: usuario.cartas[1].carta.id ,name :usuario.cartas[1].carta.name, image: usuario.cartas[1].carta.img},
        {id: usuario.cartas[1].carta.id ,name :usuario.cartas[1].carta.name, image: usuario.cartas[1].carta.img},
        {id: usuario.cartas[1].carta.id ,name :usuario.cartas[1].carta.name, image: usuario.cartas[1].carta.img},
        {id: usuario.cartas[1].carta.id ,name :usuario.cartas[1].carta.name, image: usuario.cartas[1].carta.img},
        {id: usuario.cartas[1].carta.id ,name :usuario.cartas[1].carta.name, image: usuario.cartas[1].carta.img},
        {id: usuario.cartas[1].carta.id ,name :usuario.cartas[1].carta.name, image: usuario.cartas[1].carta.img},
        {id: usuario.cartas[1].carta.id ,name :usuario.cartas[1].carta.name, image: usuario.cartas[1].carta.img},
        {id: usuario.cartas[1].carta.id ,name :usuario.cartas[1].carta.name, image: usuario.cartas[1].carta.img},
        {id: usuario.cartas[1].carta.id ,name :usuario.cartas[1].carta.name, image: usuario.cartas[1].carta.img},
        {id: usuario.cartas[1].carta.id ,name :usuario.cartas[1].carta.name, image: usuario.cartas[1].carta.img},
        {id: usuario.cartas[1].carta.id ,name :usuario.cartas[1].carta.name, image: usuario.cartas[1].carta.img},
        {id: usuario.cartas[1].carta.id ,name :usuario.cartas[1].carta.name, image: usuario.cartas[1].carta.img},
        {id: usuario.cartas[1].carta.id ,name :usuario.cartas[1].carta.name, image: usuario.cartas[1].carta.img},
        {id: usuario.cartas[1].carta.id ,name :usuario.cartas[1].carta.name, image: usuario.cartas[1].carta.img},
        {id: usuario.cartas[1].carta.id ,name :usuario.cartas[1].carta.name, image: usuario.cartas[1].carta.img},

     
    ]

    interface Tipo {
        name?: string;
        image:any;
    }

    const Card =({name, image}:Tipo) =>(
        <View style={styles.cardContainer}>
            <Image source={{uri: image}} style={styles.imgCard}/>
            {/* <Text style={styles.textCard}>{name}</Text> */}
        </View>
    )

    const [showWelcome, setShowWelcome] = useState(true); // State to control whether to show Welcome or Shop

    // useEffect(() => {
    //     setTimeout(() => {
    //         setShowWelcome(false); // After a certain time, set showWelcome to false, rendering Shop
    //     }, 2500); // Set timeout for 5 seconds
    // }, []); // Run useEffect only once

    // if (showWelcome) {
    //     return <Loading />; // Render Welcome if showWelcome is true
    // }

    return (
        <ImageBackground source={dragao} style={styles.container}>
            <Text style={styles.title}>Lista de Cartas</Text>
            <FlatList
            data={data}
            keyExtractor={(item)=>item.id}
            renderItem={({item}) => <Card  image={item.image}/>}
            numColumns={3}
            showsVerticalScrollIndicator={false}
            
            />
        </ImageBackground>
    )
}