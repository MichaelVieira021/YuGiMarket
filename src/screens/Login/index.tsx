import { Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useContext, useState } from 'react'
import { styles } from './styles'
import backgroundLogin from '../../assets/images/backgroundLogin.jpg'
import { useNavigation } from "@react-navigation/native"
import { LoginContext } from '../../contexts/LoginContext'
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

export const Login = () => {
    const { verificarLogin} = useContext(LoginContext);
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const navigation = useNavigation<any>();

    return (

        <ImageBackground source={backgroundLogin} style={styles.backgroundImage}>
            <View style={styles.container}>
                <View style={styles.containerInput}>

                    <View style={styles.inputView}>
                        <MaterialIcons name="email" size={22} color="#b88019" />
                        <TextInput
                            style={styles.input}
                            placeholder="Login"
                            placeholderTextColor="black"
                            onChangeText={(texto) => setEmail(texto)}
                        />
                    </View>

                    <View style={[styles.inputView, {paddingLeft: 10}]}>
                        <FontAwesome name="lock" size={22} color="#b88019" />
                        <TextInput
                            style={[styles.input, {marginLeft: 10}]}
                            placeholder="Password"
                            placeholderTextColor="black"
                            secureTextEntry={true}
                            onChangeText={(texto) => setSenha(texto)}
                        />
                    </View>

                    <TouchableOpacity onPress={()=>navigation.navigate("Registro")} style={styles.buttonCadastro}>
                        <Text style={styles.buttonCadastroText}>Não tem cadastro? Cadastre-se!</Text>
                    </TouchableOpacity>

                </View>

                <TouchableOpacity onPress={()=>verificarLogin(email, senha)} style={styles.containerEnigma}></TouchableOpacity>
            </View>
        </ImageBackground>
    )
}