import { Text, View, Image, ImageBackground, FlatList } from "react-native";
import { styles } from "./styles";
import carta from '../../assets/images/Dark.jpeg'
import redemoinho from '../../assets/images/RedemoinhoCartas.jpg'
import { Loading } from "../Loading";
import { useEffect, useState } from "react";


export const Cards = () => {

    const data = [
        {id: "1", name: "Dark Magician", image: carta},
        {id: "2", name: "Dark Magician", image: carta},
        {id: "3", name: "Dark Magician", image: carta},
        {id: "1", name: "Dark Magician", image: carta},
        {id: "2", name: "Dark Magician", image: carta},
        {id: "3", name: "Dark Magician", image: carta},
        {id: "1", name: "Dark Magician", image: carta},
        {id: "2", name: "Dark Magician", image: carta},
        {id: "3", name: "Dark Magician", image: carta},
        {id: "1", name: "Dark Magician", image: carta},
        {id: "2", name: "Dark Magician", image: carta},
        {id: "1", name: "Dark Magician", image: carta},
        {id: "2", name: "Dark Magician", image: carta},
        {id: "1", name: "Dark Magician", image: carta},
        {id: "2", name: "Dark Magician", image: carta},
        {id: "1", name: "Dark Magician", image: carta},
        {id: "2", name: "Dark Magician", image: carta},
        {id: "1", name: "Dark Magician", image: carta},
        {id: "2", name: "Dark Magician", image: carta},
        {id: "3", name: "Dark Magician", image: carta}
    ]

    interface Tipo {
        name: string;
        image:any;
    }

    const Card =({name, image}:Tipo) =>(
        <View style={styles.cardContainer}>
            <Image source={image} style={styles.imgCard}/>
            <Text style={styles.textCard}>{name}</Text>
        </View>
    )

    const [showWelcome, setShowWelcome] = useState(true); // State to control whether to show Welcome or Shop

    useEffect(() => {
        setTimeout(() => {
            setShowWelcome(false); // After a certain time, set showWelcome to false, rendering Shop
        }, 2500); // Set timeout for 5 seconds
    }, []); // Run useEffect only once

    if (showWelcome) {
        return <Loading />; // Render Welcome if showWelcome is true
    }

    return (
        <ImageBackground source={redemoinho} style={styles.container}>
            <Text style={styles.title}>Suas Cartas</Text>
            <FlatList
            data={data}
            keyExtractor={(item)=>item.id}
            renderItem={({item}) => <Card name={item.name} image={item.image}/>}
            numColumns={3}
            showsVerticalScrollIndicator={false}
            
            />
        </ImageBackground>
    )
}