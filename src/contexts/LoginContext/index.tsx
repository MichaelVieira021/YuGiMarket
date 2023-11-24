import React, { createContext, useState } from "react";
import { cartaType, getLoginUsuario, getUsuario } from "../../services/ApiConta";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";
import { CustomModal } from "../../components/ModalCarta";
import { Text, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

interface ContextProps {
    children: React.ReactNode
}

interface Usuario {
    id: number;
    nome: string;
    email: string;
    cartas: cartaType[];
    deck: cartaType[];
    cash: number;
}

export const LoginContext = createContext<any>({})

export function LoginContextProvider({ children }: ContextProps) {
    const [usuario, setUsuario] = useState<Usuario | null>();
    const [logado, setLogado] = useState("false");
    const navigate = useNavigation<any>();
    const [modalVisible, setModalVisible] = useState(false);

    const closeModal = () => {
        setModalVisible(false);
    };

    const openModal = () => {
        setModalVisible(true);
    };

    function verificarLogin(email: string, senha: string) {
        getLoginUsuario(email, senha).then((response) => {

            if (response.data.length === 1) {
                setUsuario((prevState) => {
                    const novoUsuario:Usuario = {
                        id: response.data[0].id,
                        nome: response.data[0].nome,
                        email: response.data[0].email,
                        cartas: response.data[0].cartas,
                        deck: response.data[0].deck,
                        cash: response.data[0].cash,
                    };
                    AsyncStorage.setItem('usuario', JSON.stringify(novoUsuario));
                    AsyncStorage.setItem('logado', "true");

                    return novoUsuario;
                });

                setLogado("true")
                navigate.navigate("Todos")
            } else {
                openModal()
            }

        }).catch((error) => {
            console.log("Tudo errado", error)
        })
    }

    function deslogar() {
        AsyncStorage.removeItem("usuario")
        AsyncStorage.setItem('logado', "false")
        setUsuario(null)
        navigate.navigate("Login")
    }

    async function verificarLogado() {
        const verificado = await AsyncStorage.getItem("logado");

        if (verificado === "true" || verificado === "false") {
            setLogado(verificado)
        } else {
            console.log("deu errado ?")
        }
    }

    async function atualizar() {
        const usuarioLogado = await AsyncStorage.getItem("usuario");

        if(usuarioLogado){
            const usuarioLogadoObjeto = JSON.parse(usuarioLogado);
            getUsuario(usuarioLogadoObjeto.email).then((response) => {
                if (response.data.length === 1) {
    
                    setUsuario((prevState) => {
                        const novoUsuario = {
                            id: response.data[0].id,
                            nome: response.data[0].nome,
                            email: response.data[0].email,
                            cartas: response.data[0].cartas,
                            deck: response.data[0].deck,
                            cash: response.data[0].cash,
                        };
                        // console.log(response, "oioioioi")
    
                        AsyncStorage.setItem('usuario', JSON.stringify(novoUsuario));
                        return novoUsuario;
                    });
                } else {
                    console.log("Tudo errado1")
                }
            }).catch((error) => {
                console.log("Tudo errado2", error)
            })
        }  
    }

    return (
        <LoginContext.Provider value={{
            verificarLogin,
            usuario,
            verificarLogado,
            deslogar,
            logado,
            atualizar,
        }}>{children}
            <CustomModal visible={modalVisible} onClose={closeModal} estilo={{backgroundColor: "rgba(0, 0, 0, 0.8)", margin: 50}}>
                <View style={{ alignItems: "center", height: 120, width: "100%", alignSelf: "center"}}>
                    <FontAwesome name="warning" size={44} color="yellow" />
                    <Text style={{fontSize: 24, color: "white", marginTop: 10}}>E-mail ou senha incorretos!</Text>
                </View>
            </CustomModal>
        
        </LoginContext.Provider>
    )
}