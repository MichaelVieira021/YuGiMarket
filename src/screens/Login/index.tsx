import { Animated, Text, View, Image, TextInput, TouchableOpacity, ImageBackground, Pressable } from 'react-native'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { styles } from './styles'
import backgroundLogin from '../../assets/images/backgroundLogin.jpg'
import enigmaLogin from '../../assets/images/enigmaLogin.png'
import { useNavigation } from "@react-navigation/native"
import { ButtonNav } from '../../components/ButtonNav'
import { LoginContext } from '../../contexts/LoginContext'



export const Login = () => {
    const enigmaImage = useRef(new Animated.Value(0)).current;
    const { verificarLogin} = useContext(LoginContext);
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const navigation = useNavigation<any>();

    // useEffect(() => {
    //     Animated.loop(
    //         Animated.timing(
    //             enigmaImage,
    //             {
    //                 toValue: 1,
    //                 duration: 1500,
    //                 useNativeDriver: true,
    //             }
    //         )
    //     ).start();
    // }, []);

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
                </View>

                <TouchableOpacity onPress={()=>verificarLogin(email, senha)} style={styles.containerEnigma}>
                    {/* <Animated.Image
                        source={enigmaLogin}
                        style={[
                            styles.enigmaImage,
                            {
                                transform: [
                                    {
                                        scale: enigmaImage.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [0.1,1.3], // Adjust the output range to change the scaling factor
                                        }),
                                    },
                                ],
                            },
                        ]}
                    /> */}
                </TouchableOpacity>
                {/* <TouchableOpacity>
                    <Text style={styles.register} onPress={openRegister}>Registrar</Text>
                </TouchableOpacity> */}
                <ButtonNav style={styles.button} title='Não tem cadastro? Cadastre-se!' openScreen={()=>openRegister()}/>
                
            </View>
        </ImageBackground>
    )
}