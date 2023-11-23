import React, { createContext, useContext, useEffect, useState } from "react";
import { getPorRace, getPorTipo, getTodasCartas } from "../../services/ApiYugioh";
import { LoginContext } from "../LoginContext";

interface ContextProps {
	children: React.ReactNode
}

export const CartasContext = createContext<any>({})

export function CartasContextProvider({children}: ContextProps){
    const { usuario, infos, usuarioStorage } = useContext(LoginContext)
    const [todasCartas, setTodasCartas] = useState([])
    const [todasTipoTrap, setTodasTipoTrap] = useState([])
    const [todasTipoSpell, setTodasTipoSpell] = useState([])
    const [todasTipoDragon, setTodasTipoDragon] = useState([])

    useEffect(() => {
        obterCartas()
        // infos()
        // usuarioStorage()
    }, [])

    // useEffect(() => {
    //     infos()
    // }, [todasTipoTrap, todasTipoSpell, todasTipoDragon])

    // useEffect(() => {
    //     usuarioStorage()
    // }, [usuario])

    const obterCartas = async () => {
        getTodasCartas().then((response) => {
            console.log(response.data.data)
            setTodasCartas(response.data.data)
        }).catch((Error) => {
            console.log("Tudo errado")
        })

        await buscarTipo("Trap Card", setTodasTipoTrap, "type")
        await buscarTipo("spell card&race=equip", setTodasTipoSpell, "type")
        await buscarTipo("dragon", setTodasTipoDragon, "race")
    }

    const buscarTipo = async (pesquisa: string, state: any, tipo: any) => {
        if(tipo == "type"){
            getPorTipo(pesquisa).then((response) => {
                state(response.data.data)
            }).catch((Error) => {
                console.log(Error)
            })
        }else if(tipo == "race"){
            getPorRace(pesquisa).then((response) => {
                state(response.data.data)
            }).catch((Error) => {
                console.log(Error)
            })
        }
    }

    return (
        <CartasContext.Provider value={{
            todasCartas,
            todasTipoTrap,
            todasTipoSpell,
            todasTipoDragon,
            obterCartas
        }}>
        {children}</CartasContext.Provider>
    )
}