import { Animated, Text, View, Image, TextInput, TouchableOpacity, ImageBackground, Pressable } from 'react-native'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { styles } from './styles'
import backgroundLogin from '../../assets/images/backgroundLogin.jpg'
import { useNavigation } from "@react-navigation/native"
import { LoginContext } from '../../contexts/LoginContext'



export const Login = () => {
    const { verificarLogin} = useContext(LoginContext);
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const navigation = useNavigation<any>();

    function openRegister(){
        navigation.navigate("Registro");
    }

    return (

        <ImageBackground source={backgroundLogin} style={styles.backgroundImage}>
            
            <View style={styles.container}>
                <View style={styles.containerInput} >
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.input}
                            placeholder="Login"
                            placeholderTextColor="black"
                            onChangeText={(texto) => setEmail(texto)}
                        />
                    </View>

                    <View style={styles.inputView}>

                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            placeholderTextColor="black"
                            secureTextEntry={true}
                            onChangeText={(texto) => setSenha(texto)}
                        />
                    </View>
                    <TouchableOpacity onPress={()=>openRegister()} style={styles.buttonCadastro}>
                 <Text style={styles.buttonCadastroText}>Não tem cadastro? Cadastre-se!</Text>
              </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={()=>verificarLogin(email, senha)} style={styles.containerEnigma}></TouchableOpacity>
            </View>
        </ImageBackground>
    )
}