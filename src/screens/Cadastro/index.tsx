import React, { useState } from "react"
import { View, ImageBackground, TextInput, Text, Button, Alert, TouchableOpacity, Pressable } from "react-native"
import { styles } from "./styles"
import fundoCadastro from "../../assets/images/fundoCadastro.png"
import { useNavigation } from "@react-navigation/native"
import { ButtonNav } from "../../components/ButtonNav"
import { getUsuario, postNovoUsuario } from "../../services/ApiConta";

export const Cadastro = () => {
    const navigation = useNavigation<any>();
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');

    const handleCadastro = async () => {

        const response = await getUsuario(email)

        if (!email.match(/^\w+@gmail.com$/)) {
            alert("@gmail.com obrigatório");
            return;
        }

        if(nome.length <4){
            alert("Preencha o nome e minimo de 4 caracteres")
            return
        }
        if (senha !== confirmarSenha) {
          alert('As senhas não coincidem')
          return
        }

        if(senha.length <6){
            alert("Minimo 6 caracteres")
            return
            
        } else{
  
        if(response.data.length == 0 ) {
            try {
                await postNovoUsuario(
                    nome,
                    email,
                    senha,
                    1000,
                    [],
                    [],
                )
      
                alert('Cadastro realizado com sucesso!');
                navigation.navigate("Login")
          
            } catch (error) { 
                alert('Erro ao cadastrar');
            }

        } else {
          alert('Email já cadastrado')
        }
    }
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
                            onChangeText={(texto) => setNome(texto)}
                        />
                    </View>

                    <View style={styles.inputView}>

                        <TextInput
                            style={styles.input}
                            placeholder="E-mail"
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

                    <View style={styles.inputView}>

                        <TextInput
                            style={styles.input}
                            placeholder="Confirm Password"
                            placeholderTextColor="black"
                            secureTextEntry={true}
                            onChangeText={(texto) => setConfirmarSenha(texto)}
                        />
                    </View>

                    <ButtonNav 
                        title="REGISTER"
                        openScreen={()=>{handleCadastro()}}
                    />
                    <TouchableOpacity onPress={()=> navigation.navigate("Login")()} style={styles.buttonCadastro}>
                 <Text style={styles.buttonCadastroText}>Já possui cadastro?</Text>
                 </TouchableOpacity>

                </View>
            </View>

        </ImageBackground>
    )
}