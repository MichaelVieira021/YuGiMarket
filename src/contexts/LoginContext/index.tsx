import React, { createContext, useEffect, useState } from "react";
import { getLoginUsuario, getUsuario } from "../../services/ApiConta";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";

interface ContextProps {
	children: React.ReactNode
}

interface PropsContextoLogin {
    id: number;
    email: string;
    nome: string;
}

interface Usuario {
    id: number;
    nome: string;
    email: string;
    cartas: [];
    deck: [];
    cash: number;
}

export const LoginContext = createContext<any>({})

export function LoginContextProvider({children}: ContextProps){
    const [logado, setLogado] = useState("false");
    const navigate = useNavigation<any>();
    const [usuario, setUsuario] = useState<Usuario | {}>({});
    const [usuarioInfos, setUsuarioInfos] = useState<Usuario | null>();
    
    useEffect(()=>{
    },[usuario])

    function verificarLogin(email: string, senha: string){
        getLoginUsuario(email, senha).then((response)=>{
            
            if(response.data.length === 1){
                setUsuario((prevState) => {
                    const novoUsuario = {
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
                usuarioStorage()
                navigate.navigate("Todos")

            }else{
            }

        }).catch((error)=> {
        })
    }

    function deslogar(){
        AsyncStorage.removeItem("usuario")
        AsyncStorage.setItem('logado', "false")
        setUsuarioInfos(null)
        setUsuario({})
        navigate.navigate("Login")
    }

    useEffect(()=>{},[logado])
    async function verificarLogado(){
        const verificado = await AsyncStorage.getItem("logado");
        if(verificado === "true" || verificado === "false"){
            setLogado(verificado)
        }else{
        }
    }
    
    useEffect(()=>{},[usuarioInfos])
    async function usuarioStorage(){
        try {
            const usuarioInfosStorage = await AsyncStorage.getItem("usuario");
        
            if (usuarioInfosStorage) {
              const usuarioObjeto = JSON.parse(usuarioInfosStorage);
              setUsuarioInfos(await usuarioObjeto);
 
              return usuarioObjeto;
            } else {
              console.log("Nenhum usuário encontrado no AsyncStorage");
              return null;
            }

        } catch (error) {
            console.error("Erro ao obter usuário do AsyncStorage:", error);
            return null;
        }
    }

    async function infos(){
        // atualizar(usuario.email)
        try {
            const usuarioInfos = await AsyncStorage.getItem("usuario");
        
            if (usuarioInfos) {
                const usuarioObjeto = JSON.parse(usuarioInfos);
                setUsuarioInfos(await usuarioObjeto);
                return await atualizar(usuarioObjeto.email)

            } else {
                console.log("Nenhum usuário encontrado no AsyncStorage");
                return null;
            }

        } catch (error) {
            console.error("Erro ao obter usuário do AsyncStorage:", error);
            return null;
        }
    }

    async function atualizar(email: string){
        getUsuario(email).then((response)=>{
            if(response.data.length === 1){

                setUsuario((prevState) => { 
                    const novoUsuario = {
                        id: response.data[0].id,
                        nome: response.data[0].nome,
                        email: response.data[0].email,
                        cartas: response.data[0].cartas,
                        deck: response.data[0].deck,
                        cash: response.data[0].cash,
                    };
                  
                    AsyncStorage.setItem('usuario', JSON.stringify(novoUsuario));
                    
                    return novoUsuario;
                });
            }else{
            }

        }).catch((error)=> {
        })
    }

    return (
        <LoginContext.Provider value={{
            verificarLogin,
            usuario,
            verificarLogado,
            deslogar,
            usuarioStorage,
            usuarioInfos,
            logado,
            atualizar,
            infos
        }}>
        {children}</LoginContext.Provider>
    )
}