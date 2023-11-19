import React from "react"
import { View, ImageBackground, TextInput, Text, Button, Alert, TouchableOpacity } from "react-native"
import { styles } from "./styles"
import fundoCadastro from "../../assets/images/fundoCadastro.png"
import { useNavigation } from "@react-navigation/native"
import { ButtonNav } from "../../components/ButtonNav"

export const Sregister = () => {

    const navigation = useNavigation<any>();
    
    function openScreen() {
        navigation.navigate("Login");
    }
    return (
        <ImageBackground source={fundoCadastro} style={styles.backgroundImage}>
            <View style={styles.container}>
                <View style={styles.containerInput} >

                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.input}
                            placeholder="Nome"
                            placeholderTextColor="black"
                        />
                    </View>

                    <View style={styles.inputView}>

                        <TextInput
                            style={styles.input}
                            placeholder="E-mail"
                            placeholderTextColor="black"


                        />
                    </View>

                    <View style={styles.inputView}>

                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            placeholderTextColor="black"
                            secureTextEntry={true}
                        />
                    </View>

                    <View style={styles.inputView}>

                        <TextInput
                            style={styles.input}
                            placeholder="Confirm Password"
                            placeholderTextColor="black"
                            secureTextEntry={true}
                        />
                    </View>
                   <ButtonNav 
                   title="Register"
                   openScreen={()=>{openScreen()}}/>

                </View>
            </View>

        </ImageBackground>
    )
}