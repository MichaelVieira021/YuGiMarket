import React, { createContext, useState } from "react";
import { getUsuario } from "../../services/ApiConta";
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ContextProps {
    children: React.ReactNode
}

interface Usuario {
    id: number;
    nome: string;
    email: string;
    cartas: [];
    deck: [];
    cash: number;
}

export const StorageContext = createContext<any>({})

export function StorageContextProvider({ children }: ContextProps) {
    const [usuarioLogado, setUsuarioLogado] = useState({});
    const [usuario, setUsuario] = useState<Usuario | {}>({});

    async function infos() {

        try {
            const usuarioInfos = await AsyncStorage.getItem("usuario");

            if (usuarioInfos) {
                const usuarioObjeto = JSON.parse(usuarioInfos);
                setUsuarioLogado(await usuarioObjeto);
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

    async function atualizar(email: string) {
        getUsuario(email).then((response) => {
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

                    AsyncStorage.setItem('usuario', JSON.stringify(novoUsuario));

                    return novoUsuario;
                });
            } else {
                console.log("Tudo errado")
            }

        }).catch((error) => {
            console.log("Tudo errado", error)
        })
    }


    return (
        <StorageContext.Provider value={{
            usuarioLogado,
            infos,
            atualizar
        }}>
            {children}</StorageContext.Provider>
    )
}