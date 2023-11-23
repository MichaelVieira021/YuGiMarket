import React, { useState } from "react"
import { View, ImageBackground, TextInput, Text, TouchableOpacity} from "react-native"
import { styles } from "./styles"
import fundoCadastro from "../../assets/images/fundoCadastro.png"
import { useNavigation } from "@react-navigation/native"
import { ButtonNav } from "../../components/ButtonNav"
import { getUsuario, postNovoUsuario } from "../../services/ApiConta";
import { CustomModal } from "../../components/ModalCarta"
import { FontAwesome, AntDesign, MaterialIcons, Ionicons } from '@expo/vector-icons';

export const Cadastro = () => {
    const navigation = useNavigation<any>();
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [mensagemErro, setMensagemErro] = useState<string>("")

    const closeModal = () => {
        if(mensagemErro !== 'Cadastro realizado com sucesso!'){
            setMensagemErro("")
            setModalVisible(false);
        }else{
            setMensagemErro("")
            setModalVisible(false);
            navigation.navigate("Login")
        }
    };

    const openModal = (mensagem:string) => {
        setMensagemErro(mensagem)
        setModalVisible(true);
    };

    const handleCadastro = async () => {

        const response = await getUsuario(email)

        if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            openModal("Digite um e-mail válido");
            return;
        }
       
        if(nome.length <4){
            openModal("forneça um nome com pelo menos 4 caracteres")
            return
        }

        if (senha !== confirmarSenha) {
            openModal('As senhas não coincidem')
          return
        }
        
        if(senha.length <6){
            openModal("insira uma senha com pelo menos 6 caracteres")
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
      
                openModal('Cadastro realizado com sucesso!');
          
            } catch (error) { 
                alert('Erro ao cadastrar');
            }

        } else {
          openModal('Email já cadastrado')
        }
    }
}
    return ( 
        <ImageBackground source={fundoCadastro} style={styles.backgroundImage}>
            <View style={styles.container}>
                <View style={styles.containerInput} >
                    <View style={styles.inputView}>
                        <Ionicons name="ios-person-circle" size={22} color="#b88019" />
                        <TextInput
                            style={styles.input}
                            placeholder="Nome"
                            placeholderTextColor="black"
                            onChangeText={(texto) => setNome(texto)}
                        />
                    </View>

                    <View style={styles.inputView}>
                    <MaterialIcons name="email" size={21} color="#b88019" />
                        <TextInput
                            style={styles.input}
                            placeholder="E-mail"
                            placeholderTextColor="black"
                            onChangeText={(texto) => setEmail(texto)}
                        />
                    </View>

                    <View style={[styles.inputView, {paddingLeft: 12}]}>
                    <FontAwesome name="lock" size={22} color="#b88019" />
                        <TextInput
                            style={[styles.input, {marginLeft: 10}]}
                            placeholder="Password"
                            placeholderTextColor="black"
                            secureTextEntry={true}
                            onChangeText={(texto) => setSenha(texto)}
                        />
                    </View>

                    <View style={[styles.inputView, {paddingLeft: 12}]}>
                    <FontAwesome name="lock" size={22} color="#b88019" />
                        <TextInput
                            style={[styles.input, {marginLeft: 10}]}
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

                    <TouchableOpacity onPress={()=> navigation.navigate("Login")} style={styles.buttonCadastro}>
                        <Text style={styles.buttonCadastroText}>Já possui cadastro? Logar</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <CustomModal visible={modalVisible} onClose={closeModal} estilo={{backgroundColor: "rgba(0, 0, 0, 0.8)", margin: 50}}>
                <View style={{ alignItems: "center", height: 120, width: "100%", alignSelf: "center"}}>
                    {mensagemErro !== 'Cadastro realizado com sucesso!' ? 
                    <FontAwesome name="warning" size={44} color="yellow" /> :
                    <AntDesign name="Trophy" size={44} color="green" />}

                    <Text style={{fontSize: 24, color: "white", marginTop: 10}}>{mensagemErro}</Text>
                </View>
            </CustomModal>

        </ImageBackground>
    )
}